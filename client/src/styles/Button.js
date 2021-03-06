import styled from "styled-components";

//#fff is white 
//#33 is charcoal

const Button = styled.button`
    border-radius: 50px;
    font-family: 'Nunito',sans-serif;
    border: none;
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    padding: 8px 20px;
    background-color: ${({bg}) => bg || '#fff'};
    color: ${({color}) => color || '#333'};

    &:hover{ 
        opacity: 0.8; 
        transform: scale(0.98);
    }
`

export default Button;