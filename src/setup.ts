/**
 * The methods are global for convenience and can be
 * used everywhere with types thanks to `global.d.ts`
 */

type Coordinates = { x: number; y: number }
type Style = 'fill' | 'stroke' | 'fillAndStroke'

export const canvasEl = document.querySelector<HTMLCanvasElement>('canvas')!
export const context = canvasEl.getContext('2d')!

canvasEl.width = window.innerWidth
canvasEl.height = window.innerHeight

export let centerX = canvasEl.width / 2
export let centerY = canvasEl.height / 2
export let canvasWidth = canvasEl.width
export let canvasHeight = canvasEl.height
export let windowWidth = window.innerWidth
export let windowHeight = window.innerHeight

export let mouseX = 0
export let mouseY = 0

export function canvasSize(width: number, height: number) {
	canvasEl.width = width
	canvasEl.height = height
}

export function resizeCanvas(resizeAction?: () => void) {
	window.addEventListener('resize', () => {
		canvasEl.width = window.innerWidth
		canvasEl.height = window.innerHeight
		window.centerX = canvasEl.width / 2
		window.centerY = canvasEl.height / 2
		window.canvasWidth = canvasEl.width
		window.canvasHeight = canvasEl.height
		window.windowWidth = window.innerWidth
		window.windowHeight = window.innerHeight

		if (resizeAction) {
			resizeAction()
		}
	})
}

export function background(color: string) {
	canvasEl.style.backgroundColor = color
}

export function grid(size: number, color = '#222') {
	const horizontalLines = canvasEl.height / size
	const verticalLines = canvasEl.width / size

	c.beginPath()

	for (let i = 0; i < horizontalLines; i++) {
		c.moveTo(0, size * i)
		c.lineTo(canvasEl.width, size * i)
	}

	for (let i = 0; i < verticalLines; i++) {
		c.moveTo(size * i, 0)
		c.lineTo(size * i, canvasEl.height)
	}

	c.strokeStyle = color
	c.stroke()
}

export function translate(offset: Coordinates) {
	c.translate(offset.x, offset.y)
}

export function coordinateSystem(color: string, offset: any) {
	c.beginPath()
	c.moveTo(-offset.x, 0)
	c.lineTo(canvasEl.width - offset.x, 0)
	c.moveTo(0, -offset.y)
	c.lineTo(0, canvasEl.height - offset.y)
	c.setLineDash([4, 2])
	c.lineWidth = 1
	c.strokeStyle = color
	c.stroke()
	c.setLineDash([])
}

export function circle(
	x: number,
	y: number,
	radius: number,
	style: Style = 'fill'
) {
	c.beginPath()
	c.arc(x, y, radius, 0, Math.PI * 2)

	if (style === 'fillAndStroke') {
		c.fill()
		c.stroke()
	}

	if (style === 'fill') {
		c.fill()
	}

	if (style === 'stroke') {
		c.stroke()
	}
}

export function line(pointA: Coordinates, pointB: Coordinates) {
	c.beginPath()
	c.moveTo(pointA.x, pointA.y)
	c.lineTo(pointB.x, pointB.y)
	c.stroke()
}

export function point(coordinates: Coordinates) {
	c.beginPath()
	c.arc(coordinates.x, coordinates.y, 10, 0, Math.PI * 2)
	c.fill()
}

export function fill(color: string) {
	c.fillStyle = color
}

export function stroke(color: string) {
	c.strokeStyle = color
}

export function strokeWidth(strokeWidth: number) {
	c.lineWidth = strokeWidth
}

export function text(text: string, coordinates: Coordinates) {
	c.beginPath()
	c.font = 'bold 18px monospace'
	c.textAlign = 'center'
	c.textBaseline = 'middle'
	c.fillText(text, coordinates.x, coordinates.y)
}

export function clear() {
	c.clearRect(0, 0, canvasEl.width, canvasEl.height)
}

export function animate(animationFunction: () => void) {
	function draw() {
		animationFunction()
		requestAnimationFrame(draw)
	}

	requestAnimationFrame(draw)
}

window.addEventListener('mousemove', (event) => {
	window.mouseX = event.x
	window.mouseY = event.y
})

const canvas = {
	canvas: canvasEl,
	c: context,
	centerX,
	centerY,
	canvasWidth,
	canvasHeight,
	windowWidth,
	windowHeight,
	canvasSize,
	resizeCanvas,
	background,
	grid,
	translate,
	coordinateSystem,
	circle,
	line,
	strokeWidth,
	point,
	text,
	fill,
	stroke,
	clear,
	mouseX,
	mouseY,
	animate,
}

Object.assign(window, canvas)
