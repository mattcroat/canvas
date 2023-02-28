# Canvas Playground

Playground for learning the Canvas API.

## Why?

Using the Canvas API can involve a lot of boileraplate code and I want to use a simpler API and expose some global methods to make it easier to use inspired by [p5.js](https://p5js.org/).

## Usage

If you only want to interact with the canvas element and use the context you can use `canvas` to reference the element and `c` for the canvas context anywhere you want.

```ts
// `canvas` and `c` are globally available on the `window`

canvas.width = 400
canvas.height = 400
canvas.style.backgroundColor = '#222'

c.arc(200, 200, 80, 0, Math.PI * 2)
c.fillStyle = 'aqua'
c.fill()
```

## Helper Methods

Here's the previous example but using helper methods.

```ts
// every method is global

canvasSize(400, 400)
background('#222')
fill('aqua')
circle(200, 200, 80)
```

Here's a list of the experimental helper methods you can use:

- `canvasSize`
- `background`
- `grid`
- `translate`
- `coordinateSystem`
- `circle`
- `line`
- `point`
- `text`
- `fill`
- `stroke`
- `clear`
