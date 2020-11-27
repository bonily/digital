/* eslint-disable no-console */
import React from 'react';
import styled from 'styled-components';
import {MAIN_TEXT_FONT, MAX_WIDTH_DESKTOP} from '../../const';

const items = [{title: `Make Your business To Be Better Famous In Internet`, description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`, img: `famous_business`}, {title: `Bring Technology To Your Comfrotable Home`, description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`, img: `tehnology`}, {title: `Build Your Digital Product That Suitable For Your Need`, description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`, img: `digital`}];

const WeDoSection = styled.section`
  position: relative;
  max-width: ${MAX_WIDTH_DESKTOP};

  margin-right: auto;
  margin-left: auto;
`;

const WeDoBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 100px;
  grid-row-gap: 100px;

  padding-top: 190px;
  padding-left: 213px;
  padding-right: 213px;

  box-sizing: border-box;
`;

const H2 = styled.h2`
  position: absolute;
  top: 187px;
  left: 213px;
  max-width: 361px;;

  margin: 0;
  padding: 0;

  font-family: ${MAIN_TEXT_FONT};
  font-size: 36px;
  line-height: 46px;

  letter-spacing: 0.05em;

  color: #316099;
`;

const WeDoItem = styled.div`
  position: relative;
  display: block;
  width: 380px;
  height: 525px;

  padding-left: 48px;
  padding-right: 48px;

  box-shadow: 5px 20px 50px rgba(16, 112, 177, 0.2);
  border-radius: 10px;
  box-sizing: border-box;

  &:nth-child(1) {
    grid-row-start: 1;
    grid-row-end: 3;

    margin-top: 292px;
    margin-bottom: auto;
    margin-left: 80px;
  }

  &:last-child {
    margin-bottom: 212px;
  }
`;

// eslint-disable-next-line
const WeDoImg = styled.div<{img: string}>`
  position: relative;
  top: -17px;
  width: 232px;
  height: 202px;

  margin-left: ${({img}) => {
    if (img === `tehnology`) {
      return `30px`;
    } else if (img === `digital`) {
      return `8px`;
    }
    return 0;
  }};

  margin-bottom: 35px;

  background: ${({img}) => `url(./img/${img}.png)`} no-repeat bottom center;

`;

const H3Item = styled.h3`
  margin: 0;
  margin-bottom: 14px;

  font-family: ${MAIN_TEXT_FONT};
  font-size: 20px;
  line-height: 30px;

  letter-spacing: 0.05em;

  color: #1F3F68;
`;

const PItem = styled.p`
  margin: 0;
  margin-bottom: 32px;

  font-family: ${MAIN_TEXT_FONT};
  font-size: 16px;
  line-height: 26px;

  letter-spacing: 0.05em;

  color: #1F3F68;
  opacity: 0.6;
`;

const A = styled.a`
  display: block;
  position: relative;

  width: 127px;

  font-family: ${MAIN_TEXT_FONT};
  font-size: 14px;
  line-height: 30px;
  text-decoration: none;

  letter-spacing: 0.05em;

  color: #5A98D0;
`;

const ImgArrow = styled.img`
  position: relative;

  bottom: -9px;
  margin-left: 24px;
`;

const WhatWeDo = () => {
  return (
    <WeDoSection>
      <H2>What we do to help our client grow in digital era,</H2>
      <WeDoBlock>
        {items.map((item, i) => {
          console.log(item.img);
          return (<WeDoItem key = {i}>
            <WeDoImg img = {item.img} />
            <H3Item>{item.title}</H3Item>
            <PItem>{item.description}</PItem>
            <A href="#">Learn more
              <ImgArrow src="./img/arrow.svg" width = "24px" height = "24px"/>
            </A>
          </WeDoItem>);
        })}
      </WeDoBlock>
    </WeDoSection>


  );
};

export default WhatWeDo;
