# Tailwind themes

Dark mode in Tailwind is a little bit weird. You can only have 2 themes, light a
nd dark, and you have to use the `dark:` directive for every element that you
want to behave in dark mode.

Can't we do better? Well, yes, even the Tailwind labs released a
[video](https://www.youtube.com/watch?v=MAtaT8BZEAo&pp=ygUPdGFpbHdpbmQgdGhlbWVz)
explaining how to have custom themes. But if you are like me and do not want to
touch CSS even with a stick, or you want propper lsp support for your custom
colors, you are out of luck.

This plugin aims to solve this issues, it allows you to define your themes in
the `tailwind.config.{ts/js}` file and the propper css and autocompletions will
be generated.

```ts
// tailwind.config.ts
//
// Keep in mind that if you are using ts, you should include this file in your
// `tsconfig.json`.

import type { Config } from "tailwindcss";
import { configThemes, themesPlugin } from "tw-themes";

// Define your themes
const config = configThemes({
  themes: {
    light: {
      base: "#fff",
      primary: "#000",
    },
    dark: {
      base: "#000",
      primary: "#fff",
    },
    yellow: {
      base: "#333",
      primary: "#fbbf24",
      // Every theme should have the same color names, if you were to delete
      // any color in this configuration, typescript would shout at you.
    },
  },
  options: {
    // Notice how the LSP helps you autocomplete the themes.

    // asRoot: "yellow", // :root { /* yellow theme variables */ }
    prefersDark: "dark", // @media prefers-color-scheme dark { /* dark theme variables */ }
    prefersLight: "light", // @media prefers-color-scheme light { /* light theme variables */ }

    // attribute: "data-theme", // will output a class called `[data-theme="YOUR_THEME_NAME"]` for each of your themes (DEFAULT).
    // attribute: "class", // will output a class called `.YOUR_THEME_NAME` for each of your themes.
    // attribute: "data-colorscheme", // will output a class called `[data-colorscheme="YOUR_THEME_NAME"]` for each of your themes.
    // attribute: "myrandomattribute", // will output a class called `[myrandomattribute="YOUR_THEME_NAME"]` for each of your themes, IDK why you would do this, but you can.

    // the themes that are not mentioned in the options will create a class
    // called `[data-theme="<ThemeName>"]` by default, or it will use the
    // attribute variable to set the class name.
  },
});

export default {
  content: [`src/**/*.{ts,tsx}`],
  theme: {
    extend: {},
  },
  // Use the plugin passing the config.
  plugins: [themesPlugin(config)],
} satisfies Config;
```
