import React from 'react'; 
import {Link} from "react-router-dom";

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
    <header>
        <nav>
            <button as={Link} to="add">
                Dashboard
            </button>
            <button as={Link} to="add">
                Add drink
            </button>
            <button onClick={handleLogout}>
                Logout
            </button>
        </nav>
    </header>
  )
}

export default NavBar