import React from "react";
import { Description, Social, Circle } from "../styles/Styles";
import styled from "styled-components";
import { motion } from "framer-motion";

function AboutMe() {
  return (
    <StyledAboutMe>
      <motion.p>
        I am a <span>MERN stack developer</span> with a passion for creating
        dynamic and engaging web applications. I have a strong foundation in
        <span> MongoDB</span>, <span> Express.js</span>, <span> React.js</span>, and <span> Node.js</span>, From crafting <span>interactive </span>
        front-end interfaces to designing efficient server-side architectures, I
        can turn ideas into functional, <span>high-performance</span>{" "}
        applications.
      </motion.p>{" "}
      <br />
      <p className="bold">Recent technologies I've used:</p>
      <Technologies>
        <Social>
          <Circle />
          <li>ReactJS</li>
        </Social>
        <Social>
          <Circle />
          <li>NextJS</li>
        </Social>
        <Social>
          <Circle />
          <li>NodeJS</li>
        </Social>
        <Social>
          <Circle />
          <li>MongoDB</li>
        </Social>
      </Technologies>
    </StyledAboutMe>
  );
}

const StyledAboutMe = styled(Description)`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex: 3;
  margin-right: 2rem;
  p span,
  .bold {
    font-family: var(--font-sans);
    color: var(--color-header);
  }
`;

const Technologies = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;
`;

export default AboutMe;
