const openMenu = document.querySelector('.hamburger')
const mobileMenu = document.querySelector('.menu')

openMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('none')
    openMenu.classList.toggle('fa-bars')
    openMenu.classList.toggle('fa-xmark')
})