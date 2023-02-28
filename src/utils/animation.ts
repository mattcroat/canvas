export type EasingFunction = (progress: number) => number
export type AnimationValues = {
	[key: string]: number
}
export type Draw = (values: AnimationValues) => void
export type Completed = () => void

export function animate(
	start: AnimationValues,
	end: AnimationValues,
	duration: number,
	easing: EasingFunction,
	draw: Draw,
	completed: Completed
) {
	const startValues = Object.values(start)
	const endValues = Object.values(end)

	let currentTime = 0

	function animateStep() {
		// calculate the new values of the object using the easing function
		const progress = Math.min(currentTime / duration, 1) // progress as a value between 0 and 1
		const ease = easing(progress) // eased value between 0 and 1
		const currentValues = startValues.map((value, i) => {
			return value + (endValues[i] - value) * ease
		})

		draw(
			Object.fromEntries(
				Object.entries(start).map((entry, i) => {
					return [entry[0], currentValues[i]]
				})
			)
		)

		if (currentTime >= duration) {
			if (completed) {
				completed()
			}

			return
		}

		currentTime += 16 // increment time by 16 milliseconds (approximately 60 frames per second)

		requestAnimationFrame(animateStep)
	}

	requestAnimationFrame(animateStep)
}
