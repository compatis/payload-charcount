import path from 'path'
import { loadEnv } from 'payload/node'
import { fileURLToPath } from 'url'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default defineConfig(() => {
  loadEnv(path.resolve(dirname, './dev'))

  return {
    plugins: [
      tsconfigPaths({
        ignoreConfigErrors: true,
      }),
    ],
    test: {
      hookTimeout: 30_000,
      testTimeout: 30_000,
      exclude: ['**/e2e.spec.ts', '**/node_modules/**', 'dev/**'],
      projects: [
        {
          name: 'node',
          environment: 'node',
        },
        {
          name: 'jsdom',
          environment: 'jsdom',
          include: ['**/components/**/*.test.{ts,tsx}', '**/components/**/*.spec.{ts,tsx}'],
        },
      ],
    },
  }
})
