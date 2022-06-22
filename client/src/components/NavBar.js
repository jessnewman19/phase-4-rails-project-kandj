import React from 'react'; 
import { GiWaterBottle } from "react-icons/gi"

//import styled components 
import Button from '../styles/Button';
import {Nav, NavLink, Logo} from '../styles/Nav';
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
        <Logo>
            <GiWaterBottle />
        </Logo>
        <Container>
            <NavLink to="dashboard">
                Dashboard
            </NavLink>
            <NavLink to="tracker">
                Tracker
            </NavLink>
            <NavLink to="add">
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