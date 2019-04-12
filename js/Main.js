const square = document.querySelector('.square');
const circle = document.querySelector('.circle');
const rect3 = document.querySelector('.rect3')
let scrollValue;
const handleScroll = () =>{
    scrollValue = window.scrollY;
    square.style.left = `${ -50-scrollValue/15}%`
}




window.addEventListener('scroll',handleScroll)