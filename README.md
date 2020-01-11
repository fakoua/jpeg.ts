# jpeg.ts

A pure TypeScript JPEG encoder and decoder for deno

## decoder

```ts
import { decode } from "https://raw.githubusercontent.com/fakoua/jpeg.ts/master/mod.ts"

//read image data:
let raw = await Deno.readFile(fullPath)
//decode"
let result = decode(raw);

//result.width: Image width
//result.height: Image height

//result.data[0] -> Red
//result.data[1] -> Green
//result.data[2] -> Blue
//result.data[3] -> Alpha
//...

// result.data is an array of RGBa colors
```

## encoder

```ts
import { encode, Image } from "https://raw.githubusercontent.com/fakoua/jpeg.ts/master/mod.ts"

// make image with red gree blue and alpha colors

let image: Image = {
    width: 2,
    height: 2,
    data: new Uint8Array( [
        255,0,0,1,
        0,255,0,1,
        0,0,255,1,
        255,255,0,1,
    ])
}

let raw = encode(image, 100); //Quality 100 (default is 50)
//save the image
await Deno.writeFile('rgb.jpg', raw.data);
```
