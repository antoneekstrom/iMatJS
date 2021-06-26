import { readFile, readdir, writeFile } from 'fs/promises';
import { resolve, join } from 'path';
import fetch from 'node-fetch';
import { existsSync, mkdirSync } from 'fs';

type ProductsData = {
   gtin: string;
   name: string;
   sku: string;
}[];

const dir = resolve(__dirname, '../butikens-egna-varor-id_2347');

getImages(dir);

async function getImages(dir: string) {
   if (!existsSync(dir)) {
      mkdirSync(dir, { recursive: true });
   }

   (await readdir(dir)).forEach(async (file: string) => {
      const fullPath = resolve(dir, file);
      const json: ProductsData = JSON.parse(
         (await readFile(fullPath)).toString()
      );

      const imgDir = join(dir, '/images', file.split('.')[0]);
      console.log({ fullPath, imgDir });

      if (!existsSync(imgDir)) {
         mkdirSync(imgDir, { recursive: true });
      }

      json.forEach(async ({ name, sku }) => {
         const buffer = await (await fetch(getImageUrl(sku))).buffer();
         const imgPath = join(imgDir, `${name}.jpg`);
         console.log(`saving image ${imgPath}`);
         await writeFile(imgPath, buffer, { flag: 'w' });
      });
   });
}

function getImageUrl(id: string) {
   return `https://assets.icanet.se/t_product_medium_v1,f_auto/${id}.jpg`;
}
