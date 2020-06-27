import { encode, decode } from "./mod.ts"
import { join } from "https://deno.land/std/path/mod.ts"

async function getRawImage(imageName: string): Promise<Uint8Array> {
    const image = `tests/res/${imageName}`
    const fullPath = join(Deno.cwd(), image);
    const raw = await Deno.readFile(fullPath)
    return raw;
}

const data = await getRawImage("RGBA.jpg");
const res = decode(data)

console.log(res.getPixel(2, 2))
  
