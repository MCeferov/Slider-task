"use strict";

const images = ['build' , 'city', 'mozaic', 'night' , 'tree' ];

const sliderImage = document.querySelector('.slider-image');

const leftBtn = document.querySelector('#left'); 
const rightBtn = document.querySelector('#right'); 



let index= 0;

rightBtn.addEventListener('click',() =>{
    if (index < images.length) {
        index++;
    }
    if (index === images.length) { 
        index = 0
}

sliderImage.style.backgroundImage = `url(images/${images[index]}.jpg)`;
})
 


leftBtn.addEventListener('click',() =>{
    if (index > 0) {
        index--;
    }
    if ( index === 0) {
        index = images.length-1
    }
    
    sliderImage.style.backgroundImage = `url(images/${images[index]}.jpg)`;
});