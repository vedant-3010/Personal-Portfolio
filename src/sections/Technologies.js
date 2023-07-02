import React from "react";
import styled from "styled-components";
import { Container, Div } from "../styles/Styles";
import Techstack from "../components/Techstack";
import { motion } from "framer-motion";
import { slideAnim } from "../animation";
import { useScroll } from "../util/useScroll";
import {
  faCode,
  faDatabase,
  faLaptop,
  faRuler,
} from "@fortawesome/free-solid-svg-icons";

const backend = {
  title: "BACK END",
  technologies: ["NodeJS", "ExpressJS", "TypeScript", "Prisma"],
};

const frontend = {
  title: "FRONT END",
  technologies: ["CSS3","HTML5", "JavaScript", "ReactJS", "Redux", "NextJS"],
};

const database = {
  title: "DATABASE",
  technologies: ["SQL", "MongoDB"],
};

const styling = {
  title: "STYLING",
  technologies: [
    "SCSS",
    "Chakra UI",
    "Material UI",
    "TailwindCSS",
    "Styled Components",
  ],
};

const Technologies = () => {
  const [ref, controls] = useScroll();

  return (
    <Div>
      <StyledTechnologies animate={controls} ref={ref} variants={slideAnim.up}>
        <Header>TECHNOLOGIES I'VE USED</Header>
        <Grid>
          <Techstack
            icon={faLaptop}
            title={frontend.title}
            technologies={frontend.technologies}
          />
          <Techstack
            icon={faRuler}
            title={styling.title}
            technologies={styling.technologies}
          />

          <Techstack
            icon={faCode}
            title={backend.title}
            technologies={backend.technologies}
          />

          <Techstack
            icon={faDatabase}
            title={database.title}
            technologies={database.technologies}
          />
        </Grid>
      </StyledTechnologies>
    </Div>
  );
};

const StyledTechnologies = styled(Container)`
  flex-direction: column;
`;

const Header = styled.h3`
  margin-bottom: 4rem;
`;

const Grid = styled(motion.div)`
  width: 100%;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  text-align: center;
`;

export default Technologies;
