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

listBtn1.addEventListener("click", ()=>
{
    list1.classList.toggle("open");
    list_back.classList.toggle("open");
});
listBtn2.addEventListener("click", ()=>
{
    list2.classList.toggle("open");
    list_back.classList.toggle("open");
});
listBtn3.addEventListener("click", ()=>
{
    list3.classList.toggle("open");
    list_back.classList.toggle("open");
});
listCloseBtn1.addEventListener("click", ()=>
{
    list1.classList.toggle("open");
    list_back.classList.toggle("open");
});
listCloseBtn2.addEventListener("click", ()=>
{
    list2.classList.toggle("open");
    list_back.classList.toggle("open");
});
listCloseBtn3.addEventListener("click", ()=>
{
    list3.classList.toggle("open");
    list_back.classList.toggle("open");
});