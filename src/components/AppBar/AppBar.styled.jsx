import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 6px;
`;

export const Header = styled.header`
  background-color: aliceblue;
  width: auto;

  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderNav = styled.nav`
  display: flex;
`;

export const AuthBtn = styled(NavLink)`
  margin-right: 10px;
  display: block;
  width: 55px;
  background-color: #efefef;
  padding: 5px 5px;

  border: 1px solid silver;
  border-radius: 15px;
  text-decoration: none;
  text-align: center;
  font-size: 14px;
  font-weight: 500;

  transition-property: color, background-color, border;
  transition-duration: 250ms;
  transition-timing-function: ease;

  &:visited {
    color: black;
  }
  &:hover,
  &:focus {
    outline: none;
    /* color: skyblue; */
    border: 1px solid skyblue;
  }
  &.active {
    color: #fff;
    background-color: skyblue;
    border: 1px solid skyblue;
  }
`;

export const HeaderTitle = styled.h2`
  font-family: cursive;
  padding: 0;
  margin: 0;
`;

export const HeaderNavBtn = styled.button`
  background-color: #e1ecf4;
  border-radius: 15px;
  border: 1px solid #7aa7c7;
  box-shadow: rgba(255, 255, 255, 0.7) 0 1px 0 0 inset;
  box-sizing: border-box;
  color: #39739d;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, 'Segoe UI', 'Liberation Sans',
    sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.15385;
  margin: 0;
  outline: none;
  padding: 8px 0.8em;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  white-space: nowrap;

  .button-8:hover,
  .button-8:focus {
    background-color: #b3d3ea;
    color: #2c5777;
  }

  .button-8:focus {
    box-shadow: 0 0 0 4px rgba(0, 149, 255, 0.15);
  }

  .button-8:active {
    background-color: #a0c7e4;
    box-shadow: none;
    color: #2c5777;
  }
`;
