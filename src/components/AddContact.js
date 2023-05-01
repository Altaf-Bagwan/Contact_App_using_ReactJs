import { useState } from "react";
import "./AddContact.css";
import { Link } from "react-router-dom";

const initialState = {
  name: "",
  number: "",
};
function AddContact({ add }) {
  const [addContact, setAddContact] = useState(initialState);
  function handleChange(e) {
    setAddContact({ ...addContact, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (addContact.name === "" || addContact.number === "") {
      alert("Please fill the empty places");
    } else {
      add(addContact);
      setAddContact(initialState);
    }
  }
  return (
    <>
      <div className="addContactContainer">
        <form>
          <div className="addContactHeading">
            <h1>Add Contacts</h1>
            <Link to="/">
              <button>View Contacts</button>
            </Link>
          </div>
          <label>Name :</label>
          <input
            type="text"
            name="name"
            value={addContact.name}
            onChange={handleChange}
          ></input>
          <label>Number :</label>
          <input
            type="number"
            name="number"
            value={addContact.number}
            onChange={handleChange}
          ></input>

          <button id="addBtn" onClick={handleSubmit}>
            ADD
          </button>
        </form>
      </div>
    </>
  );
}
export default AddContact;
