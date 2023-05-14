// slider 1

let offers = document.querySelector('.card-container')
let offLeft = document.querySelector('.off-left')
let offRight = document.querySelector('.off-right')

offLeft.onclick = () => {
    offers.scrollBy(-285, 0)
}

offRight.onclick = () => {
    offers.scrollBy(285, 0)
}

// slider 2

let features = document.querySelector('.feat-cont')
let buttonRight = document.querySelector('.control-right')
let buttonLeft = document.querySelector('.control-left')
let pages = document.querySelector('.pages')

buttonLeft.onclick = () => {
    pages.textContent = '1/2'
    buttonRight.classList.remove('control-dark')
    buttonLeft.classList.add('control-dark')
    features.scrollBy(-1*window.innerWidth, 0)
}

buttonRight.onclick = () => {
    pages.textContent = '2/2'
    buttonLeft.classList.remove('control-dark')
    buttonRight.classList.add('control-dark')
    features.scrollBy(window.innerWidth,0)
}

// slider 3

let advs = document.querySelector('.advs')
let advLeft = document.querySelector('.adv-left')
let advRight = document.querySelector('.adv-right')

advLeft.onclick = () => {
    advs.scrollBy(-1 * window.innerWidth, 0)
}

advRight.onclick = () => {
    advs.scrollBy(window.innerWidth, 0)
}

// slider 4

let rev = document.querySelector('.rev-container')
let revLeft = document.querySelector('.rev-left')
let revRight = document.querySelector('.rev-right')
let revChildren = rev.children
let currentSnap = 1

const makeCurrent = () => {
    for (let child of revChildren) {
        child.style = ''
    }
    revChildren[currentSnap-1].style.paddingTop = '200px'
    revChildren[currentSnap-1].style.height = '750px'
}
makeCurrent()

revLeft.onclick = () => {
    if (currentSnap === 1) return
    currentSnap--
    makeCurrent()
    rev.scrollBy(-700, 0)
}

revRight.onclick = () => {
    if (currentSnap === 5) return
    currentSnap++
    makeCurrent()
    rev.scrollBy(700,0)
}

let burger = document.querySelector('.burger')
let nav = document.querySelector('.header-2')
let elems = document.querySelectorAll('.header-1 .address, .header-1 .phones, .header-1 .socials')
let line1 = document.querySelector('.burg-line:nth-of-type(1)')
let line2 = document.querySelector('.burg-line:nth-of-type(2)')
let line3 = document.querySelector('.burg-line:nth-of-type(3)')
let lines = document.querySelectorAll('.burg-line')
line2.style.width = '25px'
burger.onclick = () => {
    if (nav.style.display == 'grid') {
        line1.style.transform = ''
        line1.style.width = '35px'
        line2.style.opacity = ''
        line3.style.transform = ''
        line3.style.width = '35px'
        nav.classList.add('anim')
        for (let elem of elems) {
            elem.classList.add('anim')
        }
        setTimeout(()=>{
            nav.classList.remove('anim');
            nav.style.display = 'none'
            for (let elem of elems) {
                elem.style = 'none'
                elem.classList.remove('anim')
            }
        },500)
    } else {
        line1.style.transform = 'translateY(12px) rotate(45deg)'
        line1.style.width = '50px'
        line2.style.opacity = '0'
        line3.style.transform = 'translateY(-12px) rotate(-45deg)'
        line3.style.width = '50px'
        nav.style.display = 'grid'
        for (let elem of elems) {
            elem.style.display = 'grid'
        }
        document.querySelector('.header-1 .phones').style.display = 'block'
    }
}