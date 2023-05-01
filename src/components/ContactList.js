import { Link } from "react-router-dom";
import "./ContactList.css";
import user from "../images/user.png";
import add from "../images/add.png";

function ContactList({ contacts, delet }) {
  let no = (
    <div
      style={{ fontSize: 30, color: "grey", marginLeft: 500, marginTop: 200 }}
    >
      Nothing to Show
    </div>
  );
  const renderContactList = contacts.map((value, i) => {
    return (
      <>
        <div className="item">
          <div className="contactInfo">
            <img src={user} alt="user" />
            <Link
              className="link"
              to={`/contact/${value.id}`}
              state={{ contact: value }}
              style={{ textDecoration: "none", color: "black" }}
            >
              <h3>{value.name}</h3>
              <p>{value.number}</p>
            </Link>
          </div>
          <div className="Action_btns">
            <Link
              to={`/editContact/${value.id}`}
              state={{ contact: value, index: i }}
            >
              <i class="fa fa-edit" style={{ fontSize: 30, color: "blue" }}></i>
            </Link>
            <i
              className="fa fa-trash-o"
              style={{ fontSize: 35, color: "red" }}
              onClick={() => delet(value.id)}
            ></i>
          </div>
        </div>
      </>
    );
  });
  return (
    <>
      <div className="contactListBody">
        <div className="contactList">
          <div className="contactListHeading">
            <h1>Contact List</h1>
            <Link to="/add">
              <img src={add} alt="Add Contact" />
            </Link>
          </div>

          {contacts.length === 0 ? no : renderContactList}
        </div>
      </div>
    </>
  );
}

export default ContactList;
