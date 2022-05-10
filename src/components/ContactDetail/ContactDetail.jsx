import "./ContactDetail.css";
import { Link } from "react-router-dom";
import deleteOneContacts from "../../services/deleteContactsService";

const ContactDetail = ({ location, onDelete }) => {

  const { contact } = location.state;
  
  const deleteContactHandler = async (id) => {
    try {
      await deleteOneContacts(id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="contact">
      <p>user name is : {contact.name}</p>
      <p>user email is : {contact.email}</p>
      <div>
        <Link to={`/edit/${contact.id}`}>
          <button className="">Edit</button>
        </Link>
        <Link to='/'>
        <button className="deleteBtn" onClick={() => deleteContactHandler(contact.id)}>
          delete
        </button>
        </Link>
      </div>
      <Link to="/">go to contact List</Link>
    </div>
  );
};

export default ContactDetail;

