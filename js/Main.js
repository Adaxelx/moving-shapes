/* container */

const container = document.querySelector('.shapesCon')
const containerH = container.offsetHeight;
const containerOff = container.offsetTop;


const container2 = document.querySelector('section:nth-of-type(2)')
const container2Off = container2.offsetTop;
const textCon = document.querySelector('.textCon')
const textConH = textCon.offsetHeight;

const container3 = document.querySelector('section:nth-of-type(3)')
const container3Off = container3.offsetTop;
const bgc = document.querySelector('.bgc')
const bgcH = bgc.offsetHeight;

/* shapes */ 

const square = document.querySelector('.square');
const circle = document.querySelector('.circle');
const rect3 = document.querySelector('.rect3')
const rect2 = document.querySelector('.rect2')
const rect2Height = rect2.offsetHeight;
const rect2Off = rect2.offsetTop;

/* variables */

let windowH = window.innerHeight;
let scrollValue;

const handleScroll = () =>{
    
    scrollValue = window.scrollY;
    // square.style.left = `${ -40-scrollValue/10}%`
    // square.style.top = `${containerH*0.3 + scrollValue}px`
    square.style.transform = `translateX(${-scrollValue/10}%) translateY(${scrollValue}px) rotate(-25deg)`
    circle.style.transform = `translateX(${scrollValue/5}%)`
    rect3.style.transform = `translateX(${scrollValue/5}%) rotate(30deg)`

    // if(scrollValue > 100) rect2.style.top = `${-containerH*0.2 + scrollValue-100}px`;

    if(scrollValue > 100) rect2.style.transform = `translateY(${scrollValue-100}px) rotate(-25deg)`

    if(scrollValue>container2Off - container2.offsetHeight){
        textCon.style.height = `${scrollValue*1.3 - container2Off + windowH}px`
    }
    if(scrollValue>container3Off - windowH){
       
       bgc.style.transform = `translateX(${scrollValue*1.35 - container3Off + windowH}px) rotate(-30deg)`
    }


    /* wartość scrolla - offset kontenera + wysokość okna*/ 
}




window.addEventListener('scroll',handleScroll)