import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const parameters = {
  count: 100000,
  size: 0.01,
  radius: 5,
  branches: 3,
  spin: 1,
  randomness: 0.2,
  randomnessPower: 3,
  insideColor: "#ff6030",
  outsideColor: "#1b3984",
};

export const TwistingNether = () => {
  console.log("rendering galaxy");

  // Access the WebGL renderer, use call function instead of destructure to avoid rerender
  const gl = useThree((state) => state.gl);

  const positions = new Float32Array(parameters.count * 3);
  const randomness = new Float32Array(parameters.count * 3);
  const colors = new Float32Array(parameters.count * 3);
  const scales = new Float32Array(parameters.count * 1);

  const colorInside = new THREE.Color(parameters.insideColor);
  const colorOutside = new THREE.Color(parameters.outsideColor);

  // Set verticies
  for (let i = 0; i < parameters.count; i++) {
    // Position
    const i3 = i * 3;

    const radius = Math.random() * parameters.radius;

    const spinAngle = radius * parameters.spin;
    const branchAngle =
      ((i % parameters.branches) / parameters.branches) * Math.PI * 2;

    const randomX =
      Math.pow(Math.random(), parameters.randomnessPower) *
      (Math.random() < 0.5 ? 1 : -1) *
      parameters.randomness *
      radius;
    const randomY =
      Math.pow(Math.random(), parameters.randomnessPower) *
      (Math.random() < 0.5 ? 1 : -1) *
      parameters.randomness *
      radius;
    const randomZ =
      Math.pow(Math.random(), parameters.randomnessPower) *
      (Math.random() < 0.5 ? 1 : -1) *
      parameters.randomness *
      radius;

    positions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
    positions[i3 + 1] = randomY;
    positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

    randomness[i3] = randomX;
    randomness[i3 + 1] = randomY;
    randomness[i3 + 2] = randomZ;

    // Color
    const mixedColor = colorInside.clone();
    mixedColor.lerp(colorOutside, radius / parameters.radius);

    colors[i3] = mixedColor.r;
    colors[i3 + 1] = mixedColor.g;
    colors[i3 + 2] = mixedColor.b;

    // Scales
    scales[i] = Math.random();
  }

  // Set geometry
  const geometry = new THREE.BufferGeometry();

  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  geometry.setAttribute(
    "aRandomness",
    new THREE.BufferAttribute(randomness, 3)
  );
  geometry.setAttribute("aScale", new THREE.BufferAttribute(scales, 1));

  // Set material
  const material = new THREE.ShaderMaterial({
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    vertexColors: true,
    vertexShader: `
        uniform float uTime;
        uniform float uSize;

        attribute vec3 aRandomness;
        attribute float aScale;

        varying vec3 vColor;

        void main()
        {
            // Calculate model position
            vec4 modelPosition = modelMatrix * vec4(position, 1.0);

            // Rotation
            float angle = atan(modelPosition.x, modelPosition.z);
            float distanceToCenter = length(modelPosition.xz);
            float angleOffset = (1.0 / distanceToCenter) * uTime;
            angle += angleOffset;
            modelPosition.x = cos(angle) * distanceToCenter;
            modelPosition.z = sin(angle) * distanceToCenter;

            // Randomness
            modelPosition.xyz += aRandomness;

            // Calculate view and projection position
            vec4 viewPosition = viewMatrix * modelPosition;
            vec4 projectedPosition = projectionMatrix * viewPosition;
            
            // Set vertex position
            gl_Position = projectedPosition;

            // Vertex size
            gl_PointSize = uSize * aScale;
            gl_PointSize *= (1.0 / - viewPosition.z);

            // Vertex color
            vColor = color;
        }
    `,
    fragmentShader: `
        varying vec3 vColor;

        void main()
        {
            // Calculate the distance from the center of the point
            float strength = distance(gl_PointCoord, vec2(0.5));

            // // Make a circle texture by inverting a step function
            // strength = step(0.5, strength);
            // strength = 1.0 - strength;

            // // Diffuse point pattern, improves above with fade out toward the edge
            // strength *= 2.0;
            // strength = 1.0 - strength;

            // Light point pattern, improves above with exponential function
            strength = 1.0 - strength;
            strength = pow(strength, 10.0);

            // Set color to value passed from vertex shader
            vec3 color = mix(vec3(0.0), vColor, strength);
            
            // Apply solid color to fragment/pixel with alpha gradient
            gl_FragColor = vec4(vec3(strength), 1.0);

            #include <colorspace_fragment>
        }
    `,
    uniforms: {
      uTime: { value: 0 },
      uSize: { value: 2 * gl.getPixelRatio() },
    },
  });

  // Update material in tick function
  useFrame((state) => {
    // material.uniforms.uTime.value = state.clock.elapsedTime;
  });

  return <points args={[geometry, material]} />;
};
