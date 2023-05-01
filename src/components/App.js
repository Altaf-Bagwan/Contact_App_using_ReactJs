import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactDetails from "./ContactDetails";
import EditContact from "./EditContact";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  function add(contact) {
    setContacts([...contacts, { ...contact, id: contacts.length + 1 }]);
  }

  function delet(id) {
    setContacts(contacts.filter((value) => value.id !== id)); //this filter make a copy of array
  }
  function update(editedContact, index) {
    contacts[index] = editedContact;
    setContacts([...contacts]);
  }

  useEffect(() => {
    const retrieveContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    console.log(retrieveContacts);
    if (retrieveContacts !== null && retrieveContacts.length !== 0) {
      setContacts(retrieveContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Header></Header>

          <Routes>
            <Route
              path="/"
              element={
                <ContactList contacts={contacts} delet={delet}></ContactList>
              }
            />
            <Route path="/add" element={<AddContact add={add}></AddContact>} />

            <Route
              path="/contact/:id"
              element={<ContactDetails></ContactDetails>}
            />
            <Route
              path="/editContact/:id"
              element={<EditContact update={update}></EditContact>}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
