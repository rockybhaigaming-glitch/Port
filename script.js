// portfolio filter

const buttons=document.querySelectorAll(".filters button")
const items=document.querySelectorAll(".portfolio-item")

buttons.forEach(button=>{

button.addEventListener("click",()=>{

document.querySelector(".active").classList.remove("active")
button.classList.add("active")

const filter=button.dataset.filter

items.forEach(item=>{

if(filter==="all" || item.classList.contains(filter)){
item.style.display="block"
}else{
item.style.display="none"
}

})

})

})
