import React from "react";
import Video from "../../videos/video.mp4";

import {
    SkillsContainer,
    SkillsBg,
    VideoBg,
    SkillsContent,
    SkillsH1,
    SkillsP,
} from "./SkillsElelments";

const SkillsSection = () => {
    return (
        <SkillsContainer id="skills">
            <SkillsBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
            </SkillsBg>
            <SkillsContent>
                <SkillsH1>Skills / Tech</SkillsH1>
                <SkillsP>
                    At work - I am currently imployed as a full time web developer using .Net, SQL, Umbraco and Vue.
                </SkillsP>
                <SkillsP>
                    At home - For my own projects I am currently enjoying the MERN stack (MongoDB, Express, React and Node).
                </SkillsP>
            </SkillsContent>
        </SkillsContainer>
    );
};

export default SkillsSection;
