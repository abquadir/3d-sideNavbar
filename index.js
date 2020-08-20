const hamburger = document.querySelector(".hamburger-menu")

const container = document.querySelector(".container")

hamburger.addEventListener("click",function(){
    container.classList.toggle("active")
})