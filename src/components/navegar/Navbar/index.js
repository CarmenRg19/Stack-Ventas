import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";
import image from "./Logo.png"
import './index.css'

const Navbar = () => {
    return (
        <>
            <Nav>
            <img className="logo" src={image} width="60px" height='60px'></img>
                <NavMenu >
                <NavLink to="/inicio" className= "texto" activeStyle>
                    Inicio
                </NavLink>
                <NavLink to="/login" className= "texto" activeStyle>
                        Login
                </NavLink>
                <NavLink to="/carrito" className= "texto" activeStyle>
                        Carrito
                </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;