// const burger = document.querySelector('.burger');
// const navLink = document.querySelector('.nav_link');


// burger.addEventListener('click', () => {
//     navLink.classList.toggle('active');
// });

const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnSvg = document.querySelector('svg')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')

    // const isOpen = dropDownMenu.classList.contains('open')
    // toggleBtnSvg.classList = isOpen
    // ? 'xmark'
    // : 'xmlns'
}