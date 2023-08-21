    // NAVBAR TOGGLER  //
const navToggler = document.querySelector(".toggler")
const navItem = document.querySelector(".nav-item")

navToggler.addEventListener("click", function(){

    navItem.classList.toggle("show-links")
})

    // BUTTON (DISCOVER-MORE) TOGGLE //
const btnToggler = document.querySelector(".dropbtn")
const btnContent = document.querySelector(".dropdown-content")

btnToggler.addEventListener("click", function(){
    btnContent.classList.toggle("show-content")
})

    // ARRAY BUTTON PROCESS //

const consultation =[
    {
        id: 1,
        name: "Our process",
        plan: "free initial consultation",
        text: "One of our expert solicitors will contact you to understand your potential claims in further details and provide you with a free initial consultation"
    },
    {
        id: 1,
        name: "Our process",
        plan: "Classic lead consultation",
        text: "Our experts solicitors will follow up your claims in further details and provide you with a free and legal  initial guidance on how to proceed, leveraging on our firm."
    },
    {
        id: 1,
        name: "Our process",
        plan: "Premium Advanced consultation",
        text: "A team pf our solicitors will work with you to claim what is rightfully yours. No slacking until justice is prevailed and delivered"
    },
];
const phead = document.getElementById("p-head")
const psub = document.getElementById("p-sub")
const pdesc = document.getElementById("p-desc")

const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")

let currentItem = 0

window.addEventListener("DOMContentLoaded", function() {
    loadItem()
})
function loadItem (){
    const item = consultation[currentItem]
    phead.textContent = item.name
    psub.textContent = item.plan
    pdesc.textContent = item.text
}
prevBtn.addEventListener("click", function(){
    currentItem--
    if(currentItem < 0) {
        currentItem = consultation.length - 1
    }
    loadItem()
})
nextBtn.addEventListener("click", function(){
    currentItem++
    if(currentItem > consultation.length - 1) {
        currentItem = 0
    }
    loadItem()
})