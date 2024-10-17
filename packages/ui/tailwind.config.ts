import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config/tailwind";

const config: Pick<Config, "content" | "presets"> = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  presets: [sharedConfig],
};

export default config;
