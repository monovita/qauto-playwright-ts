import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import playwright from "eslint-plugin-playwright";

export default defineConfig([
  {
    ignores: [
      'node_modules/**',
      'playwright-report/**',
      'test-results/**',
    ],
  },
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], 
    plugins: { js, playwright }, extends: ["js/recommended"], 
  languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended,
]);
