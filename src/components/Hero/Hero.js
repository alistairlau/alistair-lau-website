import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading, MainHeadingName } from '../../globalStyles';
import { HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyles';

function Hero() {
  return (
    <HeroSection>
        <HeroVideo src='./assets/pexelsVideo1.mp4' autoPlay muted></HeroVideo>
        <Container>
            <MainHeading>Hi There, I'm</MainHeading>
            <MainHeadingName>Alistair Lau</MainHeadingName>
            <HeroText>
               Front End Developer
            </HeroText>
            <HeroText>
            & welcome to my personal blog.
            </HeroText>
            <ButtonWrapper>
                {/* <Link to='signup'>
                    <Button>Contact Me</Button>
                </Link> */}
            </ButtonWrapper>
        </Container>
    </HeroSection>
  );
};

export default Hero