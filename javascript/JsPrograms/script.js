console.log("hello ,this is the first program of javascript ...");
console.log("I will smile(🥰) throughout this course ...")
alert("this is my learning journey ...")
//console.log(window)

class Book {
    static author = "REDDYSEKHAR";// static variable allocate seperate memory and we can't access through object
    constructor(title, price, no_pages) {
        this.title = title;
        this.price = price;
        this.numberOfPages = no_pages;
        //this.author = author;
    }
    updatePrice(newPrice) {// instance method
        this.price = newPrice;
    }
}
let JsBook = new Book('javascriptNotes', 250, 200);
console.log(JsBook);
console.log(Book.author);
JsBook.updatePrice(125);
console.log(JsBook);
let AboutMe = {
    name: "srsekhar",
    age: 21,
    learning: "javascript"
};
console.log(AboutMe);
console.log(typeof AboutMe);

let username = prompt("what is your name?");
console.log(`${username} taken by the pop-up window ...`); 