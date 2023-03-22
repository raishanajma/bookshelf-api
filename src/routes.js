const {
    addBookHandler,
    getBookHandler,
    editBookByIdHandler
} = require(`./handler`);

const routes = [
    {
        method: `POST`,
        path: `/books`,
        handler: addBookHandler
    },

    {
        method: `GET`,
        path: `/books`,
        handler: getBookHandler
    },

    {
        method: 'PUT',
        path: ' /books/{bookId}',
        handler: editBookByIdHandler
    },
];

module.exports = routes;