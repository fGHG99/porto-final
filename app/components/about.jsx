"use client";
import React, { useTransition, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import FilterTag from "./filter";
import TabButton from "./tab";
import skillsData from "../data/skillsData";

const AboutSection = () => {
  const skillTags = ["Tech Stack", "Tools", "Soft Skills"];

  const [tag, setTag] = useState("Tech Stack");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredSkills = skillsData.filter((skill) => skill.tag.includes(tag));

  const aboutTab = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <div className="pl-2 flex flex-col gap-4">
          <div className="flex flex-row gap-2">
            {skillTags.map((tagItem, index) => (
              <FilterTag
                key={index}
                onClick={handleTagChange}
                name={tagItem}
                isSelected={tag === tagItem}
                filterType={"skills"}
              />
            ))}
          </div>
          <div className="grid grid-cols-2 items-center gap-x-8 px-4 max-h-[16rem] overflow-y-auto">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.id}
                className="mt-4"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
              >
                <div className="flex flex-row gap-4 items-center">
                  <h3 className="w-[50%] text-xs lg:text-base">{skill.name}</h3>
                  {skill.image && (
                    <Image
                      src={skill.image}
                      alt="skill image"
                      width={24}
                      height={24}
                    />
                  )}
                </div>
                <div className="flex items-center">
                  <div className="w-[12rem] h-2 bg-gray-500 rounded-full">
                    <motion.div
                      className="h-full bg-white rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: `${skill.value}%` }}
                      transition={{ duration: 2 }}
                    ></motion.div>
                  </div>
                  <div className="ml-2 font-bold text-white">{skill.value}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <div className="pl-4 flex flex-col gap-4 relative">
            <div className="relative pl-4 flex flex-col justify-center before:content-[''] before:absolute before:-left-4 before:w-1 before:h-10 before:bg-white before:top-1/2 before:-translate-y-1/2 before:z-0">
            <p className="text-gray-400 text-sm">(2022-2025)</p>
            <p className="text-lg font-semibold text-white-800">SMKN 4 Bandung</p>
            <i className="text-gray-400 italic">Rekayasa Perangkat Lunak</i>
            </div>
            <div className="relative pl-4 flex flex-col justify-center before:content-[''] before:absolute before:-left-4 before:w-1 before:h-10 before:bg-white before:top-1/2 before:-translate-y-1/2 before:z-0">
            <p className="text-gray-400 text-sm">(2019-2022)</p>
            <p className="text-lg font-semibold text-white-800">SMPN 45 Bandung</p>
            </div>
        </div>
      ),
    },
  ];

  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-white"
      id="about"
    >
        <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            About
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <motion.div layout transition={{ duration: 0.3 }}>
        <div className="order-1 lg:order-2 from-[#000000] border-[#000000] relative rounded-lg border bg-gradient-to-r to-[#000000]">
            <div className="flex flex-row">
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-500 to-gray-600"></div>
              <div className="h-[1px] w-full bg-gradient-to-r from-gray-600 to-transparent"></div>
            </div>
            <div className="px-4 lg:px-8 py-5">
              <div className="flex flex-row space-x-2">
                <div className="h-3 w-3 rounded-full bg-red-400"></div>
                <div className="h-3 w-3 rounded-full bg-orange-400"></div>
                <div className="h-3 w-3 rounded-full bg-green-200"></div>
              </div>
            </div>
            <div className="overflow-hidden border-t-[2px] border-gray-900 px-4 lg:px-8 py-4 lg:py-8">
              <code className="font-mono text-xs md:text-sm lg:text-base">
                <div className="blink">
                  <span className="mr-2 text-pink-500">const</span>
                  <span className="mr-2 text-white">coder</span>
                  <span className="mr-2 text-pink-500">=</span>
                  <span className="text-gray-400">{'{'}</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                  <span className="text-gray-400">{`'`}</span>
                  <span className="text-amber-300">Azka</span>
                  <span className="text-gray-400">{`',`}</span>
                </div>
                <div className="ml-4 lg:ml-8 mr-2">
                  <span className=" text-white">skills:</span>
                  <span className="text-gray-400">{`['`}</span>
                  <span className="text-amber-300">React</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">Javascript</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">HTML5</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">Express</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">CSS</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">MySql</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">MongoDB</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">PostgreSql</span>
                  <span className="text-gray-400">{"', "}</span>
                  <span className="text-blue-400">$Techstack</span>
                  <span className="text-gray-400">{"],"}</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">hardWorker:</span>
                  <span className="text-orange-400">true</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">quickLearner:</span>
                  <span className="text-orange-400">true</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">problemSolver:</span>
                  <span className="text-orange-400">true</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-green-400">hireable:</span>
                  <span className="text-orange-400">function</span>
                  <span className="text-gray-400">{'() {'}</span>
                </div>
                <div>
                  <span className="ml-8 lg:ml-16 mr-2 text-orange-400">return</span>
                  <span className="text-gray-400">{`(`}</span>
                </div>
                <div>
                  <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                  <span className="mr-2 text-white">hardWorker</span>
                  <span className="text-amber-300">&amp;&amp;</span>
                </div>
                <div>
                  <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                  <span className="mr-2 text-white">problemSolver</span>
                  <span className="text-amber-300">&amp;&amp;</span>
                </div>
                <div>
                  <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                  <span className="mr-2 text-white">skills.length</span>
                  <span className="mr-2 text-amber-300">&gt;=</span>
                  <span className="text-orange-400">5</span>
                </div>
                <div><span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span></div>
                <div><span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span></div>
                <div><span className="text-gray-400">{`};`}</span></div>
              </code>
            </div>
          </div>
        </motion.div>
        <div className="mt-7 md:mt-0 text-left flex flex-col h-full">
          <p className="text-xl font-bold text-white mb-4 mt-4">About Me</p>
          <p className="text-base lg:text-lg px-4 max-h-[12rem] overflow-y-auto">
          Hello I’m Azka Dafin Aldrik, a passionate web development student skilled in 
          various frameworks and ORMs for both front-end and back-end projects.
           My exprience as a leader in school's project has developed my leadership, teamwork, problem-solving, 
           and time management abilities, making me effective in collaborative projects.
          </p>
          <div className="flex flex-row justify-start mt-8">
            {aboutTab.map((tabData) => (
              <TabButton
                key={tabData.id}
                selectTab={() => handleTabChange(tabData.id)}
                active={tab === tabData.id}
              >
                {tabData.title}
              </TabButton>
            ))}
          </div>
          <div className="mt-8">
            {aboutTab.find((t) => t.id === tab)?.content || null}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
