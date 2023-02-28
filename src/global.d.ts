type CanvasSize = { width: number; height: number }
type Coordinates = { x: number; y: number }
type Style = "fill" | "stroke" | "fillAndStroke"

/**
 * Reference to the `<canvas />` element.
 */
declare const canvas: HTMLCanvasElement
/**
 * Reference to the canvas context.
 */
declare const c: CanvasRenderingContext2D
/**
 * Used to set the canvas size.
 */
declare const canvasSize: (width: number, height: number) => void
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
