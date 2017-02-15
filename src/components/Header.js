import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';


const Header = () => {
  return (
    <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Project Lodestar</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">Dashboard</NavItem>
            <NavDropdown eventKey={3} title="Reports" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Saved</MenuItem>
              <MenuItem eventKey={3.2}>Manage</MenuItem>
              <MenuItem eventKey={3.3}>Export</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Settings</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">User</NavItem>
            <NavItem eventKey={2} href="#">Help</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  )
};

export default Header
