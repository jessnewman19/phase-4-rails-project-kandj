import React, {useState} from 'react'; 

//Import styled components
import Error from "../styles/Error.js";
import Label from '../styles/Label.js';
import Input from '../styles/Input.js';
import FormDiv from '../styles/FormDiv.js';
import Button from '../styles/Button.js'

function Login({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(e) { 
        e.preventDefault()
        setIsLoading(true)
        fetch("/login", { 
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username, password}),
        }).then(r => { 
            setIsLoading(false)
            if (r.ok) { 
                r.json().then(user => onLogin(user))
            } else { 
                r.json().then(err => setErrors(err.errors))
            }
        })
    }

  return (
    <form onSubmit={handleSubmit}> 
        <FormDiv> 
            <Label>Username: </Label>
            <Input 
            type="text" 
            id="username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
        </FormDiv>
        <FormDiv>
            <Label>Password: </Label>
            <Input 
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
        </FormDiv>
        <FormDiv> 
            <Button type="submit" bg ='#000080' color='#fff'>
                {isLoading ? "Loading..." : "Login"}
            </Button>
        </FormDiv>
        <FormDiv> 
            {errors.map(error => (
                <Error key={error}>{error}</Error>
            ))} 
        </FormDiv>
    </form>
  )
}

export default Login