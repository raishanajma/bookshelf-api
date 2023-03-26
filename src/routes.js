const {
    addBookHandler,
    getBookHandler,
    getBookDetailHandler,
    editBookByIdHandler,
    deleteBookByIdHandler,
  } = require('./handler');
  
  const routes = [
    {
      method: 'POST',
      path: '/books',
      handler: addBookHandler,
    },
    {
      method: 'GET',
      path: '/books',
      handler: getBookHandler,
    },
    {
      method: 'GET',
      path: '/books/{id}',
      handler: getBookDetailHandler,
    },
    {
      method: 'PUT',
      path: '/books/{id}',
      handler: editBookByIdHandler,
    },
    {
      method: 'DELETE',
      path: '/books/{id}',
      handler: deleteBookByIdHandler,
    },
  ];
  
  module.exports = routes;