const navToggler = document.querySelector(".toggler")
const navItem = document.querySelector(".nav-item")

navToggler.addEventListener("click", function(){

    navItem.classList.toggle("show-links")
})