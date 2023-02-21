 import { Navbar, Nav, NavDropdown, Container} from "react-bootstrap"
//  import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons'


 export default function NavBar(){
    return (
        <Navbar bg="dark" expand="lg" className="p-2" >
      <Container fluid >
        <Navbar.Brand className="text-light fs-1" href="#home">Dennis Jackson</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-light" href="#home">Home</Nav.Link>
            <Nav.Link className="text-light" href="#bio">bio</Nav.Link>
            <Nav.Link className="text-light" href="#project">project</Nav.Link>
            <Nav.Link className="text-light" href="#contact">contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Text className="">
            <a href="https://www.linkedin.com/in/dennis-jackson-a5233824a/" target='_blank' className="text-light p-2">
                <FontAwesomeIcon icon={faLinkedin} size='2x' />
            </a>
            <a href="https://github.com/monkeyd87" target="_blank" className="text-light p-2">
                <FontAwesomeIcon icon={faGithub} size='2x' />
            </a>
        </Navbar.Text>
      </Container>
    </Navbar>
  );

 }