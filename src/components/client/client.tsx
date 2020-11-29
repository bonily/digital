import React from 'react';
import styled from 'styled-components';
import {MAIN_TEXT_FONT, MAX_WIDTH_DESKTOP, H2, P} from '../../const';

const clients = [`1`, `2`, `3`, `4`, `5`, `6`, `7`];

const ClientSection = styled.section`
  max-width: ${MAX_WIDTH_DESKTOP};

  margin-left: auto;
  margin-right: auto;
  padding-left: 14%;
  padding-top: 6%;
  padding-bottom: 125px;


  background: #5A98D0;
  border-radius: 200px 0px 0px 0px;

  box-sizing: border-box;
`;

const H2Client = styled(H2)`
  display: inline-block;
  max-width: 230px;

  margin-bottom: 20px;
`;

const ClientP = styled(P)`
  position: relative;
  display: inline-block;
  max-width: 540px;
  top: -10px;

  padding: 0;
  margin: 0;
  margin-bottom: 115px;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 940px;

  margin: 0;
  padding: 0;

  list-style: none;
`;

const Li = styled.li`
  width: 25%;

  padding-top: 41px;
  padding-bottom: 43px;

  margin: 0;

  font-family: ${MAIN_TEXT_FONT};
  font-size: 20px;
  line-height: 46px;
  text-transform: uppercase;
  text-align: center;

  letter-spacing: 0.02em;

  color: #F2F2F2;
  box-sizing: border-box;

  &:nth-child(-n+4) {
    border-bottom: 1px solid #FFFFFF;
  }
  &:nth-child(-n+7) {
    &:not(:nth-child(4)) {
    border-right: 1px solid #FFFFFF;
    }
  }
  &:last-child {
    text-transform: none;
  }
`;

const Client: React.FunctionComponent = () => {
  return (
    <ClientSection>
      <H2Client>Our Beloved Client</H2Client>
      <ClientP>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</ClientP>
      <Ul>
        {clients.map((client, i) => {
          return (
            <Li key = {i}>logo client {client}</Li>
          );
        })}
        <Li style={{background: `rgb(31,63,104, 0.2)`}}>More clients</Li>
      </Ul>
    </ClientSection>
  );
};

export default Client;
