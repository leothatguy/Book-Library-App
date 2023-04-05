let myLibrary = [];

function Book(name, author , pages, read){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(name, author, pages, read){
    // ccode to add book to the library
    // create users input in objects
    const newBook = new Book(name, author, pages, read );
    // store object in array
    myLibrary.push(newBook);
}
