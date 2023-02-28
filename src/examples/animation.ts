import { animate, AnimationValues } from '../utils/animation'
import { easeInOutQuad } from '../utils/easings'

canvasSize(400, 400)

const startPosition = { x: 40, y: 360 }
const endPosition = { x: 360, y: 40 }

function animation(position: AnimationValues) {
	clear()
	background('#111')
	grid(40)
	fill('aqua')
	circle(position.x, position.y, 20)
}

function completed() {
	console.log('Animation complete! 🎉')
}

animate(startPosition, endPosition, 2000, easeInOutQuad, animation, completed)
