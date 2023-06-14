import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import {LinkContainer} from "react-router-bootstrap"

const Navigation = () => (
    <>
        <Navbar className="mainNav">
            <LinkContainer className="navTab" to="/">
                <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer className="navTab" to="/about">
                <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer className="navTab" to="/contact">
                <Nav.Link>Contact Me</Nav.Link>
            </LinkContainer>
        </Navbar>
    </>
)

export default Navigation