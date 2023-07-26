import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Container, Description, Hide } from "../styles/Styles";
import { slideAnim, staggerAnim } from "../animation";
import Wave from "../assets/img/Wave";

const HeroSection = () => {
  return (
    <StyledHero variants={staggerAnim} initial="hidden" animate="show">
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={slideAnim.up}>Hi, my name is </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={slideAnim.right}>
              <span>Vedant Dandge</span>
            </motion.h2>
          </Hide>
        </motion.div>
        <Hide>
          <motion.p variants={slideAnim.right}>
            I am a MERN stack developer with a passion for creating dynamic and
            engaging web applications. With expertise in MongoDB, Express.js,
            React.js, and Node.js, From crafting interactive front-end
            interfaces to designing efficient server-side architectures, I can
            turn ideas into functional, high-performance applications.
          </motion.p>
        </Hide>
        <ButtonContainer>
          <Hide>
            <a
              href="https://github.com/vedant-3010/"
              target="_blank"
              rel="noreferrer"
            >
              <motion.button variants={slideAnim.left}>Github</motion.button>
            </a>
          </Hide>
        </ButtonContainer>
      </Description>
      <Wave />
    </StyledHero>
  );
};

const StyledHero = styled(Container)`
  min-height: 100vh;
  p {
    padding: 0 0 1.5rem;
  }
  h2 {
    font-size: 1.2rem;
    font-weight: lighter;
    margin-bottom: 0rem;
    span {
      font-family: "Poppins", sans-serif;
      font-size: 4rem;
      font-weight: 800;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
`;

export default HeroSection;
