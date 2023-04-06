import { all_books } from "./library.js"

/**
 * I get the id of the book which was parse in the urls
 * @returns integer
 */

function idBook(){
    const urlParam = new URLSearchParams(window.location.search)

    const id = urlParam.get("id")

    return parseInt(id)
}

// find the book with the book with the current id
const currentBook = all_books.find(book => book.id === idBook())

let global_title = currentBook.title

const getBookElement = document.querySelector(".book-section-container")

document.querySelector("title").innerText = global_title

getBookElement.innerHTML = `
    <span class="price">
        ${currentBook.price}
    </span>
    <div class="book-cover-container">
        <img src="./images/cover/${currentBook.book_cover}" alt="">
    </div>
    <div class="book-info-container">
        <h3>${global_title}</h3>
        <div class="btns-group">
            <a class="btn-read hide" href="./book/${currentBook.book_link}" target="_blank">Lire</a>
            <a class="btn-buy hide" href="https://api.whatsapp.com/send?phone=50944308634&text=Salut%20Iziliv,%20Je%20suis%20int%C3%A9ress%C3%A9%20par%20le%20livre:%20${global_title}%20">Achter</a>
        </div>
        <h3>Description du livre</h3>
        <p class="description-book">
        ${currentBook.description}
        </p>
        <p><span class="book-author">auteur :</span> ${currentBook.author}</p>
        <p><span class="book-author">Langue :</span> ${currentBook.lang}</p>
    </div>

`



