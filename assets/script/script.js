document.querySelector('.open-arrow').addEventListener("click", function(){
    document.querySelector('.menu').classList.toggle('menu-active');
    for(elem of document.querySelectorAll('.ul')){
        elem.classList.remove('ul-active')
    }

});
window.addEventListener("scroll", function(){
    document.querySelector('.menu').classList.remove('menu-active');
    for(elem of document.querySelectorAll('.ul')){
        elem.classList.remove('ul-active')
    }
})

document.querySelector('#code-but').addEventListener("click", function(){
    for(elem of document.querySelectorAll('.ul')){
        elem.classList.toggle('ul-active')
    }
});
document.querySelector('#code-but-main').addEventListener("click", function(){
    for(elem of document.querySelectorAll('.ul')){
        elem.classList.toggle('ul-active')
    }
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

document.querySelector('.language-changer').addEventListener('mouseenter', function(){
    document.querySelector('.language-changer').classList.add('lang-a');
})
document.querySelector('.language-changer').addEventListener('mouseleave', function(){
    document.querySelector('.language-changer').classList.remove('lang-a');
});



function arm(){
    document.querySelector('.title').innerHTML = 
    `<h1>Caster</h1>
    <p>Հայկական առաջին CSS և JS ֆրեմվորկ</p>`

    document.querySelector('#ab').innerHTML = 
    `<h2>Ինչ է իրենից ներկայացնում Caster ֆրեմվորկը</h2>
    <p>Caster-ը հայկական առաջին ֆրեմվորկն է այն կրճատում է ձեր CSS և JS կոդը։ Այն աշխատում է
    հետևյալ տրամաբանությամբ՝ ստեղծվաց է հատուկ կլասների անուներ որոնք կատարում են տարբեր ֆունկցիաներ
    դուք տեղադրում եք Caster-ի կապող լինկը ձեր HTML ֆայլի մեջ և ձեր բլոկներին տալիս եք այդ կլասների անուները։
</p>`

    document.querySelector('#lk').innerHTML = 
    `<h2>Ինչպես կապել Caster-ը HTML ֆայլին</h2>
    <p>Կա 2 կարևոր ֆայլեր որոնք պետք է կցել HTML-ին մեկը CSS-ն է մյուսը JS-ը, առանց դրանք կցելու ոչ մի բան
        չի աշխատի։
    </p>
    <h3>CSS-ը</h3>
    <p>Սա պատճենեք(copy) է տեղադրեք HTML ֆայլի <span><</span>head<span>></span> թեգի մեջ</p>
    <div class="cdn">
        <p id="css-cdn">
            <span><</span><a>link</a> <b>rel</b>="<c>stylesheet</c>" <b>href</b>="<c>https://gormkrtchyann.github.io/caster/cdn/caster.css</c>"<span>></span>
        </p>
        <button id="css-copy">Copy<i class="fa-solid fa-check"></i></button>
    </div>
    <h3>JS-ը</h3>
    <p>Սա պատճենեք(copy) է տեղադրեք HTML ֆայլի <span><</span>body<span>></span> թեգի նեքևում</p>
    <div class="cdn cdn2">
        <p id="js-cdn">
            <span><</span><a>script</a> <b>src</b>="<c>https://gormkrtchyann.github.io/caster/cdn/caster.js</c>"<span>></span><span><</span><a>/script</a><span>></span>
        </p>
        <button id="js-copy">Copy<i class="fa-solid fa-check"></i></button>
    </div>`
    
    document.querySelector('#codes').innerHTML = 
    `<h2>Կոդերի Անվանուները</h2>`

    document.querySelector('#cont').innerHTML =
    `<h3>Container</h3>
    <ul>
        <li>cont <i class="fa-solid fa-arrow-right"></i> Լայնություն 95%, վարևից և նեքևից 30px հեռավորություն, հավասարեցված կենտրոն</li>
        <li>cont-s <i class="fa-solid fa-arrow-right"></i> Լայնություն 80%, վարևից և նեքևից 30px հեռավորություն, հավասարեցված կենտրոն</li>
        <li>cont-m <i class="fa-solid fa-arrow-right"></i> Լայնություն 90%, վարևից և նեքևից 30px հեռավորություն, հավասարեցված կենտրոն</li>
        <br>
        <li>cont-x <i class="fa-solid fa-arrow-right"></i> Լայնություն 0%, վարևից և նեքևից 30px հեռավորություն, հավասարեցված կենտրոն</li>
        <li>cont-xs <i class="fa-solid fa-arrow-right"></i> Լայնություն 0%, վարևից և նեքևից 10px հեռավորություն, հավասարեցված կենտրոն</li>
        <li>cont-xm <i class="fa-solid fa-arrow-right"></i> Լայնություն 0%, վարևից և նեքևից 20px հեռավորություն, հավասարեցված կենտրոն</li>
        <br>
        <li>cont-y <i class="fa-solid fa-arrow-right"></i> Լայնություն 95%, վարևից և նեքևից 0px հեռավորություն, հավասարեցված կենտրոն</li>
        <li>cont-ys <i class="fa-solid fa-arrow-right"></i> Լայնություն 80%, վարևից և նեքևից 0px հեռավորություն, հավասարեցված կենտրոն</li>
        <li>cont-ym <i class="fa-solid fa-arrow-right"></i> Լայնություն 90%, վարևից և նեքևից 0px հեռավորություն, հավասարեցված կենտրոն</li>
    </ul>`

    document.querySelector('#flex').innerHTML = 
    `<h3>FlexBox</h3>
    <ul>
        <li>flex <i class="fa-solid fa-arrow-right"></i> display: flex-ի փոխարեն</li>
        <br>
        <li>jc-fs <i class="fa-solid fa-arrow-right"></i> justify-content: flex-start-ի փոխարեն կատարում է նաև աֆտոմատ display: flex</li>
        <li>jc-fe <i class="fa-solid fa-arrow-right"></i> justify-content: flex-end-ի փոխարեն կատարում է նաև աֆտոմատ display: flex</li>
        <li>jc-c <i class="fa-solid fa-arrow-right"></i> justify-content: center-ի փոխարեն կատարում է նաև աֆտոմատ display: flex</li>
        <li>jc-sb <i class="fa-solid fa-arrow-right"></i> justify-content: space-between-ի փոխարեն կատարում է նաև աֆտոմատ display: flex</li>
        <li>jc-sa <i class="fa-solid fa-arrow-right"></i> justify-content: space-around-ի փոխարեն կատարում է նաև աֆտոմատ display: flex</li>
        <li>jc-se <i class="fa-solid fa-arrow-right"></i> justify-content: space-evenly-ի փոխարեն կատարում է նաև աֆտոմատ display: flex</li>
        <br>
        <li>fd-r <i class="fa-solid fa-arrow-right"></i> flex-direction: row-ի փոխարեն կատարում է նաև աֆտոմատ display: flex</li>
        <li>fd-rr <i class="fa-solid fa-arrow-right"></i> flex-direction: row-reverse-ի փոխարեն կատարում է նաև աֆտոմատ display: flex</li>
        <li>fd-c <i class="fa-solid fa-arrow-right"></i> flex-direction: column-ի փոխարեն կատարում է նաև աֆտոմատ display: flex</li>
        <li>fd-cr <i class="fa-solid fa-arrow-right"></i> flex-direction: column-reverse-ի փոխարեն կատարում է նաև աֆտոմատ display: flex</li>
        <br>
        <li>fw-nw <i class="fa-solid fa-arrow-right"></i> flex-wrap: nowrap-ի փոխարեն կատարում է նաև աֆտոմատ display: flex</li>
        <li>fw-w <i class="fa-solid fa-arrow-right"></i> flex-wrap: wrap-ի փոխարեն կատարում է նաև աֆտոմատ display: flex</li>
        <li>fw-wr <i class="fa-solid fa-arrow-right"></i> flex-wrap: wrap-reverse-ի փոխարեն կատարում է նաև աֆտոմատ display: flex</li>
        <br>
        <li>ai-s <i class="fa-solid fa-arrow-right"></i> align-items: stretch-ի փոխարեն կատարում է նաև աֆտոմատ display: flex</li>
        <li>ai-c <i class="fa-solid fa-arrow-right"></i> align-items: center-ի փոխարեն կատարում է նաև աֆտոմատ display: flex</li>
        <li>ai-fs <i class="fa-solid fa-arrow-right"></i> align-items: flex-start-ի փոխարեն կատարում է նաև աֆտոմատ display: flex</li>
        <li>ai-fe <i class="fa-solid fa-arrow-right"></i> align-items: flex-end-ի փոխարեն կատարում է նաև աֆտոմատ display: flex</li>
        <li>ai-b <i class="fa-solid fa-arrow-right"></i> align-items: baseline-ի փոխարեն կատարում է նաև աֆտոմատ display: flex</li>
        <br>
        <li>ac-s <i class="fa-solid fa-arrow-right"></i> align-content: stretch-ի փոխարեն կատարում է նաև աֆտոմատ display: flex</li>
        <li>ac-fs <i class="fa-solid fa-arrow-right"></i> align-content: flex-start-ի փոխարեն կատարում է նաև աֆտոմատ display: flex</li>
        <li>ac-fe <i class="fa-solid fa-arrow-right"></i> align-content: flex-end-ի փոխարեն կատարում է նաև աֆտոմատ display: flex</li>
        <li>ac-c <i class="fa-solid fa-arrow-right"></i> align-content: center-ի փոխարեն կատարում է նաև աֆտոմատ display: flex</li>
        <li>ac-sb <i class="fa-solid fa-arrow-right"></i> align-content: space-between-ի փոխարեն կատարում է նաև աֆտոմատ display: flex</li>
        <li>ac-sa <i class="fa-solid fa-arrow-right"></i> align-content: space-around-ի փոխարեն կատարում է նաև աֆտոմատ display: flex</li>
        <li>ac-se <i class="fa-solid fa-arrow-right"></i> align-content: space-evenly-ի փոխարեն կատարում է նաև աֆտոմատ display: flex</li>
    </ul>`


    document.querySelector('#hav').innerHTML = 
    `<h3>Հավասրեցում</h3>
    <ul>
        <li>vhc <i class="fa-solid fa-arrow-right"></i> հավասրեցնում է մեջտեղ ուղահայաց և հորիզոնական բայց երբ որ կոնտենտը պետք է կենտրոննա
            էկրանի կենտրոնում</li>
        <li>dfc-x <i class="fa-solid fa-arrow-right"></i> հավասրեցնում է մեջտեղ ուղահայաց և հորիզոնական և նրա մեջ գտնվող բլոկները դասավորվում են հորիզոնական</li>
        <li>dfc-y <i class="fa-solid fa-arrow-right"></i> հավասրեցնում է մեջտեղ ուղահայաց և հորիզոնական և նրա մեջ գտնվող բլոկները դասավորվում են ուղահայաց</li>
    </ul>`


    document.querySelector('#hx').innerHTML = 
    `<h3>Հղումներ</h3>
    <ul>
        <li>al <i class="fa-solid fa-arrow-right"></i> հեռացնում է ընդգծվածությունը և գույնը դարձնում սև</li>
    </ul>`

    document.querySelector('#bt').innerHTML = 
    `<h3>Կոճակներ</h3>
    <p>Բոլոր կոճակները ստանում են cursor: pointer հատկությունը, padding, :hover, շոխք(shadow)</p>
    <ul>
        <li>btn-n <i class="fa-solid fa-arrow-right"></i> Վերևից և ներքևից 7px աջից և ձախից 30px
        ներքին hեռավորություն(padding) <button class="btn-n">btn-n</button></li>
        <li>btn-m <i class="fa-solid fa-arrow-right"></i> Վերևից և ներքևից 10px աջից և ձախից 40px
            ներքին hեռավորություն(padding) <button class="btn-m">btn-m</button></li>
        <li>btn-l <i class="fa-solid fa-arrow-right"></i> Վերևից և ներքևից 15px աջից և ձախից 50px
            ներքին hեռավորություն(padding) <button class="btn-l">btn-l</button></li>
        <br>
        <li>btn <i class="fa-solid fa-arrow-right"></i> Վերևից և ներքևից 8px աջից և ձախից 30px
            ներքին hեռավորություն(padding), նարնջագույն <button class="btn">btn</button></li>
        <li>btn-cr <i class="fa-solid fa-arrow-right"></i> Վերևից և ներքևից 8px աջից և ձախից 30px
            ներքին hեռավորություն(padding), կարմիր <button class="btn-cr">btn-cr</button></li>
        <li>btn-cb <i class="fa-solid fa-arrow-right"></i> Վերևից և ներքևից 8px աջից և ձախից 30px
            ներքին hեռավորություն(padding), կապույտ <button class="btn-cb">btn-cb</button></li>
        <li>btn-cg <i class="fa-solid fa-arrow-right"></i> Վերևից և ներքևից 8px աջից և ձախից 30px
            ներքին hեռավորություն(padding), կանաչ <button class="btn-cg">btn-cg</button></li>
        <li>btn-c0 <i class="fa-solid fa-arrow-right"></i> Վերևից և ներքևից 8px աջից և ձախից 30px
            ներքին hեռավորություն(padding), սև <button class="btn-c0">btn-c0</button></li>
        <li>btn-cf <i class="fa-solid fa-arrow-right"></i> Վերևից և ներքևից 8px աջից և ձախից 30px
            ներքին hեռավորություն(padding), սպիտակ <button class="btn-cf">btn-cf</button></li>
        <br>
        <li>btn-sky <i class="fa-solid fa-arrow-right"></i> Վերևից և ներքևից 8px աջից և ձախից 30px
            ներքին hեռավորություն(padding), կապույտ և մանուշակակգույն gradient <button class="btn-sky">btn-sky</button></li>
        <li>btn-fier <i class="fa-solid fa-arrow-right"></i> Վերևից և ներքևից 8px աջից և ձախից 30px
            ներքին hեռավորություն(padding), կարմիր և նարնջագույն gradient <button class="btn-fier">btn-fier</button></li>
        <li>btn-forest <i class="fa-solid fa-arrow-right"></i> Վերևից և ներքևից 8px աջից և ձախից 30px
            ներքին hեռավորություն(padding), կանաչի 2 երանգներով gradient <button class="btn-forest">btn-forest</button></li>
        <li>btn-sea <i class="fa-solid fa-arrow-right"></i> Վերևից և ներքևից 8px աջից և ձախից 30px
            ներքին hեռավորություն(padding), կապույտի 2 երանգներով gradient կենտրոնացված դեպի կենտրոն <button class="btn-sea">btn-sea</button></li>
    </ul>`

    document.querySelector('#mm').innerHTML = 
    `<h3>Մոբայլ Մենյու</h3>
    <p>Այստեղ բոլոր մոբայլ մենյուները scroll լինելուց անհետանում են</p>
    <ul>
        <li>mobile-open <i class="fa-solid fa-arrow-right"></i> Սա այն կոճակն է որը պետք է բացի մենյուն,
        այս կլասին անվանումը տվեք <span><</span>div> թեգին։ / Հիմնական տեսքը <div class="mobile-open"></div></li>
        <li>mobile-open bars-short <i class="fa-solid fa-arrow-right"></i> Այլ տարբերակ <div class="mobile-open bars-short"></div></li>
        <li>mobile-open bars-filter <i class="fa-solid fa-arrow-right"></i> Այլ տարբերակ <div class="mobile-open bars-filter"></div></li>
        <li>mobile-open bars-stag <i class="fa-solid fa-arrow-right"></i> Այլ տարբերակ <div class="mobile-open bars-stag"></div></li>
        <p>Կոճակնորն ունեն սկզբնական սև գույն որը կարող եք փոխել գրելով սա css ֆայլում <mark>.mobile-open div{background: #fff;}</mark></p>
        <br>
        <li>mobile-close <i class="fa-solid fa-arrow-right"></i> Սա մենյուն փակող կոճակն է <div class="mobile-close"></div></li>
        <p>Այն սկզբնական սև գույն որը կարող եք փոխել գրելով սա css ֆայլում <mark>.mobile-close div{background: #fff;}</mark></p>
        <br>
        <li>mobile-menu <i class="fa-solid fa-arrow-right"></i> Սա մոբայլ մենյուի կմախքն է</li>
    </ul>
    <br>
    <h3>Ինչպես հավաքել մոբայլ մենյու</h3>
    <p>mobile-open բլոկը կարող եք տաղադրեք այնտեղ որտեղ ուզում եք։</p>
    <div class="mob-ex">
       <span><</span><a>div <b>class="mobile-open"</b> <span>></span><span><</span><a>/div</a><span>></span>
       <br><br>
       <span><</span><a>div</a> <b>class="mobile-menu"</b><span>></span><br>
       <span style="margin-left: 20px;"><</span><a>div</a> <b>class="mobile-close"</b><span>></span><span><</span><a>/div</a><span>></span><br>
       <span style="margin-left: 30px;"><</span><a>ul</a><span>></span><br>
       <span style="margin-left: 40px;"><</span><a>li</a><span>></span><span><</span><a>a</a> <b>href=""</b><span>></span>Link 1<span>></span><span><</span><a>/li</a><span>></span><br>
       <span style="margin-left: 40px;"><</span><a>li</a><span>></span><span><</span><a>a</a> <b>href=""</b><span>></span>Link 2<span>></span><span><</span><a>/li</a><span>></span><br>
       <span style="margin-left: 40px;"><</span><a>li</a><span>></span><span><</span><a>a</a> <b>href=""</b><span>></span>Link 3<span>></span><span><</span><a>/li</a><span>></span><br>
       <span style="margin-left: 40px;"><</span><a>li</a><span>></span><span><</span><a>a</a> <b>href=""</b><span>></span>Link 4<span>></span><span><</span><a>/li</a><span>></span><br>
       <span style="margin-left: 40px;"><</span><a>li</a><span>></span><span><</span><a>a</a> <b>href=""</b><span>></span>Link 5<span>></span><span><</span><a>/li</a><span>></span><br>
       <span style="margin-left: 40px;"><</span><a>li</a><span>></span><span><</span><a>a</a> <b>href=""</b><span>></span>Link 6<span>></span><span><</span><a>/li</a><span>></span><br>
       <span style="margin-left: 30px;"><</span><a>ul</a><span>></span><br>
       <span><</span><a>/div</a><span>></span><br>
       <br>
       <br>
       <video src="assets/video/mobmenu.mp4" autoplay loop muted></video>
    </div>
    <br>
    <h3>Մոբայ մենյու տարբերակ 2</h3>
    <p>Այստեղ թվերի փոխարեն ցանկալի է icon-ներ տեղադրել</p>
    <div class="mob-ex">
        <span><</span><a>div</a> <b>class="mobile-menu-cr"</b><span>></span><br>
            <span><</span><a>div</a> <b>class="mm-cr-logo"</b><span>></span><span><</span><a>/div</a><span>></span><br>
                <span style="margin-left: 30px;"><</span><a>ul</a><span>></span><br>
                <span style="margin-left: 40px;"><</span><a>li</a><span>></span><span><</span><a>a</a> <b>href=""</b><span>></span>1<span>></span><span><</span><a>/li</a><span>></span><br>
                <span style="margin-left: 40px;"><</span><a>li</a><span>></span><span><</span><a>a</a> <b>href=""</b><span>></span>2<span>></span><span><</span><a>/li</a><span>></span><br>
                <span style="margin-left: 40px;"><</span><a>li</a><span>></span><span><</span><a>a</a> <b>href=""</b><span>></span>3<span>></span><span><</span><a>/li</a><span>></span><br>
                <span style="margin-left: 40px;"><</span><a>li</a><span>></span><span><</span><a>a</a> <b>href=""</b><span>></span>4<span>></span><span><</span><a>/li</a><span>></span><br>
                <span style="margin-left: 40px;"><</span><a>li</a><span>></span><span><</span><a>a</a> <b>href=""</b><span>></span>5<span>></span><span><</span><a>/li</a><span>></span><br>
                <span style="margin-left: 40px;"><</span><a>li</a><span>></span><span><</span><a>a</a> <b>href=""</b><span>></span>6<span>></span><span><</span><a>/li</a><span>></span><br>
                <span style="margin-left: 30px;"><</span><a>ul</a><span>></span><br>
            <span><</span><a>/div</a><span>></span><br>
            <br><br>
            <video src="assets/video/mobmenu2.mp4" autoplay loop muted></video>
    </div>`

    document.querySelector('.p').innerHTML = 
    `<a href="#ab">
    <p>Caster-ի Մասին</p>
        </a>
        <a href="#lk">
            <p>Հղումներ</p>
        </a>
        <a href="#code" id="code-but">
            <p>Կոդերը</p>
        </a>
        <div class="ul">
            <ul>
                <li><div></div><a href="#cont">Կոնտեյներ</a></li>
                <li><div></div><a href="#flex">FlexBox</a></li>
                <li><div></div><a href="#hav">Հավասրեցում</a></li>
                <li><div></div><a href="#hx">Հղումներ</a></li>
                <li><div></div><a href="#bt">Կոճակներ</a></li>
                <li><div></div><a href="#mm">Մոբայլ Մենյու</a></li>
            </ul>
        </div>
        <a href="">
            <p>Գլխավոր Էջ</p>
        </a>`

    document.querySelector('.language-changer').innerHTML = 
    `<div class="items">
    <img onclick="arm()" src="assets/images/language/armenia.png" alt="armenia">
    <img onclick="rus()" src="assets/images/language/russia.png" alt="rusia">
    <img onclick="usa()" src="assets/images/language/united-states.png" alt="usa">
    </div>`
}


function rus(){
    document.querySelector('.title').innerHTML = 
    `<h1>Caster</h1>
    <p>Первый армянский CSS и JS фреймворк</p>`

    document.querySelector('#ab').innerHTML = 
    `<h2>Что такое Caster фремворк</h2>
    <p>Caster-Первый армянский фреймворк, который сокращает ваш CSS и JS-код. 
    Он работает по следующей логике: создан специальный класс имена которые выполняют различные функции 
    вы вставляете линк ссылки Caster в свой HTML-файл и даете своим блокам имена этих классов.</p>`

    document.querySelector('#lk').innerHTML = 
    `<h2>Как связать Caster с файлом HTML</h2>
    <p>Есть 2 важных файла которые нужно прикрепить к HTML один-это CSS другой JS, без их добавления ничего не получится</p>
    <h3>CSS</h3>
        <p>Это скопировать(copy), чтобы вставить HTML файл <span><</span>head<span>></span> в теге</p>
                <div class="cdn">
                    <p id="css-cdn">
                        <span><</span><a>link</a> <b>rel</b>="<c>stylesheet</c>" <b>href</b>="<c>https://gormkrtchyann.github.io/caster/cdn/caster.css</c>"<span>></span>
                    </p>
                    <button id="css-copy">Copy<i class="fa-solid fa-check"></i></button>
                </div>
                <h3>JS</h3>
                <p>Это скопировать (копировать), чтобы вставить HTML файл <span><</span>body<span>></span> тегов</p>
                <div class="cdn cdn2">
                    <p id="js-cdn">
                        <span><</span><a>script</a> <b>src</b>="<c>https://gormkrtchyann.github.io/caster/cdn/caster.js</c>"<span>></span><span><</span><a>/script</a><span>></span>
                    </p>
                    <button id="js-copy">Copy<i class="fa-solid fa-check"></i></button>
                </div>`
    
    document.querySelector('#codes').innerHTML = 
    `<h2>Кодовые Имена</h2>`

    document.querySelector('#cont').innerHTML =
    `<h3>Container</h3>
    <ul>
        <li>cont <i class="fa-solid fa-arrow-right"></i> Ширина 95%, расстояние от верхней и нижней сторон 30px, выровненный центр</li>
        <li>cont-s <i class="fa-solid fa-arrow-right"></i> Ширина 80%, расстояние от верхней и нижней сторон 30px, выровненный центр</li>
        <li>cont-m <i class="fa-solid fa-arrow-right"></i> Ширина 90%, расстояние от верхней и нижней сторон 30px, выровненный центр</li>
        <br>
        <li>cont-x <i class="fa-solid fa-arrow-right"></i> Ширина 0%, расстояние от верхней и нижней сторон 30px, выровненный центр</li>
        <li>cont-xs <i class="fa-solid fa-arrow-right"></i> Ширина 0%, расстояние от верхней и нижней сторон 10px, выровненный центр</li>
        <li>cont-xm <i class="fa-solid fa-arrow-right"></i> Ширина 0%, расстояние от верхней и нижней сторон 20px, выровненный центр</li>
        <br>
        <li>cont-y <i class="fa-solid fa-arrow-right"></i> Ширина 95%, расстояние от верхней и нижней сторон 0px, выровненный центр</li>
        <li>cont-ys <i class="fa-solid fa-arrow-right"></i> Ширина 80%, расстояние от верхней и нижней сторон 0px, выровненный центр</li>
        <li>cont-ym <i class="fa-solid fa-arrow-right"></i> Ширина 90%, расстояние от верхней и нижней сторон 0px, выровненный центр</li>
    </ul>`

    document.querySelector('#flex').innerHTML = 
    `<h3>FlexBox</h3>
    <ul>
        <li>flex <i class="fa-solid fa-arrow-right"></i> display: flex</li>
        <br>
        <li>jc-fs <i class="fa-solid fa-arrow-right"></i> justify-content: flex-start, афтомат display: flex</li>
        <li>jc-fe <i class="fa-solid fa-arrow-right"></i> justify-content: flex-end, афтомат display: flex</li>
        <li>jc-c <i class="fa-solid fa-arrow-right"></i> justify-content: center, афтомат display: flex</li>
        <li>jc-sb <i class="fa-solid fa-arrow-right"></i> justify-content: space-between, афтомат display: flex</li>
        <li>jc-sa <i class="fa-solid fa-arrow-right"></i> justify-content: space-around, афтомат display: flex</li>
        <li>jc-se <i class="fa-solid fa-arrow-right"></i> justify-content: space-evenly, афтомат display: flex</li>
        <br>
        <li>fd-r <i class="fa-solid fa-arrow-right"></i> flex-direction: row, афтомат display: flex</li>
        <li>fd-rr <i class="fa-solid fa-arrow-right"></i> flex-direction: row-reverse, афтомат display: flex</li>
        <li>fd-c <i class="fa-solid fa-arrow-right"></i> flex-direction: column, афтомат display: flex</li>
        <li>fd-cr <i class="fa-solid fa-arrow-right"></i> flex-direction: column-reverse, афтомат display: flex</li>
        <br>
        <li>fw-nw <i class="fa-solid fa-arrow-right"></i> flex-wrap: nowrap, афтомат display: flex</li>
        <li>fw-w <i class="fa-solid fa-arrow-right"></i> flex-wrap: wrap, афтомат display: flex</li>
        <li>fw-wr <i class="fa-solid fa-arrow-right"></i> flex-wrap: wrap-reverse, афтомат display: flex</li>
        <br>
        <li>ai-s <i class="fa-solid fa-arrow-right"></i> align-items: stretch, афтомат display: flex</li>
        <li>ai-c <i class="fa-solid fa-arrow-right"></i> align-items: center, афтомат display: flex</li>
        <li>ai-fs <i class="fa-solid fa-arrow-right"></i> align-items: flex-start, афтомат display: flex</li>
        <li>ai-fe <i class="fa-solid fa-arrow-right"></i> align-items: flex-end, афтомат display: flex</li>
        <li>ai-b <i class="fa-solid fa-arrow-right"></i> align-items: baseline, афтомат display: flex</li>
        <br>
        <li>ac-s <i class="fa-solid fa-arrow-right"></i> align-content: stretch, афтомат display: flex</li>
        <li>ac-fs <i class="fa-solid fa-arrow-right"></i> align-content: flex-start, афтомат display: flex</li>
        <li>ac-fe <i class="fa-solid fa-arrow-right"></i> align-content: flex-end, афтомат display: flex</li>
        <li>ac-c <i class="fa-solid fa-arrow-right"></i> align-content: center, афтомат display: flex</li>
        <li>ac-sb <i class="fa-solid fa-arrow-right"></i> align-content: space-between, афтомат display: flex</li>
        <li>ac-sa <i class="fa-solid fa-arrow-right"></i> align-content: space-around, афтомат display: flex</li>
        <li>ac-se <i class="fa-solid fa-arrow-right"></i> align-content: space-evenly, афтомат display: flex</li>
    </ul>`


    document.querySelector('#hav').innerHTML = 
    `<h3>Выравнивание</h3>
    <ul>
        <li>vhc <i class="fa-solid fa-arrow-right"></i> выравнивает середину прямой и горизонтальный но когда контент должен быть в центре экрана</li>
        <li>dfc-x <i class="fa-solid fa-arrow-right"></i> выравнивает середину прямой и горизонтальный и блоки в нем расположены горизонтально</li>
        <li>dfc-y <i class="fa-solid fa-arrow-right"></i> выравнивает середину прямой и горизонтальный и блоки в ней располагаются в направлении</li>
    </ul>`


    document.querySelector('#hx').innerHTML = 
    `<h3>Ссылки</h3>
    <ul>
        <li>al <i class="fa-solid fa-arrow-right"></i> удаляет блики и делает цвет черным</li>
    </ul>`

    document.querySelector('#bt').innerHTML = 
    `<h3>Кнопки</h3>
    <p>Все кнопки получают cursor: pointer функция, padding, :hover, тень(shadow)</p>
    <ul>
        <li>btn-n <i class="fa-solid fa-arrow-right"></i> Внутреннее расстояние(padding) 7px сверху и снизу справа и 30px слева <button class="btn-n">btn-n</button></li>
        <li>btn-m <i class="fa-solid fa-arrow-right"></i> Внутреннее расстояние(padding) 10px сверху и снизу справа и 40px слева <button class="btn-m">btn-m</button></li>
        <li>btn-l <i class="fa-solid fa-arrow-right"></i> Внутреннее расстояние(padding) 15px сверху и снизу справа и 50px слева <button class="btn-l">btn-l</button></li>
        <br>
        <li>btn <i class="fa-solid fa-arrow-right"></i> Внутреннее расстояние(padding) 8px сверху и снизу справа и 30px слева, оранжевый <button class="btn">btn</button></li>
        <li>btn-cr <i class="fa-solid fa-arrow-right"></i> Внутреннее расстояние(padding) 8px сверху и снизу справа и 30px слева, красный <button class="btn-cr">btn-cr</button></li>
        <li>btn-cb <i class="fa-solid fa-arrow-right"></i> Внутреннее расстояние(padding) 8px сверху и снизу справа и 30px слева, синий <button class="btn-cb">btn-cb</button></li>
        <li>btn-cg <i class="fa-solid fa-arrow-right"></i> Внутреннее расстояние(padding) 8px сверху и снизу справа и 30px слева, зеленый <button class="btn-cg">btn-cg</button></li>
        <li>btn-c0 <i class="fa-solid fa-arrow-right"></i> Внутреннее расстояние(padding) 8px сверху и снизу справа и 30px слева, черный <button class="btn-c0">btn-c0</button></li>
        <li>btn-cf <i class="fa-solid fa-arrow-right"></i> Внутреннее расстояние(padding) 8px сверху и снизу справа и 30px слева, белый <button class="btn-cf">btn-cf</button></li>
        <br>
        <li>btn-sky <i class="fa-solid fa-arrow-right"></i> Внутреннее расстояние(padding) 8px сверху и снизу справа и 30px слева, синий и фиолетовый gradient <button class="btn-sky">btn-sky</button></li>
        <li>btn-fier <i class="fa-solid fa-arrow-right"></i> Внутреннее расстояние(padding) 8px сверху и снизу справа и 30px слева, красный и оранжевый gradient <button class="btn-fier">btn-fier</button></li>
        <li>btn-forest <i class="fa-solid fa-arrow-right"></i> Внутреннее расстояние(padding) 8px сверху и снизу справа и 30px слева, 2 оттенка зеленого gradient <button class="btn-forest">btn-forest</button></li>
        <li>btn-sea <i class="fa-solid fa-arrow-right"></i> Внутреннее расстояние(padding) 8px сверху и снизу справа и 30px слева, 2 оттенка синего gradient сосредоточено в центре <button class="btn-sea">btn-sea</button></li>
    </ul>`

    document.querySelector('#mm').innerHTML = 
    `<h3>Мобильное Меню</h3>
    <p>Здесь все мобильные меню scroll исчезают</p>
    <ul>
        <li>mobile-open <i class="fa-solid fa-arrow-right"></i> Это та кнопка, которая должна открыть меню, дайте этому классу имя в теге <span><</span>div>. / Основной вид <div class="mobile-open"></div></li>
        <li>mobile-open bars-short <i class="fa-solid fa-arrow-right"></i> Другой вариант <div class="mobile-open bars-short"></div></li>
        <li>mobile-open bars-filter <i class="fa-solid fa-arrow-right"></i> Другой вариант <div class="mobile-open bars-filter"></div></li>
        <li>mobile-open bars-stag <i class="fa-solid fa-arrow-right"></i> Другой вариант <div class="mobile-open bars-stag"></div></li>
        <p>Кнопка, которая имеет исходный черный цвет что вы можете изменить, написав это в файле css <mark>.mobile-open div{background: #fff;}</mark></p>
        <br>
        <li>mobile-close <i class="fa-solid fa-arrow-right"></i> Это кнопка закрытия меню <div class="mobile-close"></div></li>
        <p>В исходный черный цвет что вы можете изменить, написав это в файле css <mark>.mobile-close div{background: #fff;}</mark></p>
        <br>
        <li>mobile-menu <i class="fa-solid fa-arrow-right"></i> Это скелет мобильного меню</li>
    </ul>
    <br>
    <h3>Как собрать мобильное меню</h3>
    <p>mobile-open вы можете поставить блок там, где хотите.</p>
    <div class="mob-ex">
       <span><</span><a>div <b>class="mobile-open"</b> <span>></span><span><</span><a>/div</a><span>></span>
       <br><br>
       <span><</span><a>div</a> <b>class="mobile-menu"</b><span>></span><br>
       <span style="margin-left: 20px;"><</span><a>div</a> <b>class="mobile-close"</b><span>></span><span><</span><a>/div</a><span>></span><br>
       <span style="margin-left: 30px;"><</span><a>ul</a><span>></span><br>
       <span style="margin-left: 40px;"><</span><a>li</a><span>></span><span><</span><a>a</a> <b>href=""</b><span>></span>Link 1<span>></span><span><</span><a>/li</a><span>></span><br>
       <span style="margin-left: 40px;"><</span><a>li</a><span>></span><span><</span><a>a</a> <b>href=""</b><span>></span>Link 2<span>></span><span><</span><a>/li</a><span>></span><br>
       <span style="margin-left: 40px;"><</span><a>li</a><span>></span><span><</span><a>a</a> <b>href=""</b><span>></span>Link 3<span>></span><span><</span><a>/li</a><span>></span><br>
       <span style="margin-left: 40px;"><</span><a>li</a><span>></span><span><</span><a>a</a> <b>href=""</b><span>></span>Link 4<span>></span><span><</span><a>/li</a><span>></span><br>
       <span style="margin-left: 40px;"><</span><a>li</a><span>></span><span><</span><a>a</a> <b>href=""</b><span>></span>Link 5<span>></span><span><</span><a>/li</a><span>></span><br>
       <span style="margin-left: 40px;"><</span><a>li</a><span>></span><span><</span><a>a</a> <b>href=""</b><span>></span>Link 6<span>></span><span><</span><a>/li</a><span>></span><br>
       <span style="margin-left: 30px;"><</span><a>ul</a><span>></span><br>
       <span><</span><a>/div</a><span>></span><br>
       <br>
       <br>
       <video src="assets/video/mobmenu.mp4" autoplay loop muted></video>
    </div>
    <br>
    <h3>Мобай меню Вариант 2</h3>
    <p>Здесь вместо цифр желательно вставлять иконки</p>
    <div class="mob-ex">
        <span><</span><a>div</a> <b>class="mobile-menu-cr"</b><span>></span><br>
            <span><</span><a>div</a> <b>class="mm-cr-logo"</b><span>></span><span><</span><a>/div</a><span>></span><br>
                <span style="margin-left: 30px;"><</span><a>ul</a><span>></span><br>
                <span style="margin-left: 40px;"><</span><a>li</a><span>></span><span><</span><a>a</a> <b>href=""</b><span>></span>1<span>></span><span><</span><a>/li</a><span>></span><br>
                <span style="margin-left: 40px;"><</span><a>li</a><span>></span><span><</span><a>a</a> <b>href=""</b><span>></span>2<span>></span><span><</span><a>/li</a><span>></span><br>
                <span style="margin-left: 40px;"><</span><a>li</a><span>></span><span><</span><a>a</a> <b>href=""</b><span>></span>3<span>></span><span><</span><a>/li</a><span>></span><br>
                <span style="margin-left: 40px;"><</span><a>li</a><span>></span><span><</span><a>a</a> <b>href=""</b><span>></span>4<span>></span><span><</span><a>/li</a><span>></span><br>
                <span style="margin-left: 40px;"><</span><a>li</a><span>></span><span><</span><a>a</a> <b>href=""</b><span>></span>5<span>></span><span><</span><a>/li</a><span>></span><br>
                <span style="margin-left: 40px;"><</span><a>li</a><span>></span><span><</span><a>a</a> <b>href=""</b><span>></span>6<span>></span><span><</span><a>/li</a><span>></span><br>
                <span style="margin-left: 30px;"><</span><a>ul</a><span>></span><br>
            <span><</span><a>/div</a><span>></span><br>
            <br><br>
            <video src="assets/video/mobmenu2.mp4" autoplay loop muted></video>
    </div>`

    document.querySelector('.p').innerHTML = 
    `<a href="#ab">
    <p>О Caster</p>
        </a>
        <a href="#lk">
            <p>Ссылки</p>
        </a>
        <a href="#code" id="code-but">
            <p>Коды</p>
        </a>
        <div class="ul">
            <ul>
                <li><div></div><a href="#cont">Контейнер</a></li>
                <li><div></div><a href="#flex">FlexBox</a></li>
                <li><div></div><a href="#hav">Выравнивание</a></li>
                <li><div></div><a href="#hx">Ссылки</a></li>
                <li><div></div><a href="#bt">Кнопки</a></li>
                <li><div></div><a href="#mm">Мобильное Меню</a></li>
            </ul>
        </div>
        <a href="">
            <p>Главная Страница </p>
        </a>`

    document.querySelector('.language-changer').innerHTML = 
    `<div class="items">
    <img onclick="rus()" src="assets/images/language/russia.png" alt="rusia">
    <img onclick="arm()" src="assets/images/language/armenia.png" alt="armenia">
    <img onclick="usa()" src="assets/images/language/united-states.png" alt="usa">
    </div>`
}

function usa(){
    document.querySelector('.title').innerHTML = 
    `<h1>Caster</h1>
    <p>The first Armenian CSS and JS framework</p>`

    document.querySelector('#ab').innerHTML = 
    `<h2>What is Caster framework</h2>
    <p>Caster is the first Armenian framework that shortens your CSS and JS code. It works according to the following logic: 
    a special class has been created names that perform various functions, you insert the Caster link into your HTML file and give your blocks the names of these classes.</p>`

    document.querySelector('#lk').innerHTML = 
    `<h2>How to link Caster to an HTML file</h2>
    <p>There are 2 important files that need to be attached to HTML, one is CSS, the other is JS, without adding them nothing will work</p>
    <h3>CSS</h3>
        <p>This is a copy to paste the HTML file <span><</span>head<span>></span> in the tag</p>
                <div class="cdn">
                    <p id="css-cdn">
                        <span><</span><a>link</a> <b>rel</b>="<c>stylesheet</c>" <b>href</b>="<c>https://gormkrtchyann.github.io/caster/cdn/caster.css</c>"<span>></span>
                    </p>
                    <button id="css-copy">Copy<i class="fa-solid fa-check"></i></button>
                </div>
                <h3>JS</h3>
                <p>This is a copy to paste the HTML file <span><</span>body<span>></span> tags</p>
                <div class="cdn cdn2">
                    <p id="js-cdn">
                        <span><</span><a>script</a> <b>src</b>="<c>https://gormkrtchyann.github.io/caster/cdn/caster.js</c>"<span>></span><span><</span><a>/script</a><span>></span>
                    </p>
                    <button id="js-copy">Copy<i class="fa-solid fa-check"></i></button>
                </div>`
    
    document.querySelector('#codes').innerHTML = 
    `<h2>Code Names</h2>`

    document.querySelector('#cont').innerHTML =
    `<h3>Container</h3>
    <ul>
        <li>cont <i class="fa-solid fa-arrow-right"></i> Width 95%, distance from top and bottom sides 30px, aligned center</li>
        <li>cont-s <i class="fa-solid fa-arrow-right"></i> Width 80%, distance from top and bottom sides 30px, aligned center</li>
        <li>cont-m <i class="fa-solid fa-arrow-right"></i> Width 90%, distance from top and bottom sides 30px, aligned center</li>
        <br>
        <li>cont-x <i class="fa-solid fa-arrow-right"></i> Width 0%, distance from top and bottom sides 30px, aligned center</li>
        <li>cont-xs <i class="fa-solid fa-arrow-right"></i> Width 0%, distance from top and bottom sides 10px, aligned center</li>
        <li>cont-xm <i class="fa-solid fa-arrow-right"></i> Width 0%, distance from top and bottom sides 20px, aligned center</li>
        <br>
        <li>cont-y <i class="fa-solid fa-arrow-right"></i> Width 95%, distance from top and bottom sides 0px, aligned center</li>
        <li>cont-ys <i class="fa-solid fa-arrow-right"></i> Width 80%, distance from top and bottom sides 0px, aligned center</li>
        <li>cont-ym <i class="fa-solid fa-arrow-right"></i> Width 90%, distance from top and bottom sides 0px, aligned center</li>
    </ul>`

    document.querySelector('#flex').innerHTML = 
    `<h3>FlexBox</h3>
    <ul>
        <li>flex <i class="fa-solid fa-arrow-right"></i> display: flex</li>
        <br>
        <li>jc-fs <i class="fa-solid fa-arrow-right"></i> justify-content: flex-start, aftomat display: flex</li>
        <li>jc-fe <i class="fa-solid fa-arrow-right"></i> justify-content: flex-end, aftomat display: flex</li>
        <li>jc-c <i class="fa-solid fa-arrow-right"></i> justify-content: center, aftomat display: flex</li>
        <li>jc-sb <i class="fa-solid fa-arrow-right"></i> justify-content: space-between, aftomat display: flex</li>
        <li>jc-sa <i class="fa-solid fa-arrow-right"></i> justify-content: space-around, aftomat display: flex</li>
        <li>jc-se <i class="fa-solid fa-arrow-right"></i> justify-content: space-evenly, aftomat display: flex</li>
        <br>
        <li>fd-r <i class="fa-solid fa-arrow-right"></i> flex-direction: row, aftomat display: flex</li>
        <li>fd-rr <i class="fa-solid fa-arrow-right"></i> flex-direction: row-reverse, aftomat display: flex</li>
        <li>fd-c <i class="fa-solid fa-arrow-right"></i> flex-direction: column, aftomat display: flex</li>
        <li>fd-cr <i class="fa-solid fa-arrow-right"></i> flex-direction: column-reverse, aftomat display: flex</li>
        <br>
        <li>fw-nw <i class="fa-solid fa-arrow-right"></i> flex-wrap: nowrap, aftomat display: flex</li>
        <li>fw-w <i class="fa-solid fa-arrow-right"></i> flex-wrap: wrap, aftomat display: flex</li>
        <li>fw-wr <i class="fa-solid fa-arrow-right"></i> flex-wrap: wrap-reverse, aftomat display: flex</li>
        <br>
        <li>ai-s <i class="fa-solid fa-arrow-right"></i> align-items: stretch, aftomat display: flex</li>
        <li>ai-c <i class="fa-solid fa-arrow-right"></i> align-items: center, aftomat display: flex</li>
        <li>ai-fs <i class="fa-solid fa-arrow-right"></i> align-items: flex-start, aftomat display: flex</li>
        <li>ai-fe <i class="fa-solid fa-arrow-right"></i> align-items: flex-end, aftomat display: flex</li>
        <li>ai-b <i class="fa-solid fa-arrow-right"></i> align-items: baseline, aftomat display: flex</li>
        <br>
        <li>ac-s <i class="fa-solid fa-arrow-right"></i> align-content: stretch, aftomat display: flex</li>
        <li>ac-fs <i class="fa-solid fa-arrow-right"></i> align-content: flex-start, aftomat display: flex</li>
        <li>ac-fe <i class="fa-solid fa-arrow-right"></i> align-content: flex-end, aftomat display: flex</li>
        <li>ac-c <i class="fa-solid fa-arrow-right"></i> align-content: center, aftomat display: flex</li>
        <li>ac-sb <i class="fa-solid fa-arrow-right"></i> align-content: space-between, aftomat display: flex</li>
        <li>ac-sa <i class="fa-solid fa-arrow-right"></i> align-content: space-around, aftomat display: flex</li>
        <li>ac-se <i class="fa-solid fa-arrow-right"></i> align-content: space-evenly, aftomat display: flex</li>
    </ul>`


    document.querySelector('#hav').innerHTML = 
    `<h3>Alignment</h3>
    <ul>
        <li>vhc <i class="fa-solid fa-arrow-right"></i> aligns the middle vertical and horizontal but when the content should be in the center of the screen</li>
        <li>dfc-x <i class="fa-solid fa-arrow-right"></i> aligns the middle vertical and horizontal and the blocks in it are arranged horizontally</li>
        <li>dfc-y <i class="fa-solid fa-arrow-right"></i> aligns the middle vertical and horizontal and the blocks in it are arranged vertical</li>
    </ul>`


    document.querySelector('#hx').innerHTML = 
    `<h3>Links</h3>
    <ul>
        <li>al <i class="fa-solid fa-arrow-right"></i> removes decoretion and turns the color black</li>
    </ul>`

    document.querySelector('#bt').innerHTML = 
    `<h3>Buttons</h3>
    <p>All buttons get cursor: pointer function, padding, :hover, shadow</p>
    <ul>
        <li>btn-n <i class="fa-solid fa-arrow-right"></i> Padding is 7px on the top and bottom 30px on the left and right <button class="btn-n">btn-n</button></li>
        <li>btn-m <i class="fa-solid fa-arrow-right"></i> Padding is 10px on the top and bottom 40px on the left and right <button class="btn-m">btn-m</button></li>
        <li>btn-l <i class="fa-solid fa-arrow-right"></i> Padding is 15px on the top and bottom 50px on the left and right <button class="btn-l">btn-l</button></li>
        <br>
        <li>btn <i class="fa-solid fa-arrow-right"></i> Padding is 8px on the top and bottom 30px on the left and right, orange <button class="btn">btn</button></li>
        <li>btn-cr <i class="fa-solid fa-arrow-right"></i> Padding is 8px on the top and bottom 30px on the left and right, red <button class="btn-cr">btn-cr</button></li>
        <li>btn-cb <i class="fa-solid fa-arrow-right"></i> Padding is 8px on the top and bottom 30px on the left and right, blue <button class="btn-cb">btn-cb</button></li>
        <li>btn-cg <i class="fa-solid fa-arrow-right"></i> Padding is 8px on the top and bottom 30px on the left and right, green <button class="btn-cg">btn-cg</button></li>
        <li>btn-c0 <i class="fa-solid fa-arrow-right"></i> Padding is 8px on the top and bottom 30px on the left and right, black <button class="btn-c0">btn-c0</button></li>
        <li>btn-cf <i class="fa-solid fa-arrow-right"></i> Padding is 8px on the top and bottom 30px on the left and right, white <button class="btn-cf">btn-cf</button></li>
        <br>
        <li>btn-sky <i class="fa-solid fa-arrow-right"></i> Padding is 8px on the top and bottom 30px on the left and right, blue and purple gradient <button class="btn-sky">btn-sky</button></li>
        <li>btn-fier <i class="fa-solid fa-arrow-right"></i> Padding is 8px on the top and bottom 30px on the left and right, red and orange gradient <button class="btn-fier">btn-fier</button></li>
        <li>btn-forest <i class="fa-solid fa-arrow-right"></i> Padding is 8px on the top and bottom 30px on the left and right, 2 shades of green gradient <button class="btn-forest">btn-forest</button></li>
        <li>btn-sea <i class="fa-solid fa-arrow-right"></i> Padding is 8px on the top and bottom 30px on the left and right, 2 shades of blue gradient concentrated in the center <button class="btn-sea">btn-sea</button></li>
    </ul>`

    document.querySelector('#mm').innerHTML = 
    `<h3>Mobile Menu</h3>
    <p>Here all mobile scroll menus disappear</p>
    <ul>
        <li>mobile-open <i class="fa-solid fa-arrow-right"></i> This is the button that should open the menu, give this class a name in the <span><</span>div> tag. / Main view <div class="mobile-open"></div></li>
        <li>mobile-open bars-short <i class="fa-solid fa-arrow-right"></i> Another option <div class="mobile-open bars-short"></div></li>
        <li>mobile-open bars-filter <i class="fa-solid fa-arrow-right"></i> Another option <div class="mobile-open bars-filter"></div></li>
        <li>mobile-open bars-stag <i class="fa-solid fa-arrow-right"></i> Another option <div class="mobile-open bars-stag"></div></li>
        <p>A button that has the original black color that you can change by writing it in a css file <mark>.mobile-open div{background: #fff;}</mark></p>
        <br>
        <li>mobile-close <i class="fa-solid fa-arrow-right"></i> This is the menu close button <div class="mobile-close"></div></li>
        <p>In the original black color that you can change by writing it in a css file <mark>.mobile-close div{background: #fff;}</mark></p>
        <br>
        <li>mobile-menu <i class="fa-solid fa-arrow-right"></i> This is the skeleton of the mobile menu</li>
    </ul>
    <br>
    <h3>How to build a mobile menu</h3>
    <p>mobile-open you can put the block where you want.</p>
    <div class="mob-ex">
       <span><</span><a>div <b>class="mobile-open"</b> <span>></span><span><</span><a>/div</a><span>></span>
       <br><br>
       <span><</span><a>div</a> <b>class="mobile-menu"</b><span>></span><br>
       <span style="margin-left: 20px;"><</span><a>div</a> <b>class="mobile-close"</b><span>></span><span><</span><a>/div</a><span>></span><br>
       <span style="margin-left: 30px;"><</span><a>ul</a><span>></span><br>
       <span style="margin-left: 40px;"><</span><a>li</a><span>></span><span><</span><a>a</a> <b>href=""</b><span>></span>Link 1<span>></span><span><</span><a>/li</a><span>></span><br>
       <span style="margin-left: 40px;"><</span><a>li</a><span>></span><span><</span><a>a</a> <b>href=""</b><span>></span>Link 2<span>></span><span><</span><a>/li</a><span>></span><br>
       <span style="margin-left: 40px;"><</span><a>li</a><span>></span><span><</span><a>a</a> <b>href=""</b><span>></span>Link 3<span>></span><span><</span><a>/li</a><span>></span><br>
       <span style="margin-left: 40px;"><</span><a>li</a><span>></span><span><</span><a>a</a> <b>href=""</b><span>></span>Link 4<span>></span><span><</span><a>/li</a><span>></span><br>
       <span style="margin-left: 40px;"><</span><a>li</a><span>></span><span><</span><a>a</a> <b>href=""</b><span>></span>Link 5<span>></span><span><</span><a>/li</a><span>></span><br>
       <span style="margin-left: 40px;"><</span><a>li</a><span>></span><span><</span><a>a</a> <b>href=""</b><span>></span>Link 6<span>></span><span><</span><a>/li</a><span>></span><br>
       <span style="margin-left: 30px;"><</span><a>ul</a><span>></span><br>
       <span><</span><a>/div</a><span>></span><br>
       <br>
       <br>
       <video src="assets/video/mobmenu.mp4" autoplay loop muted></video>
    </div>
    <br>
    <h3>Mobile Menu Option 2</h3>
    <p>Here, instead of numbers, it is advisable to insert icons</p>
    <div class="mob-ex">
        <span><</span><a>div</a> <b>class="mobile-menu-cr"</b><span>></span><br>
            <span><</span><a>div</a> <b>class="mm-cr-logo"</b><span>></span><span><</span><a>/div</a><span>></span><br>
                <span style="margin-left: 30px;"><</span><a>ul</a><span>></span><br>
                <span style="margin-left: 40px;"><</span><a>li</a><span>></span><span><</span><a>a</a> <b>href=""</b><span>></span>1<span>></span><span><</span><a>/li</a><span>></span><br>
                <span style="margin-left: 40px;"><</span><a>li</a><span>></span><span><</span><a>a</a> <b>href=""</b><span>></span>2<span>></span><span><</span><a>/li</a><span>></span><br>
                <span style="margin-left: 40px;"><</span><a>li</a><span>></span><span><</span><a>a</a> <b>href=""</b><span>></span>3<span>></span><span><</span><a>/li</a><span>></span><br>
                <span style="margin-left: 40px;"><</span><a>li</a><span>></span><span><</span><a>a</a> <b>href=""</b><span>></span>4<span>></span><span><</span><a>/li</a><span>></span><br>
                <span style="margin-left: 40px;"><</span><a>li</a><span>></span><span><</span><a>a</a> <b>href=""</b><span>></span>5<span>></span><span><</span><a>/li</a><span>></span><br>
                <span style="margin-left: 40px;"><</span><a>li</a><span>></span><span><</span><a>a</a> <b>href=""</b><span>></span>6<span>></span><span><</span><a>/li</a><span>></span><br>
                <span style="margin-left: 30px;"><</span><a>ul</a><span>></span><br>
            <span><</span><a>/div</a><span>></span><br>
            <br><br>
            <video src="assets/video/mobmenu2.mp4" autoplay loop muted></video>
    </div>`

    document.querySelector('.p').innerHTML = 
    `<a href="#ab">
    <p>About Caster</p>
        </a>
        <a href="#lk">
            <p>Links</p>
        </a>
        <a href="#code" id="code-but">
            <p>Codes</p>
        </a>
        <div class="ul">
            <ul>
                <li><div></div><a href="#cont">Container</a></li>
                <li><div></div><a href="#flex">FlexBox</a></li>
                <li><div></div><a href="#hav">Alignment</a></li>
                <li><div></div><a href="#hx">Links</a></li>
                <li><div></div><a href="#bt">Buttons</a></li>
                <li><div></div><a href="#mm">Mobile Menu</a></li>
            </ul>
        </div>
        <a href="">
            <p>Home Page</p>
        </a>`

    document.querySelector('.language-changer').innerHTML = 
    `<div class="items">
    <img onclick="usa()" src="assets/images/language/united-states.png" alt="usa">
    <img onclick="rus()" src="assets/images/language/russia.png" alt="rusia">
    <img onclick="arm()" src="assets/images/language/armenia.png" alt="armenia">
    </div>`
}