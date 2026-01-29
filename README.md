# nicoandrade.com

Hi there, I’m [Nico Andrade](https://nicoandrade.com).  
This repository contains the source code for my personal website.

It’s a space where I design and build things for the internet—focused on modern web technologies, thoughtful design, and clean user experiences.

Feel free to fork this repo and use it as you like.

Live demo: [nicoandrade.com](https://nicoandrade.com)

## Tech Stack

- **Next.js 16**
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **shadcn/ui**
- **Bun**: Package Manager
- **Biome**: Format & Linter
- **Ultracite**: Preset for Biome
- **Vercel**: Hosting

### 🛠 Development

Install all dependencies with this command

```bash
bun install
```

After all dependencies are installed, you are ready to go, run this to start the site:

```bash
bun run dev
```

You will see the site running on [http://localhost:3000](http://localhost:3000)

### 🎨 Customization

Edit the content directly in the [config/site.ts](src/config/site.ts) file:

```typescript
export const siteConfig = {
    name: "Nico Andrade",
    shortDescription: "Design + Code",
    description:
        "Driven by curiosity, I work across design and development to create modern, thoughtful interactive experiences.",
    url: "https://nicoandrade.com",
    links: {
        x: "https://x.com/nicoandrade",
        github: "https://github.com/nicoandrade",
        dribbble: "https://dribbble.com/NicoAndrade",
        instagram: "https://instagram.com/nicoandrade",
        spotify: "https://open.spotify.com/user/elquemero",
        email: "mailto:hi@nicoandrade.com",
    },
    repository: "https://github.com/nicoandrade/nico-andrade",
};
```