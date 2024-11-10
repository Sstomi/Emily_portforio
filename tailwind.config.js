/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./mdx-components.js", // ← これを追加！
    "./content/**/*.{md,mdx}", // ← これも追加！
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // ここにカスタムカラーを追加
        primary: "#FF6B6B", // サンセットピンク
        secondary: "#4ECDC4", // ミントグリーン
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"), // ← これを追加！
    require('@tailwindcss/forms'),
   
  ],
};
