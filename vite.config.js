/// <reference types="vitest" />
import { sveltekit } from "@sveltejs/kit/vite";

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit({ hot: !process.env.VITEST })],
  test: {
    globals: true,
    environment: "jsdom",
    include: ["src/tests/**/*.test.{ts,tsx}"],
  },
};

export default config;
