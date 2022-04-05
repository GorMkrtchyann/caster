document.querySelector('.open-arrow').addEventListener("click", function(){
    document.querySelector('.menu').classList.toggle('menu-active');
    document.querySelector('.ul').classList.remove('ul-active')

});
window.addEventListener("scroll", function(){
    document.querySelector('.menu').classList.remove('menu-active');
    document.querySelector('.ul').classList.remove('ul-active')
})

document.querySelector('#code-but').addEventListener("click", function(){
    document.querySelector('.ul').classList.toggle('ul-active')
});
document.querySelector('#code-but-main').addEventListener("click", function(){
    document.querySelector('.ul').classList.toggle('ul-active')
    document.querySelector('.menu').classList.toggle('menu-active');
});

let cssCdnBut = document.querySelector('#css-copy');
let cssCdn = document.querySelector('#css-cdn').textContent;

cssCdnBut.addEventListener("click", function(){
    navigator.clipboard.writeText(cssCdn)
    document.querySelector('.cdn i').style.display = 'inline'
});

let jsCdnBut = document.querySelector('#js-copy');
let jsCdn = document.querySelector('#js-cdn').textContent;

jsCdnBut.addEventListener("click", function(){
    navigator.clipboard.writeText(jsCdn)
    document.querySelector('.cdn2 i').style.display = 'inline'
});

function load() {
    setTimeout(() => {
        document.querySelector('.load').style.display = 'none'
        document.querySelector('body').classList.add('body-a')
    }, 2000);    
}