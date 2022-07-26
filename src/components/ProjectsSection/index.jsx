import React from "react";
import Icon1 from "../../images/portfolio.png";
import Icon2 from "../../images/under-construction.jpg";
import {
    ProjectsContainer,
    ProjectsH1,
    ProjectsWrapper,
    ProjectsIcon,
    ProjectsCard,
    ProjectsH2,
    ProjectsP,
} from "./ProjectsElements";

const Services = () => {
    return (
        <ProjectsContainer id="projects">
            <ProjectsH1>Projects</ProjectsH1>
            <ProjectsWrapper>
                <ProjectsCard>
                    <ProjectsIcon src={Icon1} />
                    <ProjectsH2>Portfolio</ProjectsH2>
                    <ProjectsP>
                        This website! Built uisng react, react-router, and
                        styled components.
                    </ProjectsP>
                </ProjectsCard>
                <ProjectsCard>
                    <ProjectsIcon src={Icon2} />
                    <ProjectsH2>Blog</ProjectsH2>
                    <ProjectsP>
                        Work in progress. A web dev blog built using the MERN
                        stack.
                    </ProjectsP>
                </ProjectsCard>
                <ProjectsCard>
                    <ProjectsIcon src={Icon2} />
                    <ProjectsH2>Budgeting App</ProjectsH2>
                    <ProjectsP>
                        Work in progress. A budgeting app to be built using
                        either MERN or Swift.
                    </ProjectsP>
                </ProjectsCard>
            </ProjectsWrapper>
        </ProjectsContainer>
    );
};

export default Services;
