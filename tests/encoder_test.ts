import { assertEquals } from "./test_deps.ts";
import { encode, Image } from "../mod.ts"

Deno.test("test_encoder", function () {
    const image = new Image()  

        image.width = 2
        image.height = 2
        image.data = new Uint8Array( [
            255, 0, 0, 1,
            0, 255, 0, 1,
            0, 0, 255, 1,
            255, 255, 0, 1,
        ])
   
    const raw = encode(image, 100); // Quality 100 (default is 50)
    assertEquals(1, 1) // able to encode
})
