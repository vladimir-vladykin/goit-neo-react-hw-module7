import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={styles.list}>
      {visibleContacts.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact value={contact} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
