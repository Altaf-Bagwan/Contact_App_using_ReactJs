import { Link, useLocation } from "react-router-dom";
import "./AddContact.css";

function EditContact({ update }) {
  const location = useLocation();

  const con = location.state.contact;
  const index = location.state.index;
  // console.log(location)

  let editedName = con.name;
  let editedNumber = con.number;
  let editedContact = {
    name: editedName,
    number: editedNumber,
  };

  function handleChangeName(e) {
    editedName = e.target.value;
    editedContact.name = editedName;
  }
  function handleChangeNumber(e) {
    editedNumber = e.target.value;
    editedContact.number = editedNumber;
  }

  function onEdit(e) {
    e.preventDefault();
    update(editedContact, index);
  }
  return (
    <>
      <div className="addContactContainer">
        <form>
          <div className="addContactHeading">
            <h1>Edit Contacts</h1>
            <Link to="/">
              <button>View Contacts</button>
            </Link>
          </div>
          <label>Name :</label>
          <input
            type="text"
            name="name"
            defaultValue={con.name}
            onChange={handleChangeName}
          ></input>
          <label>Number :</label>
          <input
            type="number"
            name="number"
            defaultValue={con.number}
            onChange={handleChangeNumber}
          ></input>

          <button onClick={onEdit}>
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              Save Changes{" "}
            </Link>
          </button>
        </form>
      </div>
    </>
  );
}
export default EditContact;
