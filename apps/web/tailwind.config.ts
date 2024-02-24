import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Pick<Config, "presets" | "content"> = {
  content: ["./app/**/*.tsx"],
  presets: [sharedConfig],
};

export default config;
