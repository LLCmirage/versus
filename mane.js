const burger = document.querySelector('.mobile-menu');
console.log(burger);
const nav = document.querySelector('.menu');
burger.addEventListener('click', function(){
    nav.classList.toggle('active');
})