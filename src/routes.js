const {
    addBookHandler,
    getBookHandler,
    getBookDetailHandler,
    editBookByIdHandler,
    deleteBookByIdHandler
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
        method: `GET`,
        path: `/books/{bookId}`,
        handler: getBookDetailHandler
    },

    {
        method: 'PUT',
        path: '/books/{bookId}',
        handler: editBookByIdHandler
    },

    {
        method: `DELETE`,
        path: `/books/{bookId}`,
        handler: deleteBookByIdHandler
    }
];

module.exports = routes;