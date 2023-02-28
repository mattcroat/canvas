import { canvas, canvasSize, context as c } from './canvas'

canvasSize({ width: 512, height: 512 })

c.beginPath()

// The Vertical line to create quadrants
c.moveTo(canvas.width / 2, 0)
c.lineTo(canvas.width / 2, canvas.height)

// The Horizontal Line to create quadrants
c.moveTo(0, canvas.height / 2)
c.lineTo(canvas.width, canvas.height / 2)

// The circle contained in my canvas
c.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2, 0, Math.PI * 2)

c.strokeStyle = 'gray'
c.stroke() // Make line visible, otherwise for shapes use stroke

//Degrees to radians
function toRadians(degrees: number) {
	return (degrees * Math.PI) / 180
}

//Angle in degrees
let angle = toRadians(45)
//Changes the color to red
c.strokeStyle = 'aqua'
//Starts a new line
c.beginPath()
c.moveTo(canvas.width / 2, canvas.height / 2) //Center point
c.lineTo(
	canvas.width / 2 + (Math.cos(angle) * canvas.height) / 2,
	canvas.height / 2 - (Math.sin(angle) * canvas.height) / 2
)
c.stroke()
