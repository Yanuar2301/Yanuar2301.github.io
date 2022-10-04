const input = document.querySelector('.List-Nav-toggle input');
const nav = document.querySelector('.Navigator ul');

input.addEventListener('click',function(){
    nav.classList.toggle('slide');
});

activeslideimg();
    function activeslideimg(activeSlide = 1){
        const slide = document.querySelectorAll(".content");
        slide[activeSlide].classList.add("active");

        
    }