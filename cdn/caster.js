document.querySelector('.mobile-open').innerHTML =
`
<div></div>
<div></div>
<div></div>
`

document.querySelector('.mobile-close').innerHTML =
`
<div></div>
<div></div>
`

document.querySelector('.mobile-open').addEventListener("click", function(){
    document.querySelector('.mobile-menu').classList.add('mobile-active');
})
document.querySelector('.mobile-close').addEventListener("click", function(){
    document.querySelector('.mobile-menu').classList.remove('mobile-active');
})

window.addEventListener("scroll", function(){
    document.querySelector('.mobile-menu').classList.remove('mobile-active');
});

document.querySelector('.mm-cr-logo').innerHTML =
`
<div></div>
<div></div>
<div></div>
`

document.querySelector('.mm-cr-logo').addEventListener("click", function(){
    document.querySelector('.mobile-menu-cr').classList.toggle('cr-active');
})
window.addEventListener("scroll", function(){
    document.querySelector('.mobile-menu-cr').classList.remove('cr-active');
});