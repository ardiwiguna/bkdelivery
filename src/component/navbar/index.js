import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import BKLogo from "../../assets/img/bk-logo.png"

function App() {
    return (
        <div>
            <Navbar className='BKNavbar p-0' expand="lg">
                <Container className="h-100">
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
                    <Navbar.Collapse id="basic-navbar-nav" className=' h-100'>
                        <Nav className="me-auto">
                            <Nav.Link href="#home" className="mx-3">
                                <div className="subtitle">Delivery</div>
                                <div className="title">Order</div>
                            </Nav.Link>
                            <Nav.Link href="#home" className="mx-3">
                                <div className="subtitle">Get Fresh</div>
                                <div className="title">Promotions</div>
                            </Nav.Link>
                        </Nav>
                        <Nav className="d-flex flex-column align-items-center">
                            <Nav.Link href="#">
                                <div className="title">LOGIN</div>
                            </Nav.Link>
                        </Nav>
                        <Nav className="d-flex flex-column align-items-center h-100">
                            <div className="cart">
                                <Nav.Link href="#">
                                    <img src="/assets/img/icon/cart.png" alt="" style={{ width: '32px' }} className="me-1" />
                                </Nav.Link>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default App;
