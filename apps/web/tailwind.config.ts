import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config/tailwind";

const config: Pick<Config, "content" | "presets"> = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx}"],
  presets: [sharedConfig],
};

export default config;
