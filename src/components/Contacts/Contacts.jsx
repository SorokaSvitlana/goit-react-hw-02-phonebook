import PropTypes from 'prop-types'
export const ContactList = ({ contacts, onDeleteContact }) => (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number} <button onClick={() => onDeleteContact(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );

  ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape),
    onDeleteContact: PropTypes.func,
  }