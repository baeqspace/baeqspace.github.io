let burger = document.querySelector('.burger')
let nav = document.querySelector('.header-cont')
let line1 = document.querySelector('.burg-line:nth-of-type(1)')
let line2 = document.querySelector('.burg-line:nth-of-type(2)')
let line3 = document.querySelector('.burg-line:nth-of-type(3)')
let lines = document.querySelectorAll('.burg-line')
burger.onclick = () => {
    if (nav.style.display == 'block') {
        line1.style.transform = ''
        line1.style.width = '25px'
        line2.style.opacity = ''
        line3.style.transform = ''
        line3.style.width = '25px'
        nav.classList.add('anim')
        setTimeout(() => { nav.classList.remove('anim'); nav.style.display = 'none' }, 500)
    } else {
        line1.style.transform = 'translateY(7px) rotate(45deg)'
        line1.style.width = '20px'
        line2.style.opacity = '0'
        line3.style.transform = 'translateY(-7px) rotate(-45deg)'
        line3.style.width = '20px'
        nav.style.display = 'block'
    }
}
let hits = document.querySelector('.hits')
let hitsValues = hits.querySelectorAll('.hits-container')
let hitsPagination = hits.querySelector('.pagination')

let hitsWrapper = document.querySelector('.hits-wrapper')


const paginationModule = (wrapper, pagination, values, scrollValue) => {
    let maxScroll = Math.round(wrapper.scrollWidth - wrapper.clientWidth)
    window.onresize = () => {maxScroll = Math.round(wrapper.scrollWidth - wrapper.clientWidth)}

    let k = 1;

    const currentDotRemove = ()=>{
        let currentDot = pagination.querySelector('.chosen')
        currentDot ? currentDot.classList.remove('chosen') : ''
    }

    let interval;

    const setInterv = () => {
        interval = setInterval(() => {
            if (wrapper.scrollLeft >= maxScroll) {
                wrapper.scroll(0, 0)
                k = 1
                currentDotRemove()
                dots[0].classList.add('chosen')
                return
            }
            currentDotRemove()
            let nextDot = dots[k]
            console.log(nextDot)
            nextDot.classList.add('chosen')
            wrapper.scrollBy(scrollValue, 0)
            k += 1
        }, 2000)
    }

    setInterv()

    let timer;

    const setTimer = () => {
        clearInterval(interval)
        clearTimeout(timer)
        timer = setTimeout(setInterv, 5000)
    }

    let k1 = 0

    for (let value of values) {
        let dot = document.createElement('div')
        dot.classList.add('pag')
        dot.dataset.count = k1
        if (k1 == 0) {
            dot.classList.add('chosen')
        }
        k1++
        pagination.append(dot)
        dot.onclick = () => {
            setTimer()
            let pos = scrollValue * dot.dataset.count
            wrapper.scroll(pos, 0)
            currentDotRemove()
            let nextDot = dots[dot.dataset.count]
            k = Number(dot.dataset.count) + 1
            nextDot.classList.add('chosen')
        }
    }

    let dots = pagination.querySelectorAll('.pag')
}

paginationModule(hitsWrapper, hitsPagination, hitsValues, window.innerWidth)

let bannerWrapper = document.querySelector('.banner')
let bannerPagination = bannerWrapper.querySelector('.pagination')
let bannerValues = bannerWrapper.querySelectorAll('.bnr')

paginationModule(bannerWrapper, bannerPagination, bannerValues, bannerWrapper.offsetWidth)