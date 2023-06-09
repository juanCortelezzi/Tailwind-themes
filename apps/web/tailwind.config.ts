import type { Config } from "tailwindcss";

import sharedConfig from "@twemes/tailwind-config";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  presets: [sharedConfig],
} satisfies Config;
