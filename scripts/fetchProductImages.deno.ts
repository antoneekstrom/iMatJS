import { ensureDir, ensureFile } from 'https://deno.land/std@0.97.0/fs/mod.ts';
import { resolve, join } from 'https://deno.land/std@0.97.0/path/mod.ts';
const { readDir, readTextFile, writeFile } = Deno;

type ProductsData = {
   gtin: string;
   name: string;
   sku: string;
   slug: string;
}[];

start();

async function start() {
   const [dir, out] = Deno.args;
   console.log('args', { dir, out });
   await getImages(dir, out);
}

async function getImages(dir: string, out = '/images') {
   await ensureDir(dir);

   for await (const { name: file, isFile } of readDir(dir)) {
      if (!isFile) {
         continue;
      }

      const fullPath = resolve(dir, file);
      const imgDir = join(dir, out);
      await ensureDir(imgDir);

      console.log({ fullPath, imgDir });

      const json: ProductsData = JSON.parse(await readTextFile(fullPath));

      json.forEach(async ({ slug, sku }) => {
         const buffer = new Uint8Array(
            await (await fetch(getImageUrl(sku))).arrayBuffer()
         );
         const imgPath = join(imgDir, `${slug}.jpg`);

         console.log(`saving image ${imgPath}`);

         await ensureFile(imgPath);
         await writeFile(imgPath, buffer);
      });
   }
}

function getImageUrl(id: string) {
   return `https://assets.icanet.se/t_product_medium_v1,f_auto/${id}.jpg`;
}
