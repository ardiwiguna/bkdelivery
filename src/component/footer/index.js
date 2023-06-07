import React from 'react';
import { Container, Breadcrumb } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#2d2d2d', color: 'white' }} className="py-3">
            <Container>
                <h4>
                    BURGER KING DELIVERY
                </h4>
                <div className="d-flex">
                    <h5 className="me-3">
                        <img src="/assets/img/icon/phone.png" alt="" style={{ width: '20   px' }} className="me-1" />1500 25</h5>
                    <div className="me-3">guestservice@burgerking.co.id</div>
                    <div>
                        <img src="/assets/img/icon/facebook.png" alt="" style={{ width: '16px' }} className="me-1" />
                        <img src="/assets/img/icon/twitter.png" alt="" style={{ width: '16px' }} className="me-1" />
                        <img src="/assets/img/icon/instagram.png" alt="" style={{ width: '16px' }} className="me-1" />
                        <img src="/assets/img/icon/youtube.png" alt="" style={{ width: '16px' }} className="me-1" />
                    </div>
                </div>

                <Breadcrumb>
                    <Breadcrumb.Item href="#">About Us</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">Kebijakan Privase</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">Syarat dan Ketentuan</Breadcrumb.Item>
                    <Breadcrumb.Item active>TM & © 2023 Burger King Corporation. Used Under License. All rights reserved.</Breadcrumb.Item>
                </Breadcrumb>
            </Container>
        </footer>
    );
};

export default Footer;
