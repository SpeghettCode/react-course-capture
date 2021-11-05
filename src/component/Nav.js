import react from "react";
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <StyledNav>
            <h1><Link to="/" id="logo">Capture</Link></h1>
            <ul>
                <li>
                    <Link to="/">1. About Us</Link>
                </li>
                <li>
                    <Link to="/work">2. Our Work</Link>
                </li>
                <li>
                    <Link to="/contact">3. Contact Us</Link>
                </li>
            </ul>
        </StyledNav>
    );
}

// styled components
const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    padding: 1rem 10rem;
    background: #282828;
    position: sticky;
    top: 0;
    z-index: 10;

    a {
        color: #fff;
        text-decoration: none;
    }

    ul {
        display: flex;
        list-style: none;
    }

    #logo {
        font-size: 1.5rem;
        font-family: 'Lobster', cursive;
        font-weight: lighter;
    }

    li {
        margin-left: 10rem;
        padding: 0.5rem;
        position: relative;
        cursor: pointer;
    }

    li::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 3px;
        background: #23d997;
        transition: all 0.3s ease;
    }

    li:hover::after {
        width: 100%;
    }
`;

export default Nav;