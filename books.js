// Урок 2. Продвинутая работа с функциями и классами

// Задание 1
// Представьте, что у вас есть класс для управления библиотекой.В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

// Реализуйте геттер allBooks, который возвращает текущий список книг.

// Реализуйте метод addBook(title), который позволяет добавлять книгу в список.Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию.Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

// Реализуйте конструктор, который принимает начальный список книг(массив) в качестве аргумента.Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.


class Library {
    #books = [];

    constructor(books) {
        const arr = new Set(books);

        if (books.length !== arr.size) {
            throw new Error("Ошибка, имеются дубликаты")
        } else {
            this.#books = books;
        }
    }

    get allBooks() {
        return this.#books;
    }

    addBook(title) {

        // for (let i = 0; i <= this.#books.length; i++) {
        if (this.hasBook(title)) {
            throw  Error(`Книга ${title} уже есть в списке`);
        }

        this.#books.push(title);
    }
    removeBook(title) {
        for (let i = 0; i <= this.#books.length; i++) {
            if (this.#books[i] == title) {
                this.#books.splice(i, 1)
            }
        }

        return this.#books;
    }

    hasBook(title) {
        return this.#books.includes(title);
    }
}
let arrBooks = ["qwer", "123", "afafaf"]
let libBooks = new Library(arrBooks)
console.log(libBooks.allBooks);
// проверка добавления книги
console.log("Добавляем книгу")
libBooks.addBook("Книга1");
console.log(libBooks.allBooks);
console.log();

// проверка удаления книги, если она найдена в списке
console.log("Удаляем книгу")
libBooks.removeBook("123");
console.log(libBooks.allBooks);

// // Проверка наличия книги
console.log("Проверка наличия книги")
console.log(libBooks.hasBook("Книга1"));
console.log(libBooks.hasBook("Книга15"));

// //проверка добаления книги повторно    (блокирует дальнейший код, поэтому закоментила)
// console.log("Добавляем дубликат")
// libBooks.addBook("Книга1");
// console.log(libBooks.allBooks);

//Проверка на дубликаты в исходном массиве книг
console.log("Проверка на дубликаты в исходном массиве книг")
let l1 = new Library(["ddd", "aaa", "123", "333"]);
console.log(l1.allBooks)                                         // ошибки нет

let l2 = new Library(["ddd", "aaa", "123", "ddd"]);
console.log(l2.allBooks)                                         // выведет сообщение об  ошибке