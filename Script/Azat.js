/*/ -------------> Script for lists  <------------- /*/

let body = document.body;
let list_back = document.querySelector(".list_back");
let list1 = document.querySelector(".list1");
let list2 = document.querySelector(".list2");
let list3 = document.querySelector(".list3");
let listBtn1 = document.querySelector("#abut1");
let listBtn2 = document.querySelector("#abut2");
let listBtn3 = document.querySelector("#abut3");
let listCloseBtn1 = document.querySelector(".lclose1");
let listCloseBtn2 = document.querySelector(".lclose2");
let listCloseBtn3 = document.querySelector(".lclose3");

console.log(listBtn1);
console.log(listBtn2);
console.log(listBtn3);
console.log(listCloseBtn1);
console.log(listCloseBtn2);
console.log(listCloseBtn3);

function disableScroll()
{
    let pagePosition = window.scrollY;
    body.classList.add("disable-scroll");
    body.dataset.position = pagePosition;
    body.style.top = -pagePosition + 'px';
}
function enableScroll()
{
    let pagePosition = parseInt(body.dataset.position, 10);
    body.style.top = 'auto';
    body.classList.remove("disable-scroll");    
    window.scroll({top: pagePosition, left: 0, behavior: "auto"});
    body.removeAttribute("data-position")
}

listBtn1.addEventListener("click", ()=>
{
    list1.classList.toggle("open");
    list_back.classList.toggle("open");

    disableScroll();
    e.currentTarge.style.pointerEvents = 'none';
    listCloseBtn1.style.pointerEvents = 'auto';
});
listBtn2.addEventListener("click", ()=>
{
    list2.classList.toggle("open");
    list_back.classList.toggle("open");

    disableScroll();
    e.currentTarge.style.pointerEvents = 'none';
    listCloseBtn1.style.pointerEvents = 'auto';
});
listBtn3.addEventListener("click", ()=>
{
    list3.classList.toggle("open");
    list_back.classList.toggle("open");

    disableScroll();
    e.currentTarge.style.pointerEvents = 'none';
    listCloseBtn1.style.pointerEvents = 'auto';
});
listCloseBtn1.addEventListener("click", ()=>
{
    list1.classList.toggle("open");
    list_back.classList.toggle("open");

    enableScroll();
    e.currentTarge.style.pointerEvents = 'none';
    listBtn1.style.pointerEvents = 'auto';
});
listCloseBtn2.addEventListener("click", ()=>
{
    list2.classList.toggle("open");
    list_back.classList.toggle("open");

    enableScroll();
    e.currentTarge.style.pointerEvents = 'none';
    listBtn1.style.pointerEvents = 'auto';
});
listCloseBtn3.addEventListener("click", ()=>
{
    list3.classList.toggle("open");
    list_back.classList.toggle("open");

    enableScroll();
    e.currentTarge.style.pointerEvents = 'none';
    listBtn1.style.pointerEvents = 'auto';
});






/*/ -------------> Script for scrolling  <------------- /*/

const scrollTo = document.querySelectorAll('a[href*="#"]');

for(let i of scrollTo)
{
    i.addEventListener("click", function(event)
    {
        event.preventDefault();
        const blockID = i.getAttribute('href')

        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}






/*/ -------------> Script for customize button  <------------- /*/

let customBtn = document.querySelector(".dash_back");
let theme_back = document.querySelector(".theme_back");

console.log(customBtn);

customBtn.addEventListener("click", ()=>
{
    theme_back.classList.toggle("open");
});






/*/ -------------> Script for themes changing  <------------- /*/

let changeBtn = document.querySelector(".change_btn");

if(!localStorage.theme){localStorage.theme = "dark"}
document.body.className = localStorage.theme

changeBtn.onclick = () => 
{
    document.body.classList.toggle("light")
    localStorage.theme = document.body.className || "dark"
}