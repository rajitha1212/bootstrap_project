//active nav bar
let nav=document.querySelector(".navigation-wrap");
window.onscroll=function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on");
    }
    else{
        nav.classList.remove("scroll-on");
    }
}
//nav hide
let navBar=document.querySelectorAll(".nav-link");
let navCollapse=document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(e){
    e.addEventListener("click",function(){
        navCollapse.classList.remove("show");
    })
})



function subEvent(e){
    e.preventDefaut()
}
function subBtn(){
    let fn=document.getElementById('validationDefault01').value;
// console.log(fn);
let ln=document.getElementById('validationDefault02').value;
let add=document.getElementById('addressId').value;
let phn=document.getElementById("validationDefault03").value;
let item=document.getElementById("validationDefault04").value;


    alert(`
    First Name: ${fn}
    Last Name: ${ln}
    Phone Number: ${phn}
    Address: ${add}
    You Selected: ${item}
    ----------------------------
    Your order is confirmed..!!!
    `)
}
function booking(){
    let n=prompt('enter your name:')
    let p=prompt('enter your phone number')
    let ad=prompt('enter your address:')
    alert(`
    your oreder is confirmed and 
    we will reach you within 1 hour
    at address:${ad}
    
    
    `)
}


