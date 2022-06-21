import React, {useState} from 'react';
import SignUp from './SignUp';
import Login from './Login'; 
import styled from 'styled-components';
import Button from '../styles/Button';

function Home({ onLogin }) {
    const [showLogin, setShowLogin] = useState(true);

  return (
    <Wrapper>
        <Header>Hydration Nation</Header>
        {showLogin ? (
            <>
            <Login onLogin={onLogin} />
            <Divider />
            <p>
                Don't have an account? &nbsp;
                <Button bg ='#000080' color='#fff' onClick={() => setShowLogin(false)}>
                Sign Up
                </Button>
            </p>
            </>
      ) : (
            <>
                <SignUp onLogin={onLogin} />
                <Divider />
                <p>
                Already have an account? &nbsp;
                <Button bg ='#000080' color='#fff' onClick={() => setShowLogin(true)}> Log in</Button>
                </p>
            </>
        )
    }
    </Wrapper>
  )
}

const Header = styled.h1`
    font-family: "Permanent Marker";
    font-size: 3rem;
    color: #ADD8E6;
    margin: 8px 0 16px;
`

const Wrapper = styled.section`
  max-width: 500px;
  margin: 40px auto;
  padding: 16px;
`;

const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 16px 0;
`;

export default Home