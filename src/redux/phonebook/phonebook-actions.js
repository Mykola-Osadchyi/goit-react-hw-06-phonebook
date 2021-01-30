import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('phonebook/addContact', data => ({
  payload: {
    id: shortid.generate(),
    name: data.name,
    number: data.number,
  },
}));

const deleteContact = createAction('phonebook/deleteContact');

const changeFilter = createAction('phonebook/changeFilter');

export default { addContact, deleteContact, changeFilter };
