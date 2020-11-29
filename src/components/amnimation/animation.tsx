import React from 'react';
import styled, {keyframes} from 'styled-components';

const AnimationDiv = styled.div`
  position: absolute;
  top: 7%;
  left: 48%;

  width: 687.25px;
  height: 612.56px;

  background: url("./img/animation_bg.png") no-repeat;
  z-index: -1;;
`;

const Men = styled.img`
  position: absolute;

  top: 215px;
  left: 80px;
  `;

const Women = styled.img`
  position: absolute;

  top: -42px;
  left: 351px;
`;

const animationBb = keyframes `
  from {
    transform: rotate(0deg);
  }
  20% {
    transform: rotate(5deg);
  }
  40% {
    transform: rotate(-5deg);
  }
  60% {
    transform: rotate(3deg);
  }
  80% {
    transform: rotate(-2deg);
  }
  85 % {
    transform: rotate(1deg);
  }
  90% {
    transform: rotate(-1deg);
  }
  to {
    transform: rotate(0deg);
  }
`;

const AnimationBg = styled.img`
  position: relative;

  left: 20px;
  top: 17px;

  animation: 10s ${animationBb} ease-in-out infinite;
`;

const smallCircleAnimation = keyframes `
  from {
    top: 100%;
  }
  to {
    top: -100%;
  }
`;

const SmallCircle = styled.div`
  position: absolute;

  width: 16px;
  height: 16px;

  border-radius: 50%;

  background: rgba(255, 255, 255, 0.6);
  z-index: 2;
  animation: 10s ${smallCircleAnimation}  ease-in-out infinite;
`;

const FirstSmallCircle = styled(SmallCircle)`
  top: 308px;
  left: 105px;
  animation-delay: 2s;
`;

const SecondSmallCircle = styled(SmallCircle)`
  top: 417px;
  left: 270px;
  animation-delay: 1s;
`;

const TheirdSmallCircle = styled(SmallCircle)`
  top: 149px;
  left: 419px;
  animation-delay: 4s;
`;

const FourthSmallCircle = styled(SmallCircle)`
  top: 300px;
  left: 545px;
  animation-delay: 3s;
`;

const Animation: React.FunctionComponent = () => {
  return (
    <AnimationDiv>
      <AnimationBg src = "./img/animation.png" width = "646px" height = "490px" />
      <FirstSmallCircle />
      <SecondSmallCircle />
      <TheirdSmallCircle />
      <FourthSmallCircle />
      <Women src = "./img/women.png" width = "325px" height = "415px" />
      <Men src = "./img/men.png" width = "374px" height = "289px" />


    </AnimationDiv>
  );
};

export default Animation;
