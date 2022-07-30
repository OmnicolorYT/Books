const initialState = {
    books: {
        booksList: [{
            id: 0,
            name: "Добавь свою первую книгу!",
            author: "Даниил",
            publishingYear: "2022",
            publishing: "S&P",
            annotation: "Кликни по 'Добавить книгу', введи всю необходмиую информацию и добавь книгу!" +
                "Еще можешь пользоваться поиском, сортировкой, а так же редактировать уже существующие книги!",
            state: "have",
            genre: "мануал",
            pagesCount: "1"
        }],
        newBook: {
            id: '',
            name: "",
            author: "",
            publishingYear: "",
            publishing: "",
            annotation: "",
            state: "",
            genre: "",
            pagesCount: ""
        }
    },
    ui: {
        sort: [{
            name: "",
            author: "",
            state: "",
            genre: "",
            sortType: "none",
            sortField : ""
        }],
        editId: '',
    }
}

export default initialState;