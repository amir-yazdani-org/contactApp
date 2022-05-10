import { useState } from "react";
import addOneContact from "../../services/addContactService";
import { Link } from "react-router-dom";
import "./AddContact.css";

const AddContact = ({ history }) => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
  });

  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    if (!contact.name || !contact.email) {
      alert("all failed are mandatory !");
      return;
    }
    e.preventDefault();
    try {
      await addOneContact(contact);
      setContact({ name: "", email: "" });
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="addNew">
      <form onSubmit={submitForm}>
        <div className="formControl">
          <label>name</label>
          <input
            type="text"
            name="name"
            value={contact.name}
            onChange={changeHandler}
          />
        </div>
        <div className="formControl">
          <label>email</label>
          <input
            type="email"
            name="email"
            value={contact.email}
            onChange={changeHandler}
          />
        </div>
        <div className="btn">
          <button type="submit">Add Contact</button>
          <Link style={{width:"100%"}} to="/">
            <button className="cancel" type="submit">
              Cancel
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddContact;
