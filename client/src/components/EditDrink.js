import React, { useState } from "react";

//import styled components
import styled from "styled-components";
import FormDiv from "../styles/FormDiv";
import Label from "../styles/Label";
import Input from "../styles/Input";
import Button from "../styles/Button";
import Error from "../styles/Error";

const EditDrink = ({ fetchUser, id }) => {
  const [drinkType, setDrinkType] = useState("");
  const [hydrationLevel, setHydrationLevel] = useState("");
  const [location, setLocation] = useState("");
  const [errors, setErrors] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/drinks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        drink_type: drinkType,
        hydration_level: hydrationLevel,
        location: location,
      }),
    }).then((r) => {
      if (r.ok) {
        setDrinkType("");
        setHydrationLevel("");
        setLocation("");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
      fetchUser();
    });
  }

  return (
    <div>
      <form>
        <FormDiv>
          <Label>Type of drink: </Label>
          <Input
            type="text"
            id="drinkType"
            value={drinkType}
            onChange={(e) => setDrinkType(e.target.value)}
          />
        </FormDiv>
        <FormDiv>
          <Label>Level of hydration: </Label>
          <P>*Please select number from 1-10</P>
          <Input
            type="text"
            id="hydrationLevel"
            value={hydrationLevel}
            onChange={(e) => setHydrationLevel(e.target.value)}
          />
        </FormDiv>
        <FormDiv>
          <Label>Location: </Label>
          <Input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </FormDiv>
        <FormDiv>
          <Button onclick={handleSubmit} type="submit">
            Submit
          </Button>
        </FormDiv>
      </form>
    </div>
  );
};

const Header = styled.h1`
  font-family: "Permanent Marker";
  font-size: 2.5rem;
  color: #add8e6;
  margin: 8px 0 5px;
`;

const Wrapper = styled.section`
  max-width: 500px;
  margin: 10px auto;
  padding: 16px;
`;

const Select = styled.select`
  border-radius: 6px;
  border: 1px solid transparent;
  border-color: #dbdbdb;
  -webkit-appearance: auto;
  max-width: 100%;
  width: 100%;
  font-size: 1rem;
  line-height: 1.5;
  padding: 4px;
`;

const P = styled.p`
  font-size: 0.7rem;
  font-style: italic;
`;

export default EditDrink;
