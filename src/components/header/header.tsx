import React from 'react';
import styled from 'styled-components';
import {MAX_WIDTH_DESKTOP} from '../../const';
import {Link} from 'react-router-dom';


const HeaderBlock = styled.header`
  display: flex;
  justify-content: space-between;
  position: relative;

  max-width: ${MAX_WIDTH_DESKTOP};

  margin-right: auto;
  margin-left: auto;
  padding-left: 5.5%;
  padding-right: 5.5%;
  padding-top: 40px;

  z-index: 1;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: 32px;
  height: 48px;

  padding: 0;

  background: url("./img/menu_burger.svg") no-repeat center;
  background-size: 32px 32px;

  border: none;
`;

const Header: React.FunctionComponent = () => {
  return (
    <HeaderBlock>
      <Link to={`/`} onClick={() => scroll()}>
        <img src = "./img/logo.svg" width = "48px" height = "48px" alt = "Лого компании"/>
      </Link>
      <Button></Button>
    </HeaderBlock>
  );
};

export default Header;
