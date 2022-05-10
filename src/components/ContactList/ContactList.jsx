import "./ContactList.css";
import { Link } from "react-router-dom";
import Contact from "../Contact/Contact";
import getContacts from "../../services/getContactsService";
import { useEffect, useState } from "react";

const ContactList = (props) => {
  const [contacts, setContacts] = useState(null);
  const [allContacts, setAllContacts] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [contactLength, setContactLength] = useState([]);

  const searchHandler = (e) => {
    setSearchTerm(e.target.value);
    const search = e.target.value;
    if (search !== "") {
      const filteredContacts = allContacts.filter((c) => {
        return Object.values(c)
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      setContacts(filteredContacts);
    } else {
      setContacts(allContacts);
    }
  };

  useEffect(() => {
    const fetchContacts = async () => {
      const {data} = await getContacts();
      setContacts(data);
      setAllContacts(data);
      setContactLength(data);
    };
    try {
      fetchContacts();
    } catch (err) {
      console.log(err);
    }
  }, []);

  

  return (
    <section className="listWrapper">
      <div className="contactList">
        <div className="listHeader">
          <p>{contactLength.length} contact with app</p>
        </div>
        <div className="ToolBar">
          <div className="test">
          <Link to="/add">
            <div className={`${showSearch === true ? "hide" : ""}`}>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
            </div>
          </Link>
          <div onClick={() => setShowSearch(!showSearch)}>
            {showSearch === false ? (
              <div className="search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            ) : (
              <div className="search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </div>
            )}
          </div>
          <input
            className={`${showSearch === true ? "searchInp" : "hideSInp"}`}
            type="search"
            value={searchTerm}
            onChange={searchHandler}
            placeholder="search"
          />
          </div>
        </div>
        {contacts ? (
          contacts.map((contact) => {
            return (
              <Contact
                contact={contact}
                key={contact.id}
              />
            );
          })
        ) : (
          <p>loading...</p>
        )}
      </div>
    </section>
  );
};

export default ContactList;
