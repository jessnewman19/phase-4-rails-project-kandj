import Login from './Login';
import React, {useState, useEffect} from "react";
import {Switch, Route} from "react-router-dom"; 

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    //auto-login
    fetch('/me')
    .then(r => { 
      if (r.ok) { 
        r.json().then(user => setUser(user))
      }
    });
  }, [])

  if (!user) return <Login onLogin={setUser} />

  return (
    <>
      <Switch>
        <Route>
        </Route>
      </Switch>
    </>
  );
}

export default App;
