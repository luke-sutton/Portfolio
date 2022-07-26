import styled from "styled-components";

export const AboutContainer = styled.div`
    color: black;
    background: white;
    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const AboutWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 1000px;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

export const AboutRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: "col1 col2";
    @media screen and (max-width: 768px) {
        grid-template-areas: "col1 col1" "col2 col2";
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0px 15px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0px 15px;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`;

export const AboutP = styled.p`
    color: black;
    font-size: 24px;
    line-height: 25px;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600px;
    color: black;
    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`;
