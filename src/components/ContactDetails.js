import { useLocation } from "react-router-dom";
import user from "../images/user.png";
import "./ContactDetails.css";

function ContactDetails() {
  const location = useLocation();
  const con = location.state.contact;
  return (
    <>
      <div className="contactDetails">
        <div className="Details">
          <img src={user} alt="user" />
          <h1>{con.name}</h1>
          <p id="num">{con.number}</p>
        </div>
      </div>
    </>
  );
}

export default ContactDetails;
