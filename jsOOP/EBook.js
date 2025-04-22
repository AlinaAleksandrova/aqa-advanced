const Book = require('./Book');

class EBook extends Book {
    constructor(nameBook, authorBook, year, fileFormat) {
        super(nameBook, authorBook, year);
        this._fileFormat = fileFormat;
    }

    get fileFormat() {
        return this._fileFormat;
    }
    set fileFormat(value) {
        if (typeof value !== 'string') throw new Error('File format must be a string');
        this._fileFormat = this.fileFormat;
    }

    printInfo() {
        console.log(`Назва книги: ${this.nameBook}, Автор книги: ${this.authorBook}, Рік видання книги: ${this.year}, Формат: ${this.fileFormat}`)
    }

    static fromBook(bookInstance, format) {
        if (!bookInstance instanceof Book) throw new Error('Argument must be an instance of Book');
        return new EBook(bookInstance.nameBook, bookInstance.authorBook, bookInstance.year, format);
    }

}


module.exports = EBook;