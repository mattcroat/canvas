resizeCanvas()

let pointer: 'up' | 'down' = 'up'

function drawCircle() {
	fill('white')
	stroke('black')
	strokeWidth(2)
	circle(mouseX, mouseY, 40, 'fillAndStroke')
}

canvas.addEventListener('mousedown', () => {
	pointer = 'down'
})

canvas.addEventListener('mouseup', () => {
	pointer = 'up'
})

canvas.addEventListener('mousemove', () => {
	if (pointer === 'down') {
		drawCircle()
	}
})
