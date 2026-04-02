import { copyFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const dist = join(root, 'dist');
const nested = join(dist, 'src', 'tokens');

const files = ['theme.css', 'theme-fonts.css', 'utilities.css', 'nfse-tailwind.css'];

for (const file of files) {
  const from = join(nested, file);
  const to = join(dist, file);
  if (existsSync(from)) {
    copyFileSync(from, to);
  }
}
