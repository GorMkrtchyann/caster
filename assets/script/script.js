let openArrow = document.querySelectorAll('.open-arrow')

for(elem of openArrow){
    elem.addEventListener("click", function(){
        let menu = document.querySelectorAll('.menu');
        for(elem2 of menu){
            elem2.classList.toggle('menu-active');
            for(elem3 of document.querySelectorAll('.ul')){
                elem3.classList.remove('ul-active')
            }
        }
    });
}


window.addEventListener("scroll", function(){
    let menu = document.querySelectorAll('.menu');
    for(elem of menu){
        elem.classList.remove('menu-active');
        for(elem2 of document.querySelectorAll('.ul')){
            elem2.classList.remove('ul-active')
        }
    }
    let leng = document.querySelectorAll('.language-changer')
    for(elem3 of leng){
        elem3.classList.remove('lang-a');
    }   
    let mobMenu = document.querySelectorAll('.mob-menu')
    for(elem4 of mobMenu){
        elem4.classList.remove('mob-a');
    } 
})

let codeBut = document.querySelectorAll('.code-but')

for(elem of codeBut){
    elem.addEventListener("click", function(){
        for(elem2 of document.querySelectorAll('.ul')){
            elem2.classList.toggle('ul-active')
        }
    });
}

let codeButMain = document.querySelectorAll('.code-but-main')
for(elem of codeButMain){
    elem.addEventListener("click", function(){
        for(elem2 of document.querySelectorAll('.ul')){
            elem2.classList.toggle('ul-active')
        }

        let menu = document.querySelectorAll('.menu')
        for(elem3 of menu){
            elem3.classList.toggle('menu-active');
        }
    });
}


let cssCdnBut = document.querySelectorAll('.css-copy');
let cssCdn = document.querySelector('.css-cdn').textContent;

for(elem of cssCdnBut){
    elem.addEventListener("click", function(){
        navigator.clipboard.writeText(cssCdn)

        let cdnI = document.querySelectorAll('.cdn3 i');
        for(elem3 of cdnI){
            elem3.style.display = 'inline'
        }
    });
}


let jsCdnBut = document.querySelectorAll('.js-copy');
let jsCdn = document.querySelector('.js-cdn').textContent;

for(elem of jsCdnBut){
    elem.addEventListener("click", function(){
        navigator.clipboard.writeText(jsCdn)

        let cdnI = document.querySelectorAll('.cdn2 i');
        for(elem2 of cdnI){
            elem2.style.display = 'inline'
        }
    });
}

function load() {
    setTimeout(() => {
        document.querySelector('.load').style.display = 'none'
        document.querySelector('body').classList.add('body-a')
    }, 2000);    
}

let hoverOn = document.querySelectorAll('.language-changer');

for(elem of hoverOn){
    elem.addEventListener('mouseenter', function(){
        for(elem of document.querySelectorAll('.language-changer'))
        elem.classList.add('lang-a');
    })
}
for(elem of hoverOn){
    elem.addEventListener('mouseleave', function(){
        for(elem of document.querySelectorAll('.language-changer'))
        elem.classList.remove('lang-a');
    })
}


let rusBut = document.querySelectorAll('.rusbut');

for(elem of rusBut){
    elem.addEventListener("click", function(){
        document.querySelector('#rus').style.display = 'block'
        document.querySelector('#arm').style.display = 'none'
        document.querySelector('#usa').style.display = 'none'
    })
}

let usaBut = document.querySelectorAll('.usabut');

for(elem of usaBut){
    elem.addEventListener("click", function(){
        document.querySelector('#usa').style.display = 'block'
        document.querySelector('#arm').style.display = 'none'
        document.querySelector('#rus').style.display = 'none'
    })
}

let armBut = document.querySelectorAll('.armbut');

for(elem of armBut){
    elem.addEventListener("click", function(){
        document.querySelector('#arm').style.display = 'block'
        document.querySelector('#rus').style.display = 'none'
        document.querySelector('#usa').style.display = 'none'
    })
}


let mobMenu = document.querySelectorAll('.mob-menu');

for(elem of mobMenu){
    elem.addEventListener("click", function(){
        let mobMenu = document.querySelectorAll('.mob-menu');
        for(elem2 of mobMenu){
            elem2.classList.toggle('mob-a');
        }
    })
}


'https://gormkrtchyann.github.io/caster/'
  .split('/')
  .slice(0,5).join('/');

