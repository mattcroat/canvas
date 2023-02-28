import { context as c } from './canvas'

const amount = 20
const distance = 40
const radius = 20
const height = 40

let max_width = amount * (radius * 2 + distance)

let elements = new Array(amount).fill(0).map((_, i) => ({
	angle: ((Math.PI * 2) / amount) * i,
	x: (radius * 2 + distance) * i,
	color: `hsl(th, 75%, 55%)`,
}))

function draw() {
	// canvas bg
	c.fillStyle = '#222'
	c.fillRect(0, 0, window.innerWidth, window.innerHeight)

	// loop over each element
	elements.forEach((el) => {
		// increase speed
		el.angle += (Math.PI / 180) * 4

		// draw circles
		c.beginPath()
		c.arc(
			el.x + window.innerWidth / 2 - max_width / 2,
			Math.sin(el.angle) * height + window.innerHeight / 2,
			radius,
			0,
			Math.PI * 2
		)
		c.closePath()

		// add color based on angle
		c.fillStyle = el.color.replace('th', el.angle * 20)
		c.fill()
	})

	requestAnimationFrame(draw)
}

draw()
