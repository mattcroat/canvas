const offset = {
	x: canvas.width / 2,
	y: canvas.height / 2,
}

const p1 = { x: 0, y: 0 }
const p2 = { x: 100, y: 100 }
const p3 = { x: p2.x, y: 0 }

background('#666')
translate(offset)
update()

function update() {
	c.clearRect(-offset.x, -offset.y, canvas.width, canvas.height)
	coordinateSystem('#444', offset)

	const p1d = distance(p2, p3)
	const p2d = distance(p1, p3)
	const p3d = distance(p1, p2)

	// sin is the ratio of a and c
	const sin = p1d / p3d
	// turns a ratio to an angle
	const theta = Math.asin(sin)

	// cos is the ratio of b and c
	const cos = p2d / p3d
	// tan is the ratio of sin and cos or a and b
	const tan = sin / cos // p1 / p2

	fill('red')
	text(`sin: ${sin.toFixed(2)}`, { x: -offset.x + 80, y: offset.y - 40 })
	fill('blue')
	text(`cos: ${cos.toFixed(2)}`, { x: -offset.x + 80, y: offset.y - 80 })
	fill('magenta')
	text(`tan: ${tan.toFixed(2)}`, { x: -offset.x + 80, y: offset.y - 120 })
	fill('white')
	text(`θ: ${theta.toFixed(2)} (${Math.round(radiansToDegrees(theta))}°)`, {
		x: -offset.x + 240,
		y: offset.y - 40,
	})

	fill('red')
	stroke('red')
	line(p2, p3)
	text(`a: ${Math.round(p1d)}`, average(p2, p3))

	fill('blue')
	stroke('blue')
	line(p1, p3)
	text(`b: ${Math.round(p2d)}`, average(p1, p3))

	fill('white')
	stroke('white')
	line(p1, p2)
	text(`c: ${Math.round(p3d)}`, average(p1, p2))

	// fill('white')
	// point(p1)
	// point(p2)
	// point(p3)

	// fill('black')
	// text('a', p1)
	// text('b', p2)
	// text('c', p3)

	text('θ', p1)

	// draw theta
	c.beginPath()
	stroke('white')
	c.lineWidth = 2
	// black magic for drawing theta properly
	const start = p2.x > p1.x ? 0 : Math.PI
	let end = p2.y < p3.y ? -theta : theta
	const clockwise = p2.y < p3.y !== p2.x > p1.x
	if (p2.x < p1.x) end = Math.PI - end
	c.arc(0, 0, 20, start, end, !clockwise)
	c.stroke()
}

function radiansToDegrees(radians: number) {
	return (radians * 180) / Math.PI
}

function average(p1: any, p2: any) {
	return {
		x: (p1.x + p2.x) / 2,
		y: (p1.y + p2.y) / 2,
	}
}

function distance(p1: any, p2: any) {
	// return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2)
	return Math.hypot(p1.x - p2.x, p1.y - p2.y)
}

document.addEventListener('mousemove', (e) => {
	p2.x = e.x - offset.x
	p2.y = e.y - offset.y
	p3.x = p2.x

	update()
})
