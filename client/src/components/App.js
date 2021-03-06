import Home from './Home';
import NavBar from './NavBar';
import AddDrinkForm from './AddDrinkForm';
import React, {useState, useEffect} from "react";
import {Switch, Route} from "react-router-dom"; 
import GlobalStyles from '../styles/GlobalStyles';

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
    <GlobalStyles/>
      <NavBar setUser={setUser}/>
        <main>
          <Switch>
            <Route path="/add">
              <AddDrinkForm />
            </Route>
            <Route path="/tracker">
            </Route>
            <Route path="/dashboard">
            </Route>
          </Switch>
        </main>
    </>
  );
}

export default App;
