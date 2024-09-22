import React from "react";

const FilterTag = ({ name, onClick, isSelected, filterType }) => {
  const buttonStyles = isSelected
    ? "text-white border-primary-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";
  let buttonType;
  switch (filterType) {
    case "projects":
      buttonType = "px-6 py-3 text-xl";
      break;
    case "skills":
      buttonType = "px-4 py-2 text-base";
      break;
  }
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 ${buttonType} cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default FilterTag;
