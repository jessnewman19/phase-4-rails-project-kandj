import React, { useState } from "react";
import EditDrink from "./EditDrink";

//import styled components
import styled from "styled-components";
import Button from "../styles/Button";

const DrinksCard = ({
  id,
  drink_type,
  hydration_level,
  description,
  drink,
  location,
  fetchUser,
}) => {
  const [showEdit, setShowEdit] = useState(true);

  function editButtonHandler() {
    setShowEdit(!showEdit);
  }

  console.log("This is Drink ID", id);
  console.log("This is Drink", drink);
  console.log("This is Description", description);

  function handleDeleteDrink() {
    fetch(`/drinks/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        fetchUser();
      } else {
        r.json().then((err) => alert(err.errors));
      }
    });
  }

  return (
    <>
      <Header>{drink_type}</Header>
      <Header2>{hydration_level}</Header2>
      <P>{location}</P>
      {
        <Button onClick={editButtonHandler} bg="#000080" color="#fff">
          Edit
        </Button>
      }
      {showEdit ? null : <EditDrink fetchUser={fetchUser} id={id} />}
      <Button onClick={handleDeleteDrink} bg="#000080" color="#fff">
        Delete
      </Button>
    </>
  );
};

const Header = styled.h3`
  font-family: "Permanent Marker";
  font-size: 2rem;
  color: #6f2dbd;
  margin: 8px 0 5px;
`;

const Header2 = styled.h4`
  font-family: "Permanent Marker";
  font-size: 1.2rem;
  color: #027bce;
  margin: 8px 0 5px;
`;

const P = styled.p`
  font-size: 1.2rem;
`;

export default DrinksCard;
