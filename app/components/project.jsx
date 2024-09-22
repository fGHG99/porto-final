"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./projectCard";
import FilterTag from "./filterTag";
import { motion, useInView } from "framer-motion";
import projectsData from "../data/projectsData";

const projectTags = ["All", "Web", "Game", "Certificate"];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: -50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const getRandomIndex = () => Math.random() + new Date().getTime();

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      id="projects"
    >
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Projects
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        {projectTags.map((tagItem, index) => (
          <FilterTag
            key={index}
            onClick={handleTagChange}
            name={tagItem}
            isSelected={tag === tagItem}
            filterType={"projects"}
          />
        ))}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={`${project.id}-${getRandomIndex()}`}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.15 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              linkUrl={project.linkUrl}
            />
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
};

export default ProjectsSection;
