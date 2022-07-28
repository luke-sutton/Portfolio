import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaLinkedin, FaTwitter, FaGithub, FaCodepen } from "react-icons/fa";
import {
    FooterContainer,
    FooterWrap,
    SocialIconLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
} from "./FooterElements";

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>
                            Luke Sutton
                        </SocialLogo>
                        <WebsiteRights>
                            Luke Sutton {new Date().getFullYear()} All rights
                            reserved ®
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink
                                href="//www.github.com/luke-sutton"
                                target="_blank"
                                aria-label="Github"
                            >
                                <FaGithub />
                            </SocialIconLink>
                            <SocialIconLink
                                href="//www.codepen.io/lambdaluke"
                                target="_blank"
                                aria-label="Github"
                            >
                                <FaCodepen />
                            </SocialIconLink>
                            <SocialIconLink
                                href="//www.twitter.com/lamdaluke"
                                target="_blank"
                                aria-label="Twitter"
                            >
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink
                                href="//www.linkedin.com/in/luke-sutton-76608412a/"
                                target="_blank"
                                aria-label="Linkedin"
                            >
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;
