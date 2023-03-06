type CanvasSize = { width: number; height: number }
type Coordinates = { x: number; y: number }
type Style = 'fill' | 'stroke' | 'fillAndStroke'

/**
 * Reference to the `<canvas />` element.
 */
declare const canvas: HTMLCanvasElement
/**
 * Reference to the canvas context.
 */
declare const c: CanvasRenderingContext2D
/**
 * Canvas width.
 */
declare const canvasWidth: number
/**
 * Canvas height.
 */
declare const canvasHeight: number
/**
 * Window width.
 */
declare const windowWidth: number
/**
 * Window height..
 */
declare const windowHeight: number
/**
 * Used to set the canvas size.
 */
declare const canvasSize: (width: number, height: number) => void
/**
 * Update canvas size if you resize window.
 */
declare const resizeCanvas: (resizeAction?: () => void) => void
/**
 * Used to set the canvas background color.
 */
declare const background: (color: string) => void

/**
 * Grid size in pixels.
 */
declare const grid: (size: number) => void
/**
 * Use translate to change the default grid coordinates.
 */
declare const translate: (offset: Coordinates) => void
/**
 * Draws a coordinate system.
 */
declare const coordinateSystem: (color: string, offset: Coordinates) => void

/**
 * Draws a circle.
 */
declare const circle: (
	x: number,
	y: number,
	radius: number,
	style?: Style
) => void
/**
 * Draws a line.
 */
declare const line: (pointA: Coordinates, pointB: Coordinates) => void
/**
 * Stroke width.
 */
declare const strokeWidth: (strokeWidth: number) => void
/**
 * Draws a point.
 */
declare const point: (coordinates: Coordinates) => void
/**
 * Draws text.
 */
declare const text: (text: string, coordinates: Coordinates) => void
/**
 * Sets fill color.
 */
declare const fill: (color?: string) => void
/**
 * Sets stroke color.
 */
declare const stroke: (color?: string) => void
/**
 * Clears the canvas.
 */
declare const clear: () => void
/**
 * Canvas center X
 */
declare const centerX: number
/**
 * Canvas center Y
 */
declare const centerY: number
/**
 * Mouse position X
 */
declare const mouseX: number
/**
 * Mouse position Y
 */
declare const mouseY: number
/**
 * Draw loop
 */
declare const animate: (animationFunction: () => void) => void
