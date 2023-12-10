const landingLinks = document.querySelectorAll('[data-type="landing"]')
const reactLinks = document.querySelectorAll('[data-type="react"]')

const landingButton = document.querySelector('#landing-button')
const reactButton = document.querySelector('#react-button')

landingButton.onclick = () => {
    reactButton.classList.remove('selected')
    landingButton.classList.add('selected')
    reactLinks.forEach(elem => elem.classList.add('hidden'))
    setTimeout(() => landingLinks.forEach(elem => elem.classList.remove('hidden')), 700)
}

reactButton.onclick = () => {
    landingButton.classList.remove('selected')
    reactButton.classList.add('selected')
    landingLinks.forEach(elem => elem.classList.add('hidden'))
    setTimeout(() => reactLinks.forEach(elem => elem.classList.remove('hidden')), 700)
}