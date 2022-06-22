const UserDashboard = ({ user }) => {
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

  function displayUserDrank() {
    for (let i = 0; i < user.drinks.length; i++) {
      userHasDrank += parseInt(user.drinks[i].hydration_level);
      console.log("User Has Drank", userHasDrank);
    }
  }
  displayUserDrank();

  return (
    <div>
      <h1>Hello {user.full_name}!</h1>
      <h2> Current Fluid Intake </h2>
      <h3> {userHasDrank} ounces</h3>

      <h2>
        You need to drink {userDrinkGoal - userHasDrank} more ounces to be fully
        hydrated today!
      </h2>
      <p>Drink Card</p>
      <p>Drink Card</p>
      <p>Drink Card</p>
      <p>Drink Card</p>
    </div>
  );
};

export default UserDashboard;
