import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default function downloadCovers() {
  return {
    name: 'download-covers',
    hooks: {
      'astro:config:setup': async ({ command, logger }) => {
        if (command !== 'build') return;
        
        logger.info('Checking for remote cover images to download...');
        const blogDir = path.resolve('src/content/blog');
        const imagesDir = path.resolve('src/assets/blogimages');
        
        if (!fs.existsSync(blogDir)) return;
        
        const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md') || f.endsWith('.mdx'));
        const downloadPromises = [];
        
        for (const file of files) {
          const content = fs.readFileSync(path.join(blogDir, file), 'utf-8');
          const slug = file.replace(/\.(md|mdx)$/, '');
          
          // Match cover: 'https://...' or cover: https://...
          const coverMatch = content.match(/^cover:\s*['"]?(https?:\/\/[^'"\s]+)['"]?/m);
          
          if (coverMatch) {
            const url = coverMatch[1];
            const coverDir = path.join(imagesDir, slug);
            const coverPath = path.join(coverDir, 'cover.jpg');
            
            if (!fs.existsSync(coverPath)) {
              if (!fs.existsSync(coverDir)) {
                fs.mkdirSync(coverDir, { recursive: true });
              }
              
              logger.info(`Downloading cover for ${slug}...`);
              
              const promise = fetch(url).then(async (res) => {
                if (!res.ok) {
                  logger.warn(`Failed to download ${url}: HTTP ${res.status} ${res.statusText}`);
                  // Cleanup the directory if it's empty to avoid issues
                  return;
                }
                const arrayBuffer = await res.arrayBuffer();
                const buffer = Buffer.from(arrayBuffer);
                fs.writeFileSync(coverPath, buffer);
                logger.info(`Downloaded cover to ${coverPath}`);
              }).catch(err => {
                logger.error(`Network error downloading ${url}: ${err.message}`);
              });
              
              downloadPromises.push(promise);
            }
          }
        }
        
        if (downloadPromises.length > 0) {
          await Promise.all(downloadPromises);
          logger.info('Finished downloading cover images.');
        }
      }
    }
  };
}
