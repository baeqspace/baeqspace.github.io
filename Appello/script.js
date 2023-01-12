let scroller = document.querySelector('.kick-3')
let left = document.querySelector('.button-left')
let right = document.querySelector('.button-right')
let maxScroll = scroller.scrollWidth - scroller.clientWidth - 200

const move = (isRight) => {
    scroller.scrollBy(isRight ? 300 : -300,0)
}

let interval;

const setInterv = () => {
    interval = setInterval(()=> {
        scroller.scrollLeft >= maxScroll ? scroller.scroll(0,0) : move(true)
    },1000)
}

let timer;

const setTimer = () => {
    clearInterval(interval)
    clearTimeout(timer)
    timer = setTimeout(setInterv, 5000)
}

left.onclick = () => {setTimer();move(false)}
right.onclick = () => {setTimer();move(true)}

setInterv()