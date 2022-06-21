import React, {useState} from 'react'; 

//Import styled components
import Error from "../styles/Error.js";
import Label from '../styles/Label.js';
import Input from '../styles/Input.js';
import FormDiv from '../styles/FormDiv.js';
import Button from '../styles/Button.js';

function SignUp({onLogin}) {
    const [fullName, setFullName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [gender, setGender] = useState("")
    const [weight, setWeight] = useState("")
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState([]);

    function handleSignup(e) { 
        e.preventDefault()
        setErrors([])
        setIsLoading(true)
        fetch('/signup', { 
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
                full_name: fullName, 
                username, 
                password,
                password_confirmation: passwordConfirmation, 
                gender, 
                weight,
            }),
        }).then(r => { 
            setIsLoading(false)
            if (r.ok) { 
                r.json().then(user => onLogin(user))
            } else { 
                r.json().then(error => setErrors(error.errors))
            }
        })
    }

  return (
    <form onSubmit={handleSignup}>
        <FormDiv> 
            <Label>Full name: </Label>
            <Input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e => setFullName(e.target.value))}
            />
        </FormDiv>
        <FormDiv> 
            <Label>Username: </Label>
            <Input
                type="text"
                id="username"
                value={username}
                onChange={(e => setUsername(e.target.value))}
            />
        </FormDiv>
        <FormDiv> 
            <Label>Password: </Label>
            <Input
                type="password"
                id="password"
                value={password}
                onChange={(e => setPassword(e.target.value))}
            />
        </FormDiv>
        <FormDiv> 
            <Label>Confirm your password: </Label>
            <Input
                type="password"
                id="passwordConfirmation"
                value={passwordConfirmation}
                onChange={(e => setPasswordConfirmation(e.target.value))}
            />
        </FormDiv>
        <FormDiv> 
            <Label>Gender: </Label>
            <Input
                type="text"
                id="gender"
                value={gender}
                onChange={(e => setGender(e.target.value))}
            />
        </FormDiv>
        <FormDiv> 
            <Label>Weight: </Label>
            <Input
                type="text"
                id="weight"
                value={weight}
                onChange={(e => setWeight(e.target.value))}
            />
        </FormDiv>
        <FormDiv> 
            <Button bg ='#000080' color='#fff' type="submit">{isLoading ? "Loading..." : "Sign Up"}</Button>
        </FormDiv>
        <FormDiv>
            {errors.map(error => (
                <Error key={error}>{error}</Error>
            ))} 
        </FormDiv>
    </form>
  )
}

export default SignUp