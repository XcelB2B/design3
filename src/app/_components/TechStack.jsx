import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaWordpress,
  FaShopify,
} from "react-icons/fa";
import {
  SiTypescript,
  SiRedux,
  SiNextdotjs,
  SiExpress,
  SiPrisma,
  SiJquery,
  SiMongodb,
  SiFirebase,
  SiRedis,
  SiGraphql,
  SiPostgresql,
} from "react-icons/si";

const TechStack = () => {
  const techStack = [
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "AWS", icon: <FaAws /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Redux", icon: <SiRedux /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "Prisma", icon: <SiPrisma /> },
    { name: "jQuery", icon: <SiJquery /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "Redis", icon: <SiRedis /> },
    { name: "GraphQL", icon: <SiGraphql /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "WordPress", icon: <FaWordpress /> },
    { name: "Shopify", icon: <FaShopify /> },
  ];
  return <InfiniteMovingCards items={techStack} speed="slow" />;
};

export default TechStack;
