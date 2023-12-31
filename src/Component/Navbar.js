import React, { useState } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../images/navlogo.png";
import discordLogo from '../images/discord.png'

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)


  return (
    <>
      <div className="Parentnavbar position-relative">
        <div className="logo font-weight-bold">
          <img style={{ height: "35px", marginLeft: "10px" }} src={logo} />
        </div>
        <ul className="navul">
          <li className="active nav-item">
            <NavLink className={"nav-link"} to="/" style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : ""
              };
            }}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink className={"nav-link"} to="/book" style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : ""
              };
            }}>

              Web3 Book
            </NavLink>
          </li>
          <li>
            <NavLink className={"nav-link"} to="/web3course" style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : ""
              };
            }}>

              Web3 Course
            </NavLink>
          </li>

          {/* <li> <NavLink className={"nav-link"} to="/Blog" style={({ isActive }) => {
            return { fontWeight: isActive ? "bold" : "" }
          }}>
            Blog
          </NavLink>
          </li> */}
          <li>
            <NavLink className={"nav-link"} to="/About" style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : ""
              };
            }}>

              About us
            </NavLink>
          </li>
          {/* <li className="nav-item">
            <NavLink className={"nav-link"} to="/contact" style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : ""
              };
            }}>
              Contact
            </NavLink>
          </li> */}
          {/* <li>Ambassador</li> */}
        </ul>
        {/* <img src={discordLogo} className="navdiscordBtn" alt="Discord logo" /> */}
        <button className="navbutton bg-dark text-white">Login</button>
        <button className="bg-transparent border-0 nav-burger" onClick={() => { setToggleMenu(true) }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M28 16C28 16.2652 27.8946 16.5196 27.7071 16.7071C27.5196 16.8946 27.2652 17 27 17H5C4.73478 17 4.48043 16.8946 4.29289 16.7071C4.10536 16.5196 4 16.2652 4 16C4 15.7348 4.10536 15.4804 4.29289 15.2929C4.48043 15.1054 4.73478 15 5 15H27C27.2652 15 27.5196 15.1054 27.7071 15.2929C27.8946 15.4804 28 15.7348 28 16ZM5 9H27C27.2652 9 27.5196 8.89464 27.7071 8.70711C27.8946 8.51957 28 8.26522 28 8C28 7.73478 27.8946 7.48043 27.7071 7.29289C27.5196 7.10536 27.2652 7 27 7H5C4.73478 7 4.48043 7.10536 4.29289 7.29289C4.10536 7.48043 4 7.73478 4 8C4 8.26522 4.10536 8.51957 4.29289 8.70711C4.48043 8.89464 4.73478 9 5 9ZM27 23H5C4.73478 23 4.48043 23.1054 4.29289 23.2929C4.10536 23.4804 4 23.7348 4 24C4 24.2652 4.10536 24.5196 4.29289 24.7071C4.48043 24.8946 4.73478 25 5 25H27C27.2652 25 27.5196 24.8946 27.7071 24.7071C27.8946 24.5196 28 24.2652 28 24C28 23.7348 27.8946 23.4804 27.7071 23.2929C27.5196 23.1054 27.2652 23 27 23Z" fill="black" />
          </svg>
        </button>
        {
          toggleMenu ?
            <div className="navbar-menu">
              <h1 className="close-navbar-menu" >
                <span onClick={() => { setToggleMenu(false) }}>X</span></h1>
              <ul className="navbar-menu-ul">
                <li className="active nav-item">
                  <NavLink className={"nav-link"} to="/" style={({ isActive }) => {
                    return { fontWeight: isActive ? "bold" : "" }
                  }}>Home</NavLink>
                </li>
                <li>
                  <NavLink className={"nav-link"} to="/About" style={({ isActive }) => {
                    return { fontWeight: isActive ? "bold" : "" }
                  }}> About us </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={"nav-link"} to="/contact" style={({ isActive }) => {
                    return { fontWeight: isActive ? "bold" : "" }
                  }}>Contact</NavLink>
                </li>
                <li> <NavLink className={"nav-link"} to="/Blog" style={({ isActive }) => {
                  return { fontWeight: isActive ? "bold" : "" }
                }}>  Blog</NavLink></li>
                <li>Ambassador</li>
              </ul>
              {/* <img src={discordLogo} alt="Discord logo"/> */}
              <button className="navbar-menu-btn bg-white text-dark">Login</button>
            </div> : null
        }

      </div>

    </>
  );
}
