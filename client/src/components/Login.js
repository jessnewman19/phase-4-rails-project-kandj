import React, {useState} from 'react'

function Login({onLogin}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    function handleSubmit(e) { 
        e.preventDefault()
        setIsLoading(true)
        fetch('/login', { 
            method: "POST",
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password}),
        })
        .then(r => { 
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
        <div> 
            <label>Username: </label>
            <input 
            type="text" 
            id="username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
        </div>
        <div>
            <label>Password: </label>
            <input 
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        <div> 
            <button type="submit">
                {isLoading ? "Loading..." : "Login"}
            </button>
        </div>
        <div> 
            {errors.map(error => (
                <div key={error}>{error}</div>
            ))} 
        </div>
    </form>
  )
}

export default Login