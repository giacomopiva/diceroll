import { defineConfig } from 'vitest/config';

// Test dei moduli dei dadi in Node (niente DOM, niente plugin Laravel).
export default defineConfig({
    test: {
        environment: 'node',
        include: ['tests/js/**/*.test.js'],
    },
});
