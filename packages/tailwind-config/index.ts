import type { Config } from "tailwindcss";
import { configThemes, themesPlugin } from "tw-themes";

const config = configThemes({
  themes: {
    light: {
      base: "#fff",
      primary: "#000",
    },
    dark: {
      base: "#000",
      primary: "#fff",
    }
  },
  options: {
    prefersDark: "dark", 
    prefersLight: "light",
  }
})

export default {
  content: [`src/**/*.{ts,tsx}`],
  theme: {
    extend: {},
  },
  plugins: [themesPlugin(config)],
} satisfies Config;
