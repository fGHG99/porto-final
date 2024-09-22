import React from "react";
import { EyeIcon } from "@heroicons/react/24/outline";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProjectCard = ({ imgUrl, title, description, linkUrl }) => {
  const handleLinkClick = () => {
    if (linkUrl === "-") {
      toast.error("Link is currently not available!", {
        position: "bottom-left",
        autoClose: 1000,
        theme: "colored",
      });
    } else {
      window.open(linkUrl, "_blank");
    }
  };

  return (
    <div>
      <ToastContainer />
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:flex-col group-hover:gap-4 group-hover:bg-opacity-80 transition-all duration-500 ">
          <div
            onClick={handleLinkClick}
            className="group/link flex flex-col items-center gap-4"
          >
            <p className="text-[#ADB7BE] group-hover/link:text-white">
              See Details
            </p>
            <div className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] group-hover/link:border-white">
              <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
            </div>
          </div>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
