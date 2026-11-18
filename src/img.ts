import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

// Adds a content hash to a public/ file URL (`/images/x.jpg?v=1a2b3c4d`), so a photo
// replaced under the same name gets a new address and browsers do not show a cached copy.
const cache = new Map<string, string>();
export function v(url: string): string {
  let out = cache.get(url);
  if (!out) {
    const hash = createHash('md5').update(readFileSync(join(process.cwd(), 'public', url))).digest('hex').slice(0, 8);
    out = `${url}?v=${hash}`;
    cache.set(url, out);
  }
  return out;
}
