import { Pixel } from "./pixel.ts"

export class Image {
	width: number
	height: number
	data: Uint8Array
	getPixel(x: number, y: number): Pixel {
		let index = x + (y * this.height)
		let rntVal: Pixel = {
			r: this.data[index*4],
			g: this.data[index*4 + 1],
			b: this.data[index*4 + 2],
			a: this.data[index*4 + 3],
		}
		return rntVal;
	}
}
