// Copia los builds de navegador de node_modules a vendor/.
// Ejecutar tras actualizar dependencias: npm run vendor
import { copyFileSync, mkdirSync } from 'node:fs';

const files = [
  'node_modules/gsap/dist/gsap.min.js',
  'node_modules/gsap/dist/ScrollTrigger.min.js',
  'node_modules/gsap/dist/SplitText.min.js',
  'node_modules/lenis/dist/lenis.min.js',
  'node_modules/lenis/dist/lenis.css',
  'node_modules/canvas-confetti/dist/confetti.browser.js',
];

mkdirSync('vendor', { recursive: true });
for (const f of files) {
  const dest = 'vendor/' + f.split('/').pop();
  copyFileSync(f, dest);
  console.log(f, '->', dest);
}
