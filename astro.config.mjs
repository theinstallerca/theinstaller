import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://theinstaller.ca',
  trailingSlash: 'never',
  build: { format: 'file' },
});
