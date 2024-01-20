let canvas = document.querySelector("canvas")

let context = canvas.getContext("2d")

context.lineWidth = 5

context.beginPath()

for (let i = 0; i < 5; i++) {
   for (let j = 0; j < 5; j++) {
      let width = 100
      let height = 100
      let gap = 20
      let x = 100 + (gap + width) * i
      let y = 100 + (height + gap) * j

      //   if (i > 0 && i < 4) {
      //      context.rect(x + 8, y + 8, width - 16, height - 16)
      //   }

      if (Math.random() < 0.5) {
         context.rect(x + 8, y + 8, width - 16, height - 16)
      }

      context.rect(x, y, width, height)
   }
}

context.stroke()

/* 
context.fillStyle = "blue"

//x,y co-ordinates on a screen used to paint
//context.fillRect(100, 100, 400, 400)

//3 things its doing

context.lineWidth = 4
context.beginPath()
context.rect(100, 100, 400, 400)
context.stroke()

//Init the path
context.beginPath()

//Give co-odinates and specfications
context.arc(300, 300, 100, 0, Math.PI * 2)

//Draw the path
context.stroke()

Drawing a grid

context.rect(100, 100, 100, 100)
context.rect(210, 100, 100, 100)
context.rect(320, 100, 100, 100)
context.rect(430, 100, 100, 100)

context.rect(100, 210, 100, 100)
context.rect(210, 210, 100, 100)
context.rect(320, 210, 100, 100)
context.rect(430, 210, 100, 100)

context.rect(100, 320, 100, 100)
context.rect(210, 320, 100, 100)
context.rect(320, 320, 100, 100)
context.rect(430, 320, 100, 100)

context.rect(100, 430, 100, 100)
context.rect(210, 430, 100, 100)
context.rect(320, 430, 100, 100)
context.rect(430, 430, 100, 100)

context.rect(100, 100, 100, 100)
context.rect(210, 210, 100, 100)
context.rect(320, 320, 100, 100)
context.rect(430, 430, 100, 100)

*/
