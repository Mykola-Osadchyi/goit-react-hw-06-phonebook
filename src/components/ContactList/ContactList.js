import { useSelector, useDispatch } from 'react-redux';
import phonebookActions from '../../redux/phonebook/phonebook-actions';
import s from './ContactList.module.css';

const findContact = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

export default function ContactList() {
  const contacts = useSelector(state =>
    findContact(state.contacts.items, state.contacts.filter),
  );
  const dispatch = useDispatch();
  const removeContact = id => dispatch(phonebookActions.deleteContact(id));

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.item}>
          <p>{name}</p>
          <p>{number}</p>
          <button type="button" onClick={() => removeContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
