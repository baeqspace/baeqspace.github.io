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
        setTimeout(()=>{nav.classList.remove('anim');nav.style.display = 'none'},500)
    } else {
        line1.style.transform = 'translateY(7px) rotate(45deg)'
        line1.style.width = '20px'
        line2.style.opacity = '0'
        line3.style.transform = 'translateY(-7px) rotate(-45deg)'
        line3.style.width = '20px'
        nav.style.display = 'block'
    }
}