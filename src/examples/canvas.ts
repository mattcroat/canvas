// moved to setup.ts to use globals instead

export const canvas = document.querySelector<HTMLCanvasElement>('canvas')!
export const context = canvas.getContext('2d')!

canvas.width = window.innerWidth
canvas.height = window.innerHeight

type CanvasSize = {
	width: number
	height: number
}

export function canvasSize({ width, height }: CanvasSize) {
	canvas.width = width
	canvas.height = height
}

window.canvas = canvas
window.c = context
window.canvasSize = canvasSize
