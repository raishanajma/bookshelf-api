const {nanoid} = require(`nanoid`);
const books = require("./books");

const addBookHandler = (request, h) => {
    const {name, year, author, summary, publisher, pageCount, readPage} = request.payload;
    if(name === null) {
        const response = h.response({
        status: 'fail',
        message: 'Gagal menambahkan buku. Mohon isi nama buku',
        });
        response.code(400);
        return response;
    }
    if(readPage > pageCount) {
        const response = h.response({
        status: 'fail',
        message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
        });
        response.code(400);
        return response;
    }

    const id = nanoid(16);
    const finished = pageCount === readPage ? true : false;
    const reading = pageCount === readPage ? true : false;
    const insertedAt = new Date().toISOString();
    const updatedAt = insertedAt;

    const newBook = {
        name, year, author, summary, publisher, pageCount, readPage, id, finished, reading, insertedAt, updatedAt
    }

    books.push(newBook);
    const isSuccess = books.filter((book) => book.id === id).length > 0;

    if (isSuccess) {
        const response = h.response({
          status: 'success',
          message: 'Buku berhasil ditambahkan',
          data: {
            bookId: id,
          },
        });
        response.code(201);
        return response;
    }
}

const getBookHandler = () => {
    status: 'success';
    data: {books};
}

const getBookDetailHandler = (request, h) => {
    const bookId = request.params;
    const {id, name, year, author, summary, publisher, pageCount, readPage, finished, reading, insertedAt, updatedAt} = request.payload;
    const index = books.findIndex((book) => book.bookId === bookId);
    if (index !== -1) {
        status: 'success';
        data: {books[index]};
        response.code(200);
        return response;
    }
    const response = h.response({
        status: 'fail',
        message: 'Buku tidak ditemukan',
    });
    response.code(404);
    return response;
}

const editBookByIdHandler = (request, h) => {
    const bookId = request.params;
    const {name, year, author, summary, publisher, pageCount, readPage} = request.payload;
    const updatedAt = new Date().toISOString();
    const index = books.findIndex((book) => book.bookId === bookId);

    if(name === null) {
        const response = h.response({
        status: 'fail',
        message: 'Gagal memperbarui buku. Mohon isi nama buku',
        });
        response.code(400);
        return response;
    }

    if(readPage > pageCount) {
        const response = h.response({
        status: 'fail',
        message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
        });
        response.code(400);
        return response;
    }

    if (index !== -1) {
        books[index] = {
          ...books[index],
          name, year, author, summary, publisher, pageCount, readPage, updatedAt
        };
        const response = h.response({
          status: 'success',
          message: 'Buku berhasil diperbarui',
        });
        response.code(200);
        return response;
    }

    const response = h.response({
        status: 'fail',
        message: 'Gagal memperbarui buku. Id tidak ditemukan',
    });
    response.code(400);
    return response;
};

const deleteBookByIdHandler = (request, h) => {
    const {bookId} = request.params;
    const index = books.findIndex((book) => book.bookId === bookId);

    if (index !== -1) {
        books.splice(index, 1);
        const response = h.response({
          status: 'success',
          message: 'Buku berhasil dihapus',
        });
        response.code(200);
        return response;
    }

    const response = h.response({
    status: 'fail',
    message: 'Buku gagal dihapus. Id tidak ditemukan'
    });
    response.code(404);
    return response;
}

module.exports = {
    addBookHandler,
    getBookHandler,
    getBookDetailHandler,
    editBookByIdHandler,
    deleteBookByIdHandler
}