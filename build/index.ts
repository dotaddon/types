import fs from 'fs-extra';
import path from 'path';
import { generatedLua, generatedLuaEnumMappings } from './lua';
import { generatedPanorama, generatedPanoramaEnumMappings } from './panorama';

/** 写入文件
 * @param packageName 拓展名
 * @param generated 文件内容
 * @returns 
 */
const writeFile = (packageName: string, generated: Record<string,string>) => Object.entries(generated).map(([_type, content]) => 
  fs.outputFile(
    path.resolve(__dirname, `../packages/${packageName}/types/${_type}.generated.d.ts`),
    content,
  ));
/** 写入数据
 * @param packageName 拓展名
 * @param generated 文件内容
 * @returns 
 */
const writeJson = (packageName: string, generated: Record<string,Record<string,string>>) =>
  fs.outputJson(
    path.resolve(__dirname, `../packages/dota-types/transformer/${packageName}-mappings.json`),
    generated,
    { spaces: 4 },
  );

Promise.all([
  ...writeFile('dota-lua-types',generatedLua),
  ...writeFile('panorama-types',generatedPanorama),
  writeJson('vscripts',generatedLuaEnumMappings),
  writeJson('panorama',generatedPanoramaEnumMappings),
]).catch((error) => {
  console.error(error);
  process.exit(1);
});
