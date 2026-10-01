import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/photos/**/*.{jpg,jpeg,png,webp,avif}',
  { eager: true },
);

/** Resolve uma foto real por caminho relativo a src/assets/photos. */
export function getPhoto(path?: string | null): ImageMetadata | undefined {
  if (!path) return undefined;
  return files[`/src/assets/photos/${path}`]?.default;
}
