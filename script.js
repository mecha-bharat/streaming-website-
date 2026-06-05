const navbar = document.querySelector(".navbar")
window.addEventListener('scroll',function(){
    if(window.scrollY>50){
        navbar.classList.add('scrolled');
    } else{
        navbar.classList.remove('scrolled');
    }
});

const leftArrows = document.querySelectorAll(".arrow-left");
const rightArrows = document.querySelectorAll(".arrow-right");
const rows=document.querySelectorAll(".row-container");

leftArrows.forEach(function(arrow,index) {
    arrow.addEventListener("click",function(){
        rows[index].scrollLeft-=400;
    });
    
});
rightArrows.forEach(function(arrow,index) {
    arrow.addEventListener("click",function(){
        rows[index].scrollLeft+=400;
    });
    
});