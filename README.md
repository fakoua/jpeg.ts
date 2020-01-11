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
//...

// result.data is an array of RGB colors
```

## encoder

```ts
import { decode } from "https://raw.githubusercontent.com/fakoua/jpeg.ts/master/mod.ts"


```
