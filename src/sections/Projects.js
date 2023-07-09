import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Featured from "../components/Featured";
import Archive from "../components/Archive";
import studiebnb from "../assets/videoes/studiebnb.mp4";
import ecommerce from "../assets/videoes/ecommerce.mp4";

const technologies1 = [
  "React",
  "Redux",
  "Node",
  "Express",
  "MongoDB",
  "Chakra",
  "Socekt.io",
];

const technologies2 = ["Next.js", "tailwindcss", "typescript", "Prisma"];

function Projects() {
  return (
    <StyledProjects id="projects">
      <Header>
        <span>02.</span> PROJECTS
      </Header>
      <FeaturedContainer>
        <Featured
          video={ecommerce}
          title="Vortex Chat"
          text="This is a real-time chat application that allows users to create one-on-one chat as well as group chat. It allow the admin to create groups and add users to the groups. I also has notification feature which notifies the user when a new message is received."
          link="https://vortexchat.vercel.app/"
          technologies={technologies1}
        />
        <Featured
          video={studiebnb}
          title="Twitter Clone"
          text="This is a clone of twitter. It is build using Next.js , typescript, tailwindcss, prisma. It has all the features of twitter like posting tweets, liking tweets, following users, etc."
          link="https://twitterclone-alpha.vercel.app/"
          technologies={technologies2}
        />
      </FeaturedContainer>
      <Archive />
    </StyledProjects>
  );
}

const StyledProjects = styled(motion.div)`
  max-width: 1080px;
  padding: 5rem 2rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Header = styled(motion.h2)`
  padding-bottom: 2rem;
  display: inline-block;
`;

const FeaturedContainer = styled(motion.div)``;

export default Projects;
