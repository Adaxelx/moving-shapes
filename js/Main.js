/* container */

const container = document.querySelector('.shapesCon')
const containerH = container.offsetHeight;
const containerOff = container.offsetTop;

/* shapes */ 

const square = document.querySelector('.square');
const circle = document.querySelector('.circle');
const rect3 = document.querySelector('.rect3')
const rect2 = document.querySelector('.rect2')
const rect2Height = rect2.offsetHeight;
const rect2Off = rect2.offsetTop;
let scrollValue;


const handleScroll = () =>{
    scrollValue = window.scrollY;
    square.style.left = `${ -50-scrollValue/10}%`
    square.style.top = `${containerH*0.4 + scrollValue}px`
    circle.style.left = `${20+scrollValue/3}%`
    rect3.style.left = `${80+scrollValue/3}%`
    rect2.style.top = `${-containerH*0.2 + scrollValue}px`;
    // else{
    //     rect2.style.position = 'absolute';
    //     rect2.style.top = `-20vh`;
    //     rect2.style.width = 100 + '%'
    // }
}




window.addEventListener('scroll',handleScroll)