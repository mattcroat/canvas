canvasSize(500, 500)
background('#111')
grid(50)

const offset = {
	x: canvas.width / 2,
	y: canvas.height / 2,
}

translate(offset)
coordinateSystem('#444', offset)

const p1 = { x: 0, y: 0 }
const p2 = { x: 100, y: 100 }
const p3 = { x: p2.x, y: 0 }

stroke('white')
line(p1, p3)
line(p3, p2)
line(p2, p1)

fill('white')
point(p1)
point(p2)
point(p3)

fill('black')
text('A', p1)
text('B', p2)
text('C', p3)
