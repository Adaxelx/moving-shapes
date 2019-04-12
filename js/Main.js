const square = document.querySelector('.square');
const circle = document.querySelector('.circle');
const rect3 = document.querySelector('.rect3')
let scrollValue;
const handleScroll = () =>{
    scrollValue = window.scrollY;
    square.style.left = `${ -50-scrollValue/10}%`
    circle.style.left = `${20+scrollValue/3}%`
    rect3.style.left = `${80+scrollValue/3}%`
}




window.addEventListener('scroll',handleScroll)