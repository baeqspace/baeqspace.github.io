let slider = document.querySelector('.reviews-container')
let maxScroll = slider.scrollWidth - slider.clientWidth - 200

document.onresize = ()=>{
    maxScroll = slider.scrollWidth - slider.clientWidth - 200
}

const move = (isRight) => {
    slider.scrollBy(isRight ? 500 : -300,0)
}

let interval;

const setInterv = () => {
    interval = setInterval(()=> {
        slider.scrollLeft >= maxScroll ? slider.scroll(0,0) : move(true)
    },2000)
}

let timer;

const setTimer = () => {
    clearInterval(interval)
    clearTimeout(timer)
    timer = setTimeout(setInterv, 5000)
}

setInterv()

let sliderElems = slider.querySelectorAll('.review')
let dotsCont = document.querySelector('.dots')
let k = 1
for (let i of sliderElems) {
    let dot = document.createElement('div')
    dot.classList.add('dot')
    dot.dataset.count = k
    dotsCont.append(dot)
    dot.onclick = () => {
        setTimer()
        let pos = Math.round(maxScroll / sliderElems.length * dot.dataset.count) - 200
        slider.scroll(pos, 0)
        console.log(pos)
    }
    k++
}