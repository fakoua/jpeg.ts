import { encode, decode } from "./mod.ts"
import { join } from 'https://deno.land/std/path/mod.ts'

async function getRawImage(imageName: string): Promise<Uint8Array> {
    let image = `tests/res/${imageName}`
    let fullPath = join(Deno.cwd(), image);
    let raw = await Deno.readFile(fullPath)
    return raw;
}

let data = await getRawImage("RGBA.jpg");
let res = decode(data)

console.log(res.getPixel(2, 2))
  