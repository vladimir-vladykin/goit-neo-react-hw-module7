import { FaUser as UserIcon } from "react-icons/fa";
import { FaPhoneAlt as PhoneIcon } from "react-icons/fa";
import styles from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ value: { id, name, number } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={styles.contact}>
      <ul>
        <li>
          <UserIcon />
          <p>{name}</p>
        </li>
        <li>
          <PhoneIcon />
          <p>{number}</p>
        </li>
      </ul>

      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Contact;
