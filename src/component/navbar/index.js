import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import BKLogo from "../../img/bk-logo.png"

function App() {
    return (
        <div>
            <Navbar className='BKNavbar' expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className="position-relative logo-wrapper">
                        <img
                            src={BKLogo}
                            width="90"
                            height="90"
                            className="d-inline-block align-top logo"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#home" className="mx-3">
                                <div className="subtitle">Delivery</div>
                                <div className="title">Order</div>
                            </Nav.Link>
                            <Nav.Link href="#home" className="mx-3">
                                <div className="subtitle">Get Fresh</div>
                                <div className="title">Promotions</div>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default App;
