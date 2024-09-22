import React from "react";
import { Link as ScrollLink } from "react-scroll";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <ScrollLink
            activeClass="active"
            to={link.path}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
          >
            {link.title}
          </ScrollLink>
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
