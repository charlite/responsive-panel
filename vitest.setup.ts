/// <reference types="vitest/globals" />
import { vi } from 'vitest';

Object.defineProperty(process, 'env', {
  value: {
    NODE_ENV: 'development',
    ...process.env,
  },
  writable: true,
});

Object.defineProperty(globalThis, 'ResizeObserver', {
  value: class ResizeObserver {
    observe(): void {}
    unobserve(): void {}
    disconnect(): void {}
  },
  writable: true,
});

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

Object.defineProperty(window, 'scrollTo', {
  value: vi.fn(),
  writable: true,
});

globalThis.console = {
  ...console,
  warn: vi.fn(),
  error: vi.fn(),
};
