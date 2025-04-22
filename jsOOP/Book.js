class Book {
    constructor(nameBook, authorBook, year) {
        this._nameBook = nameBook;
        this._authorBook = authorBook;
        this._year = year;
    }

    get nameBook() {
        return this._nameBook;
    }

    get authorBook() {
        return this._authorBook;
    }

    get year() {
        return this._year;
    }

    set nameBook(value) {
        if (typeof value !== 'string') throw new Error('Title must be a string');
        this._nameBook = value;
    }

    set authorBook(value) {
        if (typeof value !== 'string') throw new Error('Title must be a string');
        this._authorBook = value;
    }

    set year(value) {
        if (typeof value !== 'number' || value < 0) throw new Error('Year must be a positive number');
        this._year = value;
    }

    static getOldestBook(books) {
        return books.reduce((oldest, current) => (current.year < oldest.year ? current : oldest));
    }
    printInfo() {
        console.log(`Назва книги: ${this.nameBook}, Автор книги: ${this.authorBook}, Рік видання книги: ${this.year}`);
    }
}

module.exports = Book;