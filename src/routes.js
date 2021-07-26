/* eslint-disable linebreak-style */
/* eslint-disable object-curly-newline */
/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable linebreak-style */

const { addNoteHandler, getAllNotesHandler, getNotesByIdHandler, editNoteByIdHandler, deleteNoteByIdHandler } = require('./handler');

const routes = [{
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
},
{
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
},
{
    method: 'GET',
    path: '/notes/{id}',
    handler: getNotesByIdHandler,
},
{
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIdHandler,
},
{
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByIdHandler,
},
];

module.exports = routes;