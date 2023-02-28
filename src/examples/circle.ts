canvasSize(400, 400)
background('white')

let angle = 0
let animate = true

function circle() {
	c.clearRect(0, 0, canvas.width, canvas.height)
	c.beginPath()
	c.strokeStyle = 'tomato'
	c.lineWidth = 4
	c.arc(canvas.width / 2, canvas.height / 2, 100, 0, Math.PI * angle)
	c.stroke()

	if (animate) {
		requestAnimationFrame(circle)
	}

	if (angle > 2) {
		animate = false
	}

	angle += 0.04
}

circle()

// todo: figure out easings
