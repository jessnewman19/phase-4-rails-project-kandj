import React from "react";

const DrinksCard = ({ drink_type, hydration_level }) => {
  return (
    <>
      <h3>{drink_type}</h3>
      <h3>{hydration_level}</h3>
    </>
  );
};

export default DrinksCard;
