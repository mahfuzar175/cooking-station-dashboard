import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaHome } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";

const OffCanvasNavBar = () => {
  return (
    <>
      {["xxl"].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3 fixed-top">
          <Container fluid>
            <Navbar.Brand className="fw-bold fs-3" href="#">Cooking Station</Navbar.Brand>
            
            
            {/* Hide the toggle button on larger devices */}
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="d-lg-none" />
            
            {/* user image */}
            <img className="d-none d-lg-block   rounded-circle" style={{ width: '50px', height: '50px' }} src="https://i.ibb.co/pfXD4rh/member1.png" alt="" />

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <span className="fw-bold">Cooking Station</span>  <img className="mx-3 rounded-circle" style={{ width: '50px', height: '50px' }} src="https://i.ibb.co/pfXD4rh/member1.png" alt="" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="d-lg-none">
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link className='mt-5' href="#action1"><RxDashboard className='mb-1' /><span className='mx-2'>Dashboard</span></Nav.Link>
                  <Nav.Link className='mt-2' href="#action2"><FaHome className='mb-1'/><span className='mx-2'>Home</span></Nav.Link>
                  <Nav.Link className='mt-2' href="#action3">Link</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default OffCanvasNavBar;
