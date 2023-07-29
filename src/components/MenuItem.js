import React from "react";

const MenuItem = ({ menu, open, isFirst }) => {
  const { title, src, gap } = menu;

  return (
    <li
      className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ${
        gap ? "mt-9" : "mt-2"
      } ${isFirst && "bg-light-white"}`}
    >
      <img src="Chill_fill.png" />
      <span className={open ? "origin-left duration-200" : "hidden origin-left duration-200"}>{title}</span>
    </li>
  );
};

export default MenuItem;
