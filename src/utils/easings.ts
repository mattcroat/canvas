export function easeInOutQuad(progress: number) {
	if (progress < 0.5) {
		return 2 * progress * progress
	} else {
		return 1 - 2 * (1 - progress) * (1 - progress)
	}
}
