import { Books } from "./BOOKS.js"
import { all_books } from "./library.js"
import { words } from "./quotes.js"

const quote_container = document.querySelector(".quote")
const books_container = document.querySelector(".books")

function addQuote(){
    const final_quote = words[Math.floor(Math.random() * words.length)].quote
    quote_container.innerHTML = final_quote 
}

addQuote()

const b = new Books(all_books)

b.appendTo(books_container)


// change the theme
//const i = document.querySelector(".theme .light i")

/*
document.querySelector(".theme").addEventListener("click",()=>{
    i.classList.toggle("fa-sun")
    i.classList.toggle("fa-moon")
    document.body.classList.toggle('dark-theme-variables')
})
*/

// -----------choose a category

document.querySelectorAll(".filter div").forEach(btn => {
    btn.addEventListener("click", e => toggleFilter(e))
})

function toggleFilter(e){
    const filter = e.currentTarget.getAttribute("data-filter")
    e.currentTarget.parentElement.querySelector(".active").classList.remove("active")
    e.currentTarget.classList.add("active")

    document.querySelectorAll(".hide-book").forEach(ele =>{
        ele.classList.remove("hide-book")
    })

    if(filter === "fr"){
        document.querySelectorAll(".eng").forEach(el =>{
            el.classList.add("hide-book")
        }) 
       }

    else if(filter === "eng"){
        document.querySelectorAll(".Fr").forEach(el =>{
            el.classList.add("hide-book")
        })
    }
    
}









