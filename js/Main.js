const square = document.querySelector('.square');
const circle = document.querySelector('.circle');
const rect3 = document.querySelector('.rect3')
const rect2 = document.querySelector('.rect2')
let scrollValue;
const handleScroll = () =>{
    scrollValue = window.scrollY;
    square.style.left = `${ -50-scrollValue/10}%`
    circle.style.left = `${20+scrollValue/3}%`
    rect3.style.left = `${80+scrollValue/3}%`
    if(scrollValue<200){
        rect2.style.position = 'absolute';
    }else if(scrollValue>=200){
        rect2.style.position = 'fixed';
    }
}




window.addEventListener('scroll',handleScroll)