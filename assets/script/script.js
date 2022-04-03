document.querySelector('.open-arrow').addEventListener("click", function(){
    document.querySelector('.menu').classList.toggle('menu-active');
});
window.addEventListener("scroll", function(){
    document.querySelector('.menu').classList.remove('menu-active');
})

document.querySelector('#code-but').addEventListener("click", function(){
    document.querySelector('.ul').classList.toggle('ul-active')
});
document.querySelector('#code-but-main').addEventListener("click", function(){
    document.querySelector('.ul').classList.toggle('ul-active')
    document.querySelector('.menu').classList.toggle('menu-active');

});