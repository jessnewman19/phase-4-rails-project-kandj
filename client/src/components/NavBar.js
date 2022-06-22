import React from 'react'; 
import {Link} from "react-router-dom";
import { GiWaterBottle } from "react-icons/gi"

//import styled components 
import Button from '../styles/Button';
import {Nav, NavLink, NavHomeLink} from '../styles/Nav';
import Container from '../styles/Container';

function NavBar({user, setUser}) {
    function handleLogout() { 
        fetch("/logout", { 
            method: "DELETE"
        })
        .then(r => { 
            if (r.ok) { 
                setUser(null)
            }
        })
    }

  return (
    <Nav>
        <NavHomeLink to="/">
            <GiWaterBottle />
        </NavHomeLink>
        <Container>
            <NavLink to="dashboard">
                Dashboard
            </NavLink>
            <NavLink as={Link} to="add">
                Add drink
            </NavLink>
            <Button onClick={handleLogout} bg ='#000080' color='#fff'>
                Logout
            </Button>
        </Container>
    </Nav>
  )
}

export default NavBar