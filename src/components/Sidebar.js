import React, { useState } from 'react';
import MenuItem from './MenuItem';

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  const Menus = [
    { title: 'Home', src: 'Chart_fill' },
    { title: 'Employees', src: 'User', gap: true },
    { title: 'Departments', src: 'Folder' },
    {
      title: 'Settings',
      src: 'Setting',
      subMenu: [
        { title: 'Job Title', src: 'job (1)' },
        { title: 'Employment Status', src: 'job (2)' },
      ],
    },
  ];

  return (
    <div
      className={`${
        open ? 'w-72' : 'w-20 '
      } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
    >
      <img
        src="control.png"
        className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
        border-2 rounded-full  ${!open && 'rotate-180'}`}
        onClick={() => setOpen(!open)}
      />

      <div className="flex gap-x-4 items-center"></div>
      <ul className="pt-6">
        {Menus.map((Menu, index) => (
          <li
            key={index}
            className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
            ${Menu.gap ? 'mt-9' : 'mt-2'} ${index === 0 && 'bg-light-white'}`}
          >
            <MenuItem
              to={Menu.title === 'Dashboard' ? '/' : `/${Menu.title.toLowerCase()}`}
              src={`${Menu.src}.png`}
              title={Menu.title}
              onClick={() => {
                if (Menu.subMenu) {
                  toggleSubMenu();
                }
              }}
            />
          </li>
        ))}
        {showSubMenu && Menus[3].subMenu && (
          <ul className="ml-8">
            {Menus[3].subMenu.map((subMenuItem, index) => (
              <li
                key={index}
                className="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-2"
              >
                {subMenuItem.title === 'Job Title' && (
                  <MenuItem
                    to={`/addjobtitle`}
                    src={`${subMenuItem.src}.png`}
                    title={subMenuItem.title}
                  />
                )}
                {subMenuItem.title === 'Employment Status' && (
                  <MenuItem
                    to={`/addEmpstatus`}
                    src={`${subMenuItem.src}.png`}
                    title={subMenuItem.title}
                  />
                )}
              </li>
            ))}
          </ul>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
