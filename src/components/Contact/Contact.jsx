import userImage from "../../assets/images/user.jpg";
import { Link } from "react-router-dom";

const Contact = ({ contact, onDelete }) => {
  const { name, email, id } = contact;
  return (
    <div className="allUser">
      <div key={id} className="item">
        <Link
          style={{ width: "100%", height: "100%" }}
          to={{ pathname: `user/${id}`, state: { contact: contact } }}
        >
          <div className="users">
            <div>
              <img src={userImage} alt="user" />
            </div>
            <div className="user">
              <p>{name}</p>
              <p>{email}</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
