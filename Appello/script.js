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

let burger = document.querySelector('.burger')
let nav = document.querySelector('.header-nav')
let line1 = document.querySelector('.burg-line:nth-of-type(1)')
let line2 = document.querySelector('.burg-line:nth-of-type(2)')
let line3 = document.querySelector('.burg-line:nth-of-type(3)')
let lines = document.querySelectorAll('.burg-line')
burger.onclick = () => {
    if (nav.style.display == 'grid') {
        line1.style.transform = ''
        line1.style.width = '35px'
        line2.style.opacity = ''
        line3.style.transform = ''
        line3.style.width = '35px'
        nav.classList.add('anim')
        setTimeout(()=>{nav.classList.remove('anim');nav.style.display = 'none'},500)
    } else {
        line1.style.transform = 'translateY(12px) rotate(45deg)'
        line1.style.width = '50px'
        line2.style.opacity = '0'
        line3.style.transform = 'translateY(-12px) rotate(-45deg)'
        line3.style.width = '50px'
        nav.style.display = 'grid'
    }
}

let questions = document.querySelectorAll('.question')

const handleClick = (q)=>{
    q.onclick = ()=>{
        let text = q.querySelector('.q-ans')
        let cross = q.querySelector('.cross')
        text.classList.remove('hidden')
        cross.style.transform = 'rotate(45deg)'
        q.onclick = ()=>{
            text.classList.add('hidden')
            cross.style.transform = ''
            handleClick(q)
        }
    }
}

for (let q of questions) {
    handleClick(q)
}

let stages = document.querySelectorAll('.stage')
let steps = document.querySelectorAll('.steps')

for (let stage of stages) {
    stage.onclick = ()=>{
        let selected = document.querySelector('.selected')
        selected.classList.remove('selected')
        stage.classList.add('selected')
        for (let step of steps) {
            step.classList.add('hidden-step')
            if (step.dataset.step === stage.dataset.step) {
                step.classList.remove('hidden-step')
            }
        }
    }
}