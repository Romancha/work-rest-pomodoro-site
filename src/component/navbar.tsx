import React from 'react';
import {Navbar, Nav} from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import {useLocation} from "react-router-dom";

const MyNavbar = () => {
    const path = useLocation().pathname

    return (
        <Navbar bg="light" expand="lg" className={"box-shadow floating g-4"} sticky={"top"}>
            <Container>
                <Navbar.Brand href="/">Work & Rest</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"/>
                    <Nav activeKey={path}>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/faq">FAQs</Nav.Link>
                        <Nav.Link href="/release">Release Notes</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MyNavbar