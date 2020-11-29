import React from 'react';
import styled from 'styled-components';
import {MAIN_TEXT_FONT, MAX_WIDTH_DESKTOP, H2, P} from '../../const';
import {Link} from 'react-router-dom';

// eslint-disable-next-line
const FooterBlock = styled.footer<{color: string}>`
  max-width: ${MAX_WIDTH_DESKTOP};

  margin-left: auto;
  margin-right: auto;
  padding-right: 6.3%;

  font-family: ${MAIN_TEXT_FONT};

  background: ${({color}) => color};

  box-sizing: border-box;
`;

const FooterWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  padding-left: 17%;
  padding-top: 7%;
  padding-bottom: 50px;

  background: #316099;
  border-radius: 0px 200px 0px 0px;

  box-sizing: border-box;
`;

const H2Footer = styled(H2)`
  max-width: 317px;

  margin-bottom: 15px;
`;

const FooterP = styled(P)`
  max-width: 460px;
`;

const Button = styled(Link)`
  position: absolute;
  display: block;
  top: 19%;
  right: 15.5%;

  width: 220px;

  padding-top: 15px;
  padding-bottom: 15px;

  font-family: ${MAIN_TEXT_FONT};
  font-size: 16px;
  line-height: 26px;

  text-align: center;
  letter-spacing: 0.04em;
  text-decoration: none;

  color: #FFFFFF;

  background: #5A98D0;
  border-radius: 10px;
`;

const FooterContactsDiv = styled.div`
  display: flex;

  max-width: 1073px;

  margin-top: 9.5%;
  margin-left: -20%;
  padding-left: 20%;
  padding-top: 9.2%;

  border-top: 1px solid rgb(255, 255, 255, 0.4);
  box-sizing: border-box;
`;

const ContactWrapper = styled.div`
  margin-right: 65px;
  margin-bottom: 25px;
`;

const FooterLogo = styled.img`
  margin-bottom: 26px;
`;

const AdressP = styled(P)`
  max-width: 300px;

  margin: 0;
  margin-bottom: 23px;
  padding-left: 35px;

  opacity: 1;

  a {
    margin-left: 5px;
    color: #FFFFFF;
    text-decoration: none;
  }
`;

const AdressSpan = styled.span`
  margin-left: -35px;
  margin-right: 18px;
`;

const AboutUsWrapper = styled.div`
  margin-right: 78px;

`;

const H3Footer = styled.h3`
  margin: 0;
  margin-bottom: 32px;
  padding: 0;

  font-family: ${MAIN_TEXT_FONT};
  font-size: 20px;
  line-height: 30px;

  letter-spacing: 0.05em;

  color: #FFFFFF;
`;

const FooterUl = styled.ul`
  list-style: none;

  margin: 0;
  padding: 0;

  font-family: ${MAIN_TEXT_FONT};
  font-size: 16px;
  line-height: 26px;

  letter-spacing: 0.05em;

  color: #FFFFFF;

  li {
    padding-bottom: 16px;
    a{
      text-decoration: none;
      color: #FFFFFF;
    }
  }
`;

const AllRightP = styled(P)`
  opacity: 0.4;
`;

const scroll = () => {
  window.scrollTo(pageXOffset, 0);
};

interface Props {
  bgColor: string;
}

const Footer: React.FunctionComponent<Props> = (props: Props) => {
  const {bgColor} = props;

  return (
    <FooterBlock color = {bgColor}>
      <FooterWrapper>
        <H2Footer>Intersted to woek with our team?</H2Footer>
        <FooterP>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</FooterP>
        <Button to='/contact' onClick={() => scroll()}>Let’s Talk</Button>
        <FooterContactsDiv>
          <ContactWrapper>
            <Link to={`/`} onClick={() => scroll()}>
              <FooterLogo src = "./img/logo_footer.png" />
            </Link>
            <AdressP><AdressSpan>A.</AdressSpan>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</AdressP>
            <AdressP><AdressSpan>T.</AdressSpan><a href='+62-812-7313-4321'>+62-812-7313-4321</a></AdressP>
            <AdressP><AdressSpan>E</AdressSpan><a href='hello.afrian@gmail.com'>&nbsp;hello.afrian@gmail.com</a></AdressP>
          </ContactWrapper>
          <AboutUsWrapper>
            <H3Footer>About US</H3Footer>
            <FooterUl>
              <li><a href = '#'>About</a></li>
              <li><a href = '#'>What We Do</a></li>
              <li><a href = '#'>Project</a></li>
              <li><a href = '#'>How It Work With Us</a></li>
            </FooterUl>
          </AboutUsWrapper>
          <AboutUsWrapper>
            <H3Footer>Follow US</H3Footer>
            <FooterUl>
              <li><a href = '#'>Instagram</a></li>
              <li><a href = '#'>Facebook</a></li>
              <li><a href = '#'>LinkedIn</a></li>
              <li><a href = '#'>Youtube</a></li>
            </FooterUl>
          </AboutUsWrapper>
        </FooterContactsDiv>
        <AllRightP>2019 © Afrianska. All rights reserved.</AllRightP>
      </FooterWrapper>
    </FooterBlock>
  );
};


export default Footer;
