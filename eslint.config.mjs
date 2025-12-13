import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig(
    {
        // Global ignore: applies to all other configs in this list
        ignores: ["dist/"],
    },
    eslint.configs.recommended,
    tseslint.configs.recommended,
);