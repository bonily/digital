import React from 'react';
import styled from 'styled-components';
import Animation from '../amnimation/animation';
import {MAX_WIDTH_DESKTOP, TITLE_FONT, MAIN_TEXT_FONT} from '../../const';
import WhatWeDo from '../what-we-do/what-we-do';
import Client from '../client/client';


const MainBlock = styled.main`
  box-sizing: border-box;
`;

const ArticleBlock = styled.article`
  max-width: ${MAX_WIDTH_DESKTOP};
  position: relative;

  margin-left: auto;
  margin-right: auto;
  padding-left: 14%;
  padding-top: 6%;
  padding-bottom: 190px;

  background: linear-gradient(0deg, rgba(152, 195, 232, 0.2) 8.84%, rgba(152, 195, 232, 0) 31.12%);
  box-sizing: border-box;
`;

const H1 = styled.h1`
  max-width: 510px;

  margin: 0;
  margin-bottom: 3.8%;

  font-family: ${TITLE_FONT};
  font-size: 64px;
  line-height: 74px;
  letter-spacing: 0.04em;
  color: #1F3F68;
`;

const AboutAsP = styled.p`
  max-width: 425px;

  padding: 0;
  margin: 0;
  margin-bottom: 6.7%;

  font-family: ${MAIN_TEXT_FONT};
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0.05em;

  color: #1F3F68;
  opacity: 0.6;
`;

const Button = styled.a`
  display: block;
  position: relative;
  width: 220px;

  padding-top: 15px;
  padding-bottom: 15px;

  font-family: ${MAIN_TEXT_FONT};
  font-size: 16px;
  line-height: 26px;
  text-decoration: none;

  text-align: center;
  letter-spacing: 0.04em;

  color: #FFFFFF;

  background: #5A98D0;
  box-shadow: 5px 10px 20px rgba(53, 110, 173, 0.2);
  border: none;
  border-radius: 10px;
`;

const Main: React.FunctionComponent = () => {
  return (
    <MainBlock>
      <ArticleBlock style={{position: `relative`}}>
        <H1>New Automation Tool for Your Home</H1>
        <AboutAsP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus tristique vulputate ultrices ut mauris tellus at. Posuere sollicitudin odio tellus elit.</AboutAsP>
        <Button href = "#">See Our Project</Button>
        <Animation />
      </ArticleBlock>
      <WhatWeDo />
      <Client />
    </MainBlock>
  );
};

export default Main;
