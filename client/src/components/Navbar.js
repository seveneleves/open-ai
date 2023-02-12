import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Navbar.css";

function CustomNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Link to={"/"} id="nav-brand" className="py-2 fs-5">
        OpenAI Sandbox
      </Link>
    </Navbar>
  );
}

export default CustomNavbar;
