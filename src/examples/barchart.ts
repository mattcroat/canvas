const data = [16, 68, 20, 30, 54]

canvasSize(500, 500)
background('white')

//draw data
c.fillStyle = 'aqua'
for (var i = 0; i < data.length; i++) {
	var dp = data[i]
	c.fillRect(40 + i * 100, 460 - dp * 5, 50, dp * 5)
}

//draw axis lines
c.fillStyle = 'black'
c.lineWidth = 2.0
c.beginPath()
c.moveTo(30, 10)
c.lineTo(30, 460)
c.lineTo(490, 460)
c.stroke()

//draw text and vertical lines
c.fillStyle = 'black'
for (var i = 0; i < 6; i++) {
	c.fillText((5 - i) * 20 + '', 4, i * 80 + 60)
	c.beginPath()
	c.moveTo(25, i * 80 + 60)
	c.lineTo(30, i * 80 + 60)
	c.stroke()
}

var labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY']
//draw horiz text
for (var i = 0; i < 5; i++) {
	c.fillText(labels[i], 50 + i * 100, 475)
}
