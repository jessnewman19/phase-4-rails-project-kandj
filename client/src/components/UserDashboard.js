import React, { useEffect, useState } from "react";
import DrinksCard from "./DrinksCard";

const UserDashboard = ({ user }) => {
  const [userDrinks, setUserDrinks] = useState({});

  let userDrinkGoal = 0;
  let userHasDrank = 0;

  function setDrinkGoal() {
    if (user.gender === "male") {
      userDrinkGoal = 80;
    } else {
      userDrinkGoal = 64;
    }
  }
  setDrinkGoal();

  // function displayUserDrank() {
  //   for (let i = 0; i < user.drinks.length; i++) {
  //     userHasDrank += parseInt(user.drinks[i].hydration_level);
  //     console.log(userDrinks);
  //   }
  // }
  // displayUserDrank();

  useEffect(() => {
    fetch("/drinks")
      .then((response) => response.json())
      .then((response) => {
        setUserDrinks(response);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(userDrinks);

  return (
    <div>
      <h1>Hello {user.full_name}!</h1>
      <h2> Current Fluid Intake </h2>
      <h3> {userHasDrank} ounces</h3>

      <h2>
        You need to drink {userDrinkGoal - userHasDrank} more ounces to be fully
        hydrated today!
      </h2>
      {user.drinks.map((drink) => {
        return (
          <DrinksCard
            drink_type={drink.drink_type}
            hydration_level={drink.hydration_level}
          />
        );
      })}
    </div>
  );
};

export default UserDashboard;
