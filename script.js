


const buttonUp = document.getElementById('up');
const buttonDown = document.getElementById('down');
const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const slidesCount = mainSlide.querySelectorAll('div').length;
const container = document.querySelector('.container');


var activeSlideIndex=0;


sidebar.style.top = `-${(slidesCount-1)*100}vh`;

buttonUp.addEventListener('click', ()=>{
changeSlide('up');
});

buttonDown.addEventListener('click', ()=>{
changeSlide('down');
});

function changeSlide(direction){
if(direction==='up'){
    activeSlideIndex++;
    if(activeSlideIndex===slidesCount){activeSlideIndex=0;};
} else {
    if(direction === 'down'){
    activeSlideIndex--;
    if(activeSlideIndex<0){activeSlideIndex=slidesCount-1;};
}
}
const height = container.clientHeight;

let size=activeSlideIndex*height;


mainSlide.style.transform = `translateY(-${size}px)`
sidebar.style.transform = `translateY(${size}px)`

};



document.onwheel = function(event){
    setTimeout(()=> {console.log(event);
        if(event.deltaY>0){
            changeSlide('down');
        } else if(event.deltaY<0){changeSlide('up');};},0);
    
}