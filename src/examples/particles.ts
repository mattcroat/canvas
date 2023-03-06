resizeCanvas()

const particles: Particle[] = []
let hue = 0

class Particle {
	x = mouseX
	y = mouseY
	// x = Math.random() * canvas.width
	// y = Math.random() * canvas.height
	size = Math.random() * 20 + 1
	speedX = Math.random() * 4 - 1.51
	speedY = Math.random() * 4 - 1.51
	color = `hsl(${hue} 100% 50%)`

	update() {
		this.x += this.speedX
		this.y += this.speedY

		if (this.size > 0.2) {
			this.size -= 0.1
		}
	}

	draw() {
		fill(this.color)
		circle(this.x, this.y, this.size)
	}
}

function showParticles() {
	for (let i = 0; i < particles.length; i++) {
		particles[i].update()
		particles[i].draw()

		// if particles are close to each other draw a line
		for (let j = i; j < particles.length; j++) {
			// pythagora's theorem
			// const dx = particles[i].x - particles[j].x
			// const dy = particles[i].y - particles[j].y
			// const distance = Math.sqrt(dx * dx + dy * dy)
			const distance = Math.hypot(
				particles[i].x - particles[j].x,
				particles[i].y - particles[j].y
			)

			if (distance < 100) {
				const p1 = { x: particles[i].x, y: particles[i].y }
				const p2 = { x: particles[j].x, y: particles[j].y }
				stroke(particles[i].color)
				strokeWidth(particles[i].size / 10)
				line(p1, p2)
			}
		}

		if (particles[i].size <= 2) {
			particles.splice(i, 1)
			i -= 1
		}
	}
}

canvas.addEventListener('click', () => {
	for (let i = 0; i < 100; i++) {
		particles.push(new Particle())
	}
})

canvas.addEventListener('mousemove', () => {
	for (let i = 0; i < 10; i++) {
		particles.push(new Particle())
	}
})

animate(() => {
	// instead of clearing everything fade away slowly
	// c.fillStyle = 'hsl(0 0% 0% / 20%)'
	// c.fillRect(0, 0, canvasWidth, canvasHeight)

	clear()
	showParticles()
	hue += 2
})
