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