import React, {useState, useEffect} from 'react'; 

//import styled components
import FormDiv from '../styles/FormDiv';
import Label from '../styles/Label';
import Input from '../styles/Input';
import Button from '../styles/Button';
import Error from '../styles/Error';

function AddDrinkForm() {
    const [drinkType, setDrinkType] = useState("")
    const [hydrationLevel, setHydrationLevel] = useState("")
    const [descriptions, setDescriptions] = useState([])
    const [location, setLocation] = useState("")
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

useEffect(() => { 
    fetch('/descriptions')
    .then(r => { 
        if (r.ok) { 
            r.json().then(description => setDescriptions(description))
        }
    })
}, [])

    function handleSubmit(e) { 
        e.preventDefault()
        setIsLoading(true)
    }

  return (
    <form onSubmit={handleSubmit}> 
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
            <Input 
            type="text"
            id="hydrationLevel"
            value={hydrationLevel}
            onChange={(e) => setHydrationLevel(e.target.value)}
            />
        </FormDiv>
        <FormDiv>
            <Label>Description: </Label>
            <select name="descriptions">
                {descriptions.map(description => { 
                <option key={description} value={description}>{description}</option>
            })}
            </select>
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
            <Button type="submit" bg ='#000080' color='#fff'>
                {isLoading ? "Loading..." : "Add to dashboard!"}
            </Button>
        </FormDiv>
        <FormDiv> 
            {errors.map(error => (
                <Error key={error}>{error}</Error>
            ))} 
        </FormDiv>
    </form>
  )
}

export default AddDrinkForm