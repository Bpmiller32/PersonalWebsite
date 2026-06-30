# Billy Miller — Personal Website

_A portfolio and engineering playground: a hand-written WebGL galaxy hero, animations, and a Firestore → Discord notification backend_

**Languages**

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![GLSL](https://img.shields.io/badge/GLSL-5586A4?style=flat-square&logo=opengl&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

**Framework & 3D**

![React](https://img.shields.io/badge/React_18-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Three.js](https://img.shields.io/badge/Three.js-000000?style=flat-square&logo=threedotjs&logoColor=white)
![React Three Fiber](https://img.shields.io/badge/React_Three_Fiber-000000?style=flat-square&logo=react&logoColor=61DAFB)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white)
![Vue 3](<https://img.shields.io/badge/Vue_3_(v1)-35495E?style=flat-square&logo=vuedotjs&logoColor=4FC08D>)

**Libraries**

![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Lottie](https://img.shields.io/badge/Lottie-00DDB3?style=flat-square&logo=lottiefiles&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white)
![Heroicons](https://img.shields.io/badge/Heroicons-8B5CF6?style=flat-square)
![React Icons](https://img.shields.io/badge/React_Icons-E91E63?style=flat-square)

**Backend & Infrastructure**

![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black)
![Cloud Firestore](https://img.shields.io/badge/Cloud_Firestore-FFA000?style=flat-square&logo=firebase&logoColor=white)
![Cloud Functions](https://img.shields.io/badge/Cloud_Functions-4285F4?style=flat-square&logo=googlecloud&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js_20-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Discord Webhooks](https://img.shields.io/badge/Discord_Webhooks-5865F2?style=flat-square&logo=discord&logoColor=white)
![ipinfo.io](https://img.shields.io/badge/ipinfo.io-1E90FF?style=flat-square)

**Tooling**

![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![SWC](https://img.shields.io/badge/SWC-F8C457?style=flat-square&logo=swc&logoColor=black)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white)
![PostCSS](https://img.shields.io/badge/PostCSS-DD3A0A?style=flat-square&logo=postcss&logoColor=white)

This is my personal site - a single scrolling React page that opens on a 100,000-particle WebGL galaxy I wrote the shaders for by hand, then carries you through about / projects / work / contact with motion driving every section. Under the hood it runs its own analytics instead of a third-party tag, the page writes visits and messages straight to Firestore, and Cloud Functions fan them out to me as live Discord notifications. It's deliberately over-built — the point was a portfolio impressive enough to stand next to the projects it links to.

[Live site](https://billmill.dev) · [Architecture](#architecture) · [What I learned](#what-i-learned)

---

<!-- ## Demo

![Galaxy hero demo](./assets/demo.gif)

TODO: replace with a real demo.gif — a 3-5s loop of the galaxy spiral winding/rotating on first load, captured at full width. 1200px wide max; Kap (Mac) / ScreenToGif (Windows) / LICEcap (cross-platform). This is the single best moment to capture and it goes at the very top, so make it the galaxy.

TODO: optional second clip near Features — scroll the full page so sections animate in, then the contact form's invalid-email shake → successful "Message Sent". ./assets/scroll-and-contact.gif -->

## Why this exists

I wanted one site that did double duty: a professional front door for recruiters and a sandbox where I could try things I don't get to try at work — GPU shader programming, a serverless event pipeline, motion design that isn't an afterthought. A static template would have done the "front door" job, but it wouldn't have _shown_ anything. If the portfolio is going to claim I can do graphics and backend plumbing, the portfolio itself should be the proof. This is the v2 React rewrite of an earlier Vue 3 site. Same idea, rebuilt for the Three.js/React-Three-Fiber ecosystem and a cleaner component model.

## Features

- **100,000-particle WebGL galaxy hero** — a single `THREE.Points` spiral rendered through react-three-fiber with hand-written GLSL vertex and fragment shaders, animated entirely on the GPU.
- **First-party analytics with no Google Analytics** — `getAnalytics` is intentionally left off because it gets stripped by mobile content blockers. The page logs to its own Firestore instead so there's no third-party beacon to block.
- **Real-time Discord notifications** — two Firestore `onCreate` Cloud Functions turn every visit and every contact message into a rich Discord embed (IP + geo for visits, email + body for messages) the moment the document is written.
- **Scroll-driven motion throughout** — Framer Motion `useInView` reveals, a custom `ScrambleText` title effect, and Lottie micro-animations on logos and section underlines.
- **Validated contact form** — regex email validation with an invalid-email _shake_ animation, error text that only appears after the first submit attempt, and a one-shot send that writes straight to Firestore.
- **Visit fingerprinting** — each session captures public IP (ipify) and geolocation (ipinfo: city, region, country, coords, ISP, timezone), plus which sections were viewed and which links were clicked, all on one Firestore document.
- **Responsive desktop / mobile split** — dedicated `NavDesktop` and `NavMobile` component trees rather than one set of breakpoints doing double duty.
- **Single-page scroll navigation** — no router, nav and footer links `scrollIntoView` against shared section refs.

## Tech stack

**Frontend (version2.0)**

- **React 18 + TypeScript** — single-page app, strict TS, JSX via SWC.
- **react-three-fiber 8 + three 0.168** — declarative React bindings over Three.js for the galaxy hero.
- **GLSL** — inline vertex/fragment shaders compiled into a `THREE.ShaderMaterial`.
- **Framer Motion 11** — scroll reveals (`useInView`), the contact-form shake, and section transitions.
- **Lottie (lottie-react)** — JSON micro-animations for logos and card underlines.
- **Tailwind CSS 3** (+ `tailwind-merge`, `@tailwindcss/forms`) — styling and a custom `project*` color palette.
- **axios** — IP/geo lookups. **@heroicons/react** + **react-icons** — iconography.

**Backend & infrastructure**

- **Cloud Firestore** — two collections, `siteVisits` and `websiteMessages`.
- **Firebase Cloud Functions** (firebase-functions v1 API, Node 20) — `onCreate` Firestore triggers.
- **discord-webhook-node** — builds and sends the Discord embeds.
- **Firebase Hosting** — serves the built `dist/` as an SPA.
- **External APIs** — [api.ipify.org](https://www.ipify.org/) (public IP), [ipinfo.io](https://ipinfo.io/) (geolocation).

**Tooling**

- **Vite 5** (+ `@vitejs/plugin-react-swc`) — dev server and production build.
- **ESLint 9** (flat config, typescript-eslint, react-hooks/react-refresh plugins).
- **PostCSS + autoprefixer**, **TypeScript 5.5**.

**Legacy (version1.0)** — the original site: **Vue 3** + `@headlessui/vue` + the `motion` library + Firebase 9 + Tailwind. Kept in-repo for history; see [From Vue to React](#from-vue-to-react).

## Architecture

The browser never talks to a server I wrote. It writes a document to Firestore, and the _database write itself_ is the event that triggers a Cloud Function to notify me on Discord. There's no API to stand up, no endpoint to secure, no polling loop — analytics and contact delivery are both just "a document appeared, fan it out." That's also why there's no Google Analytics anywhere. The client writes to its own Firestore through the Firebase SDK, so there's no `google-analytics.com`/`gtag` request for a content blocker to catch.

## The galaxy hero — 100,000 particles of hand-written GLSL

The hero is one `THREE.Points` object with 100,000 vertices arranged into a three-branch spiral (`TwistingNether.tsx`). Position, color, per-particle randomness, and scale are baked into buffer attributes once at build time. The motion you see isn't the CPU moving points around every frame — it's a single uniform, `uTime`, fed into a vertex shader that rotates each particle around the center:

```glsl
float angle = atan(modelPosition.x, modelPosition.z);
float distanceToCenter = length(modelPosition.xz);
float angleOffset = (1.0 / distanceToCenter) * uTime;   // closer = faster
angle += angleOffset;
modelPosition.x = cos(angle) * distanceToCenter;
modelPosition.z = sin(angle) * distanceToCenter;
```

Because the rotation rate is `1.0 / distanceToCenter`, particles near the core spin faster than those at the rim, which is what winds the spiral arms over time and gives it that "galaxy turning" look — all on the GPU, with the CPU only incrementing `uTime` (`clock.elapsedTime * 0.15`) once per frame. The fragment shader fakes a soft glow without any texture by computing each point's distance from its own center and raising it to the 10th power for a tight exponential falloff, then drawing with additive blending and `depthWrite: false` so overlapping particles bloom:

```glsl
float strength = distance(gl_PointCoord, vec2(0.5));
strength = 1.0 - strength;
strength = pow(strength, 10.0);
gl_FragColor = vec4(vColor, strength);   // vColor lerps cyan #32e7e7 → purple #8c32e7
```

## Real-time analytics, without Google Analytics

Instead of a third-party tag, the client is the analytics. On mount, `App.tsx` calls `logSiteVisit()`, which fetches the visitor's IP from ipify, geolocates it via ipinfo, and `addDoc`s a `siteVisits` document — holding the returned doc id in a `useRef` as the session id. As the visitor scrolls, Framer Motion's `useInView` flags each section once and `logSectionView()` does an `arrayUnion` into `sectionsVisited`; link clicks `arrayUnion` into `linksClicked`. The contact form writes a separate `websiteMessages` document. On the backend, two `onCreate` Cloud Functions translate those writes into Discord embeds in real time:

```ts
export const sendDiscordMessageSiteVisits = functions.firestore
  .document("/siteVisits/{id}")
  .onCreate((snap) => {
    const hook = new Webhook(DISCORD_CHANNEL_WEBHOOK_VISITS as string);
    const data = snap.data();
    const embed = new MessageBuilder()
      .setColor(0x00b0f4)
      .setTitle(data.ipAddress)
      .setDescription(
        `City: ${data.location.city}\nState: ${data.location.region}\nCountry: ${data.location.country}`,
      )
      .setTimestamp();
    return hook.send(embed);
  });
```

The result: I get a live ping in Discord with a visitor's location the moment they land, and their message the moment they hit send — with zero analytics requests a blocker can strip.

## Getting started

**Prerequisites**

- **Node.js 20** (the Cloud Functions runtime is pinned to Node 20; the app builds on Node 18+).
- **npm** (ships with Node).
- **Firebase CLI** — only needed if you intend to deploy: `npm i -g firebase-tools`.

**Run the frontend locally**

```bash
cd version2.0
npm install
npm run dev        # Vite dev server at http://localhost:5173
```

**Build and preview the production bundle**

```bash
npm run build      # tsc -b && vite build  →  outputs to dist/
npm run preview    # serve the built dist/ locally
npm run lint       # eslint .
```

**Cloud Functions**

```bash
cd version2.0/functions
npm install
npm run build      # tsc  →  outputs to lib/
npm run serve      # build + run the Firebase emulator (functions only)
```

**Deploy** (manual — there's no CI):

```bash
# from version2.0/
firebase deploy                       # hosting + functions + firestore rules
firebase deploy --only hosting        # site only
```

## What I learned

- **Animate on the GPU, not the CPU.** Moving the rotation into the vertex shader and driving it with one `uTime` uniform means the CPU does almost nothing per frame and the GPU handles all 100k transforms in parallel. The `1.0 / distanceToCenter` rotation rate was the small idea that made the spiral actually look like a galaxy instead of a rigid pinwheel.

- **The best backend is sometimes a database trigger.** I didn't write a notification server. The Firestore write is the event — `onCreate` triggers fan it out to Discord. No endpoint to host, no queue to poll, no auth layer to babysit. The database and the event bus are the same thing. It reframed "I need a backend" into "I need a document to appear".

- **Working around content blockers changed the design, not just a config flag.** Discovering that `getAnalytics` gets silently stripped on iOS and common adblockers meant the whole analytics approach had to move client-side. Write first-party documents through the Firebase SDK so there's no recognizable third-party beacon. The constraint pushed me toward a design that's both more private and more under my control.

- **Refs are a deliberate tool for controlling renders, not just escape hatches.** The contact form keeps email validity, "pressed once," and enabled state in `useRef`s and only forces a re-render when it actually needs the shake to fire or the error text to update — so the invalid-email message appears only after the first submit and then corrects per keystroke. Reaching for `useRef` over `useState` was a conscious choice about exactly when React should re-render, and it's the same reasoning behind reading `useThree((s) => s.gl)` as a selector so the canvas doesn't re-render needlessly.

- **From Vue to React.** The first version of this site (version1.0, still in the repo) was Vue 3 with the `motion` animation library and Firebase 9. I rewrote it in React 18 mainly to get first-class access to react-three-fiber and the Three.js ecosystem for the galaxy hero. Plus I wanted a new component model and TypeScript setup to build the rest of the site on.
