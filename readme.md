## Setting Up the Project

### Steps:
1. **Initialize the project with Vite using Bun:**
   ```bash
   bun create vite
   npm create vite
   ```

2. **Install dependencies:**
   ```bash
   bun install
   npm i
   ```

---

## Creating Components

- Use the `rfce` snippet to quickly generate a **React Functional Component**.

---

## Setting Up Tailwind CSS

1. **Install Tailwind CSS and related dependencies:**
   ```bash
   bun install -D tailwindcss postcss autoprefixer
   npm install -D tailwindcss postcss autoprefixer
   
   ```

2. **Initialize Tailwind CSS configuration:**
   ```bash
   npm tailwindcss init -p
   ```

---

## Configuration for Tailwind CSS

### Tailwind Config File
In the `tailwind.config.js` file, set the `content` property to ensure Tailwind processes the necessary files:
```javascript
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
]
```

### Include Tailwind Directives in `index.css`
Add the following to `index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
## Installing React Router

```
bun add react-router-dom
```

---

## Shortcuts Learned

- **CTRL + Space:** Expands available snippets for quicker development.

---

This README provides the steps for setting up React with Vite, configuring Tailwind CSS, and using useful development shortcuts.

