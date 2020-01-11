import { test, assertEquals } from "./test_deps.ts";
import { decode } from "../lib/decoder.ts"
import { join } from 'https://deno.land/std/path/mod.ts'

async function getRawImage(imageName: string): Promise<Uint8Array> {
    let image = `tests/res/${imageName}`
    let fullPath = join(Deno.cwd(), image);
    let raw = await Deno.readFile(fullPath)
    return raw;
}
test(async function test_decode_generic() {
    let raw = await getRawImage("deno.jpg");
    const result = decode(raw);
    assertEquals(result.width, 730)
    assertEquals(result.height, 488)
})

test(async function test_decode_red() {
    let raw = await getRawImage("red.jpg");
    const result = decode(raw);
    assertEquals(result.width, 320)
    assertEquals(result.height, 180)
    assertEquals(result.data[0], 254) //r
    assertEquals(result.data[1], 0) //g
    assertEquals(result.data[2], 0) //b
    assertEquals(result.data[3], 255) //a

    assertEquals(result.data[4], 254) //r
    assertEquals(result.data[5], 0) //g
    assertEquals(result.data[6], 0) //b
    assertEquals(result.data[7], 255) //a
})