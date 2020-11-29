import React from 'react';
import styled from 'styled-components';
import {MAIN_TEXT_FONT, MAX_WIDTH_DESKTOP} from '../../const';

const ContactSection = styled.section`
  max-width: ${MAX_WIDTH_DESKTOP};

  padding-bottom: 89px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 36px;

  font-family: ${MAIN_TEXT_FONT};
  box-sizing: border-box;
`;

const TitleDiv = styled.div`
  width: 100%;

  padding-top: 48px;
  padding-bottom: 50px;

  background: url('./img/title-contact.jpg') no-repeat;
`;

const H2 = styled.h2`
  margin: 0;
  margin-bottom: 20px;

  font-size: 44px;
  line-height: 74px;

  text-align: center;
  letter-spacing: 0.04em;

  color: #FFFFFF;
`;

const P = styled.p`
  max-width: 780px;

  margin: 0;
  margin-left: auto;
  margin-right: auto;

  font-size: 20px;
  line-height: 30px;

  text-align: center;
  letter-spacing: 0.04em;

  color: rgba(255, 255, 255, 0.6);
`;

const InfoDiv = styled.div`
  display: flex;
  justify-content: space-between;

  padding-top: 58px;
  padding-left: 15.7%;
  padding-right: 15.6%;

  margin-bottom: 95px;

  box-sizing: border-box;
`;

const Contacts = styled.div`
  margin-top: 62px;
  margin-right: 103px;
  padding-top: 250px;

  color: #1F3F68;

  background: url('./img/info.png') no-repeat 11px 0px;
`;

const H3 = styled.h3`
  margin: 0;
  margin-bottom: 25px;
  font-size: 20px;
  line-height: 30px;

  letter-spacing: 0.04em;
`;

const ContactP = styled.p`
  max-width: 360px;

  margin: 0;
  margin-bottom: 42px;
  font-size: 16px;
  line-height: 26px;

  letter-spacing: 0.04em;

  opacity: 0.6;
  box-sizing: border-box;
`;

// eslint-disable-next-line
const ContactA = styled.a<{type: string}>`
  display: block;
  position: relative;

  margin-bottom: 16px;
  padding-left: 40px;

  text-decoration: none;

  color: #1F3F68;

  opacity: 0.6;

  &::before {
    content: '';
    display: block;
    position: absolute;

    left: 0px;
    width: 24px;
    height: 24px;

    background: ${({type}) => {
    switch (type) {
      case `phone`:
        return `url(./img/phone-icon.svg)`;
      case `internet`:
        return `url(./img/internet-icon.svg)`;
      case `email`:
        return `url(./img/email-icon.svg)`;
    }
    return ``;
  }}
  }
`;

const Form = styled.form`
  max-width: 540px;

  padding: 56px;

  box-shadow: 5px 10px 50px rgba(16, 112, 177, 0.2);
  border-radius: 10px;
  box-sizing: border-box;
`;

const Label = styled.label`
  font-size: 16px;
  line-height: 47px;

  letter-spacing: 0.04em;

  opacity: 0.8;
`;

const Input = styled.input`
  width: 100%;
  min-height: 72px;

  margin-bottom: 24px;
  padding-left: 35px;
  padding-top: 5px;

  vertical-align: center;

  border: 1px solid #356EAD;
  border-radius: 10px;
  box-sizing: border-box;

  &::placeholder {
    padding-top: 5px;

    font-size: 16px;
    line-height: 30px;

    letter-spacing: 0.04em;

    color: #1F3F68;
    opacity: 0.2;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  min-height: 144px;

  margin-bottom: 68px;
  padding-left: 36px;
  padding-top: 18px;

  font-family: ${MAIN_TEXT_FONT};

  border: 1px solid #356EAD;
  border-radius: 10px;
  box-sizing: border-box;

  &::placeholder {

    font-size: 16px;
    line-height: 30px;


    letter-spacing: 0.04em;

    color: #1F3F68;
    opacity: 0.2;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 72px;

  padding-left: 11px;

  font-size: 16px;
  line-height: 20px;

  text-align: center;
  letter-spacing: 0.04em;

  color: #FFFFFF;

  background: #5A98D0;

  box-shadow: 5px 20px 50px rgba(16, 112, 177, 0.2);
  border: none;
  border-radius: 10px;
`;

const ImgDiv = styled.div`
  max-width: 940px;

  margin-left: auto;
  margin-right: auto;
`;

const ImgMap = styled.img`
  width: 100%;
`;

const ContactPage: React.FunctionComponent = () => {
  return (
    <ContactSection>
      <TitleDiv>
        <H2>Contact Us</H2>
        <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</P>
      </TitleDiv>
      <InfoDiv>
        <Contacts>
          <H3>ADDRESS</H3>
          <ContactP>Id convallis placerat sit sed duis id amet volutpat quam a, pharetra.</ContactP>
          <H3>PHONE</H3>
          <ContactP>
            <ContactA href="+62-812-7313-4321" type='phone'>+62-812-7313-4321</ContactA>
            <ContactA href="+62-817-000-1234" type='phone'>+62-817-000-1234</ContactA>
          </ContactP>
          <H3>ONLINE SERVICE</H3>
          <ContactP>
            <ContactA href="www.afrianska.com" type='internet'>www.afrianska.com</ContactA>
            <ContactA href="hello.afrian@gmail.com" type='email'>hello.afrian@gmail.com</ContactA>
          </ContactP>
        </Contacts>
        <Form>
          <H3 style={{marginBottom: `38px`}}>SEND US MESSAGE</H3>
          <Label htmlFor='name'>Full Name</Label>
          <Input id='name' type='text' placeholder='Your Name'></Input>
          <Label htmlFor='email'>Email</Label>
          <Input id='email' type='text' placeholder='Your Email'></Input>
          <Label htmlFor='message'>Message</Label>
          <Textarea id='message' placeholder='Your message' ></Textarea>
          <Button>SUBMIT</Button>
        </Form>
      </InfoDiv>
      <ImgDiv>
        <ImgMap src='./img/map.jpg' />
      </ImgDiv>
    </ContactSection>
  );
};

export default ContactPage;
