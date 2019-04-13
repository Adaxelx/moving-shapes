/* container */

const container = document.querySelector('.shapesCon')
const containerH = container.offsetHeight;
const containerOff = container.offsetTop;
const container2 = document.querySelector('section:nth-of-type(2)')
const container2Off = container2.offsetTop;
const textCon = document.querySelector('.textCon')
const textConH = textCon.offsetHeight;
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
    square.style.left = `${ -40-scrollValue/10}%`
    square.style.top = `${containerH*0.3 + scrollValue}px`
    circle.style.left = `${20+scrollValue/5}%`
    rect3.style.left = `${80+scrollValue/5}%`
    if(scrollValue > 100) rect2.style.top = `${-containerH*0.2 + scrollValue-100}px`;

    if(scrollValue>container2Off - container2.offsetHeight){
        console.log(textConH)
        textCon.style.height = `${textConH}px`
    }
}




window.addEventListener('scroll',handleScroll)