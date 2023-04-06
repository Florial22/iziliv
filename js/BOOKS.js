import { createElement } from "./dom.js"

export class Books{
    // #id
    // #book title
    // book description
    // book cover
    // book link
    // book status : availible or not

    #books = []

    constructor(books){
        this.#books = books
    }

    appendTo(element){
        element.innerHTML = `
        <section class="french-books">
                
        </section>


        <section class="english-book">

        </section>
        `
        const french_books = document.querySelector(".french-books")

        for (let book of this.#books){
            const nb = new BookItem(book)
            nb.appendTo2(french_books)
        }
    }
}

class BookItem{

    bkdiv

    constructor(todo){
        const coverName = todo.book_cover
        const book_div = createElement("div",{
            class : "book-card"
        })

        const bookCover = createElement("div",{
            class : "book-cover"
        })

        const imgCover = createElement("img",{
            src: `./images/cover/${coverName}`,
            loading: "lazy"
        })

        bookCover.append(imgCover)

        const divInfo = createElement("div", {
            class : "info"
        })

        const linkInfo = createElement("a",{
            href: `book.html?id=${todo.id}`
        })

        divInfo.append(linkInfo)

        const title = createElement("h3")
        title.innerHTML = todo.title
        
        const description = createElement("p")
        description.innerHTML = `${todo.description.substring(0,100)}...`

        const author = createElement("p",{
            class: "author"
        })

        author.innerHTML = `<span class="user-icon"><i class="fa-solid fa-user"></i></span> ${todo.author}`

        linkInfo.append(title)
        linkInfo.append(description)
        linkInfo.append(author)
        book_div.append(bookCover)
        book_div.append(divInfo)
        this.bkdiv = book_div

    }

    appendTo2(element){
        element.append(this.bkdiv)
    }

//--- lien pour aller sur whatssap-- 
}