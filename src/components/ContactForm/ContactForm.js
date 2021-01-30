import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import phonebookActions from '../../redux/phonebook/phonebook-actions';
import { getAllContacts } from '../../redux/phonebook/phonebook-selectors';
import s from './ContactForm.module.css';

export default function ContactForm() {
  const contacts = useSelector(getAllContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleChangeName = event => setName(event.target.value);
  const handleChangeNumber = event => setNumber(event.target.value);

  const checkRepeatName = name => {
    return contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (checkRepeatName(name)) {
      toast.info(`${name} is already in the contacts.`);
    } else {
      dispatch(phonebookActions.addContact({ name, number }));
    }
    setName('');
    setNumber('');
  };

  return (
    <>
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChangeName}
            className={s.input}
          />
        </label>

        <label className={s.label}>
          Number
          <input
            type="text"
            name="number"
            value={number}
            onChange={handleChangeNumber}
            className={s.input}
          />
        </label>

        <button type="submit" disabled={!number} className={s.button}>
          Add contact
        </button>
      </form>
    </>
  );
}
