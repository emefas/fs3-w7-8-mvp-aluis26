import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default class Navigation extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" variant="light" >
                    <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}
