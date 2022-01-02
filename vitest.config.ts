/// <reference types="vitest" />
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import { join } from 'path';

export default defineConfig({
    plugins: [Vue()],
    resolve: {
        alias: {
            '@': join(__dirname, 'src'),
        },
    },
    test: {
        global: true,
        environment: 'jsdom',
    },
});
