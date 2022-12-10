import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";

function CustomNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">OpenAI Image Generator</Navbar.Brand>
    </Navbar>
  );
}

export default CustomNavbar;
