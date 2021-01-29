import styled from "styled-components";
import { Link } from "react-scroll";

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 24px;

    background: violet;

    height: 60px;
`;

export const NavMyName = styled(Link)`
    display: flex;
    justify-self: flex-start;
    align-items: center;

    font-weight: bold;
    font-size: 1.5em;

    cursor: pointer;
`;

export const NavMenu = styled.ul`
    display: flex;  

    align-items: center;
    text-align: center;
    list-style: none;    
`;

export const NavLinks = styled(Link)`
    padding: 1em;
`;

export const NavItem = styled.li`
    font-size: 1.5em;
`;

export const Linkedin = styled.img`
    height: 35px;
    width: 35px;
`;

export const GitHub = styled.img`
    height: 35px;
    width: 35px;

    padding-left: 1px;
`;