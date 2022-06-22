import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
    font-size: 12px;
    position: sticky;
    top: 0;
    z-index: 999;
    height: 80px;
    background-color: #D3D3D3;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: center;
    align-items: center;
`
export const NavLink = styled(Link)`
    color: #000080;
    cursor: pointer;
    padding-right: 100px;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 2rem;
    font-weight: 800;
    transition: all .5s ease;
    &:hover{
        transform: scale(1.08);
        opacity: 0.8; 
    }
`

export const NavHomeLink = styled(Link)`
    color: #000080;
    cursor: pointer;
    padding-left: 30px;
    justify-content: flex-start;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 7.5rem;
    font-weight: 800;
    transition: all .5s ease;
    &:hover{
        transform: scale(1.08);
        opacity: 0.8; 
}
`