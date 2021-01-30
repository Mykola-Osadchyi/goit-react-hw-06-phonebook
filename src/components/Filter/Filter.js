import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import phonebookActions from '../../redux/phonebook/phonebook-actions';
import s from './Filter.module.css';

export default function Filter() {
  const filterValue = useSelector(state => state.contacts.filter);

  const dispatch = useDispatch();
  const filterData = e =>
    dispatch(phonebookActions.changeFilter(e.target.value));

  return (
    <label>
      Find contacts by name
      <input
        type="text"
        value={filterValue}
        onChange={filterData}
        className={s.input}
      />
    </label>
  );
}
