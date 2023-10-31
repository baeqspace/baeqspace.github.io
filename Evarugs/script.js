let slider = document.querySelector('.reviews-container')
let maxScroll = slider.scrollWidth - slider.clientWidth
let sliderElems = slider.querySelectorAll('.review')
let zone = maxScroll / sliderElems.length
let dotsCont = document.querySelector('.dots')

window.onresize = ()=>{
    maxScroll = slider.scrollWidth - slider.clientWidth
    zone = maxScroll / sliderElems.length
}

const move = () => {
    console.log(zone)
    slider.scrollBy(maxScroll / sliderElems.length,0)
}





let interval;
const setInterv = () => {
    interval = setInterval(()=> {
        console.log(slider.scrollLeft, calculateScrollPosition(sliderElems.length - 1))
        slider.scrollLeft >= calculateScrollPosition(sliderElems.length - 1) ? slider.scroll(0,0) : move()
    },2000)
}
let timer;
const setTimer = () => {
    clearInterval(interval)
    clearTimeout(timer)
    timer = setTimeout(setInterv, 5000)
}
setInterv()




function calculateScrollPosition(index) {
    return Math.round(zone * index + zone / 2)
}


for (let k = 0; k < sliderElems.length; k++) {
    console.log(k)
    let dot = document.createElement('button')
    dot.classList.add('dot')
    dot.dataset.count = k
    dotsCont.append(dot)
    dot.onclick = () => {
        setTimer()
        let pos = calculateScrollPosition(dot.dataset.count)
        slider.scroll(pos, 0)
        console.log(pos)
    }
}