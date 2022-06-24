import React, { useEffect, useState } from "react";
import DrinksCard from "./DrinksCard";

//import styled components
import styled from "styled-components";

const UserDashboard = ({ user, fetchUser }) => {
  const [userDrinks, setUserDrinks] = useState({});

  console.log(user);

  let userDrinkGoal = 0;
  let userHasDrank = 0;

  function setDrinkGoal() {
    if (user.gender === "M") {
      userDrinkGoal = 80;
    } else {
      userDrinkGoal = 64;
    }
  }
  setDrinkGoal();

  function displayUserDrank() {
    for (let i = 0; i < user.drinks.length; i++) {
      userHasDrank += parseInt(user.drinks[i].hydration_level);
    }
  }
  displayUserDrank();

  console.log(userDrinks);

  return (
    <Wrapper>
      <Header>Hello {user.full_name}!</Header>
      <Header2> Current Fluid Intake </Header2>
      <P> {userHasDrank} ounces</P>

      <P>
        You need to drink {userDrinkGoal - userHasDrank} more ounces to be fully
        hydrated today!
      </P>
      <DrinksWrapper>
        {user.drinks.map((drink) => {
          return (
            <DrinksCard
              key={drink.id}
              id={drink.id}
              drink={drink}
              drink_type={drink.drink_type}
              hydration_level={drink.hydration_level}
              location={drink.location}
              fetchUser={fetchUser}
            />
          );
        })}
      </DrinksWrapper>
    </Wrapper>
  );
};

const Header = styled.h1`
  font-family: "Permanent Marker";
  font-size: 2.5rem;
  color: #add8e6;
  margin: 8px 0 5px;
`;

const Header2 = styled.h2`
  font-family: "Permanent Marker";
  font-size: 1.6rem;
  color: #6f2dbd;
  margin: 8px 0 5px;
`;

const Wrapper = styled.section`
  max-width: 500px;
  margin: 10px auto;
  padding: 16px;
`;

const P = styled.p`
  font-size: 1.2rem;
`;

const DrinksWrapper = styled.div`
  display: grid;
  flex-direction: column;
  justify-content: flex-start;
`;

export default UserDashboard;
