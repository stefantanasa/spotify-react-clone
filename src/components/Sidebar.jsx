import { Container, Row, Col, Nav, ProgressBar } from "react-bootstrap";
import logo from "../data/white_logo.png";
const Sidebar = () => {
  return (
    <div className="bg-dark">
      <Row>
        <img className="m-4" src={logo} height={"40rem"} alt="" srcSet="" />
      </Row>
      <Row>
        <Nav  className="flex-column ml-4" >
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link eventKey="link-1">Search</Nav.Link>
          <Nav.Link eventKey="link-2">Library</Nav.Link>
        </Nav>
      </Row>
      <Row>
        <Nav  className="flex-column ml-3" >
          <Nav.Link href="/home">Create Playlist</Nav.Link>
          <Nav.Link eventKey="link-1">Liked Songs</Nav.Link>
          <ProgressBar
              className=""
              style={{ width: "10rem", height: "0.1rem" }}
              now={0}
              
            />
        </Nav>
       
      </Row>
 
    </div>
  );
};

export default Sidebar;
