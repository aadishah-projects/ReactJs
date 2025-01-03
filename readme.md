# Learning ReactJs


bun create vite

bun install

CTRL + Space --> to extend the snippets

rfce :: react functional components

### Setting up tailwind css

bun install -D tailwindcss postcss autoprefixer
bun tailwindcss init -p

inside of tailwindconfig:

content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ]

inside of index.css ::
@tailwind base;
@tailwind components;
@tailwind utilities;