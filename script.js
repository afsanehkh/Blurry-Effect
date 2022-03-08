const pic = document.querySelector('.pic')
const number = document.querySelector('.number')

let interval = setInterval(blurring, 30)
let load = 0

function blurring() {
  load++
  if (load > 99) {
    clearInterval(interval)
  }

  number.innerText = load + '%'
  number.style.opacity = scale(load, 0, 100, 1, 0)
  pic.style.filter = `blur(${scale(load, 0, 100, 40, 0)}px)`
}
function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}
