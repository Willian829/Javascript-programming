

let canvas = document.querySelector('.canvas')
let input = document.querySelector('input')
let val = document.querySelector('.val')

input.addEventListener('input', () => {
    val.textContent = input.value
    drawTree()
})

let ctx = canvas.getContext('2d')

function drawTree() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    let cVal = input.value
    drawBranch(canvas.width / 2, canvas.height, -90, cVal, 100)
}

function drawBranch(width, height, angle, depth, length) {
    if (depth === 0) return

    let x = width + Math.cos((angle * Math.PI) / 180) * length
    let y = height + Math.sin((angle * Math.PI) / 180) * length

    ctx.beginPath()
    ctx.moveTo(width, height)
    ctx.lineTo(x, y)
    ctx.strokeStyle = `hsl(${depth * 50}, 100%, 50%)`
    ctx.lineWidth = depth * 0.6
    ctx.stroke()

    drawBranch(x, y, angle - 20, depth - 1, length * 0.7)
    drawBranch(x, y, angle + 20, depth - 1, length * 0.7)
}

drawTree()