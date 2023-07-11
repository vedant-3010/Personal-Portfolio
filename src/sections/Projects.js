import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Featured from "../components/Featured";
import Archive from "../components/Archive";
import studiebnb from "../assets/videoes/studiebnb.mp4";
import ecommerce from "../assets/videoes/ecommerce.mp4";

const technologies1 = [
  "React",
  "Socket.io",
  "MongoDB",
  "Express",
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
          text="This is a real-time chat application that allows users to create one-on-one chats as well as participate in group chats. The application provides an admin functionality where admin can add and remove users to these groups. Additionally, the application includes a notification feature that alerts users when they receive a new message.  "
          link="https://github.com/vedant-3010/vortex-chat"
          technologies={technologies1}
        />
        <Featured
          video={studiebnb}
          title="Twitter Clone"
          text="This is a Twitter clone built using Next.js, TypeScript, Tailwind CSS, and Prisma. The application replicates many features found in Twitter, including the ability to post tweets, like tweets, and follow other users. "
          link="https://github.com/vedant-3010/Twitter-Clone"
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
