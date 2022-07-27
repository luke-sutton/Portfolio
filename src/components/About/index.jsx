import React from "react";

import myImage from "./../../images/IMG_0134.jpeg";

import {
    AboutContainer,
    AboutWrapper,
    AboutRow,
    Column1,
    Column2,
    TextWrapper,
    AboutP,
    Heading,
    ImgWrap,
    Img,
} from "./AboutElements";

const About = () => {
    return (
        <>
            <AboutContainer id="about">
                <AboutWrapper>
                    <AboutRow>
                        <Column1>
                            <TextWrapper>
                                <Heading>About Me</Heading>
                                <AboutP>
                                    My name is Luke Sutton and I live in
                                    Norwich, England. I am a web developer with
                                    a keen interest in development and
                                    consistantly improving my skills. When I am
                                    not developing I enjoy, movies, games,
                                    books, listening to music and playing
                                    guitar.
                                </AboutP>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={myImage} />
                            </ImgWrap>
                        </Column2>
                    </AboutRow>
                </AboutWrapper>
            </AboutContainer>
        </>
    );
};

export default About;
