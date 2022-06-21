import Home from './Home';
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

  if (!user) return <Home onLogin={setUser} />

  
  return (
    <>
      <main>
        <Switch>
          <Route path="/new">
          </Route>
          <Route path="/">
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
