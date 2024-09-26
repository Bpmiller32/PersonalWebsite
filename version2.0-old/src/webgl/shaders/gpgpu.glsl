uniform float uTime;
uniform float uTimeFrequency;
uniform float uDeltaTime;
uniform float uFlowFieldInfluence;
uniform float uFlowFieldInfluenceFrequency;
uniform float uFlowFieldStrength;
uniform float uFlowFieldFrequency;
uniform float uDecayRate;
uniform float uGlobalDirection;
uniform sampler2D uBase;

#include ./simplexNoise4d.glsl

void main()
{
    float time = uTime * uTimeFrequency;

    vec2 uv = gl_FragCoord.xy / resolution.xy;
    vec4 particle = texture(uSimulationTexture, uv);
    vec4 base = texture(uBase, uv);

    // Dead
    if (particle.a >= 1.0)
    {
        particle.a = mod(particle.a, 1.0);
        particle.xyz = base.xyz;
    }
    // Alive
    else
    {
        // Strength
        float strength = simplexNoise4d(vec4(base.xyz * 0.2, time + 1.0));
        float influence = (uFlowFieldInfluence - 0.5) * (uFlowFieldInfluenceFrequency);
        strength = smoothstep(influence, 1.0, strength);

        // Flow field, create a vec3 vector using a vec4 randomizer
        // arg1-3 particle's xyz + an offset so the psedo randomizer doesn't all look the same
        // arg 4, time for true randomness
        vec3 flowField = vec3(
            simplexNoise4d(vec4(particle.xyz * uFlowFieldFrequency + 0.0, time)),
            simplexNoise4d(vec4(particle.xyz * uFlowFieldFrequency + 1.0, time)),
            simplexNoise4d(vec4(particle.xyz * uFlowFieldFrequency + 2.0, time))
        );
        flowField = normalize(flowField);
        // global push upwards
        particle.y += uGlobalDirection;
        // Add the flowfield vector to the particle's xyz, multiply by deltatime, strengths
        particle.xyz += flowField * uDeltaTime * strength * uFlowFieldStrength;

        // Decay
        particle.a += uDeltaTime * uDecayRate;
    }

    gl_FragColor = particle;
}