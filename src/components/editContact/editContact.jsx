import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getOneContact from "../../services/getOneContact";
import updateContact from "../../services/updateContact";
import "./EditContact.css";

const EditContact = ({ history, match }) => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
  });

  const [placeholder, setPlaceholder] = useState({
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
      await updateContact(match.params.id, contact);
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const localFetch = async () => {
      try {
        const { data } = await getOneContact(match.params.id);
        setPlaceholder({ name: data.name, email: data.email });
      } catch (err) {
        console.log(err);
      }
    };
    localFetch();
  }, []);

  return (
    <div className="update">
      <form onSubmit={submitForm}>
        <div className="formControl">
          <label>name</label>
          <input
            type="text"
            name="name"
            value={contact.name}
            placeholder={placeholder.name}
            onChange={changeHandler}
          />
        </div>
        <div className="formControl">
          <label>email</label>
          <input
            type="email"
            name="email"
            value={contact.email}
            placeholder={placeholder.email}
            onChange={changeHandler}
          />
        </div>
        <button type="submit">Update Contact</button>
      </form>
      <Link to="/">back to home</Link>
    </div>
  );
};

export default EditContact;
