import React, {useState, useEffect} from 'react'; 
import { useHistory } from 'react-router-dom';

//import styled components
import styled from 'styled-components';
import FormDiv from '../styles/FormDiv';
import Label from '../styles/Label';
import Input from '../styles/Input';
import Button from '../styles/Button';
import Error from '../styles/Error';

function AddDrinkForm() {
    const [drinkType, setDrinkType] = useState("")
    const [hydrationLevel, setHydrationLevel] = useState("")
    const [content, setContent] = useState("")
    const [contentId, setContentId] = useState("")
    const [location, setLocation] = useState("")
    const [descriptions, setDescriptions] = useState([])
    const [errors, setErrors] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    // const history = useHistory()


    useEffect(() => {
        if(content !== ""){
          const filteredDescription = descriptions.find(description => { 
            return description.content === content
          })
      
          setContentId(filteredDescription.id)
        }
      }, [content])

    useEffect(() => { 
        fetch('/descriptions')
        .then(r => { 
            if (r.ok) { 
                r.json().then(description => setDescriptions(description))
            }
        })
    },[])

    function handleSubmit(e) { 
        e.preventDefault()
        setIsLoading(true)
        fetch('/drinks', { 
            method: "POST", 
            headers: { 
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                drink_type: drinkType, 
                hydration_level: hydrationLevel, 
                content, 
                location,
                description_id: parseInt(contentId),
            }),
        }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
                console.log("hello")
                // history.push("/dashboard");
            } else {
              r.json().then((err) => setErrors(err.errors));
            }
          });
        }

  return (
    <Wrapper>
        <Header>Add a drink! </Header>
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
                <Select name="descriptions" id="descriptions" defaultValue="default" onChange={(e) => setContent(e.target.value)}>
                    <option value="default" disabled >Choose here</option>
                    {descriptions.map(description => {
                        return <option key={description.id} value={description.content}>{description.content}</option>
                })}
                </Select>
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
    </Wrapper>
  )
}

const Header = styled.h1`
    font-family: "Permanent Marker";
    font-size: 2.5rem;
    color: #ADD8E6;
    margin: 8px 0 5px;
`

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
`

export default AddDrinkForm;