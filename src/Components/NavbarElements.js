import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: #00008b;
  border-color: transparent;

  height: auto;
  //   display: flex;

  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2) 0.2rem 0;
  z-index: 9;

  @media screen and (max-width: 768px) {
    // display: flex;
  }
`;

export const NavLink = styled(Link)`
  color: #fff;
  align-items: center;
  text-decoration: none;
  padding: 1rem 0.5rem;
  height: 100%;
  cursor: pointer;
  position: relative;
  font-family: Arial;
  font-size: 14px;
  
  &:hover {
    color: goldenrod;
  }

  &.active {
    color: #ffae00;
    background-color: #001441;
`;

export const Bars = styled(FaBars)`

  display: flex-inline;
  color: white;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;

  }
`;
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  white-space: nowrap;
  margin-left: 100px;
  @media screen and (max-width: 1200px) {
    justify-content: space-between;
    //  display: flex;
  }
`;
