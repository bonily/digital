import React from 'react';
import styled from 'styled-components';
import {MAIN_TEXT_FONT, MAX_WIDTH_DESKTOP} from '../../const';

const clients = [`1`, `2`, `3`, `4`, `5`, `6`, `7`];

const ClientSection = styled.section`
  width: ${MAX_WIDTH_DESKTOP};

  margin-left: auto;
  margin-right: auto;
  padding-left: 214px;
  padding-top: 93px;


  background: #5A98D0;
  border-radius: 200px 0px 0px 0px;

  box-sizing: border-box;
`;

const H2 = styled.h2`
  display: inline-block;
  max-width: 230px;


  margin: 0;
  margin-right: 89px;


  font-family: ${MAIN_TEXT_FONT};
  font-size: 36px;
  line-height: 46px;

  letter-spacing: 0.05em;

  color: #FFFFFF;
`;

const ClientP = styled.p`
  position: relative;
  display: inline-block;
  max-width: 540px;
  top: -10px;

  padding: 0;
  margin: 0;
  margin-bottom: 123px;

  font-family: Gilroy;
  font-size: 16px;
  line-height: 26px;

  letter-spacing: 0.05em;

  color: #FFFFFF;
  opacity: 0.6;
`;

const Ul = styled.ul`
  display: flex;

  margin: 0;
  padding: 0;

  list-style: none;
`;

const Li = styled.li`
  max-width: 235px;

  padding: 41px 46px;

  margin: 0;
`;

const Client = () => {
  return (
    <ClientSection>
      <H2>Our Beloved Client</H2>
      <ClientP>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</ClientP>
      <Ul>
        {clients.map((client, i) => {
          return (
            <Li key = {i}>logo client {client}</Li>
          );
        })}
      </Ul>
    </ClientSection>
  );
};

export default Client;
