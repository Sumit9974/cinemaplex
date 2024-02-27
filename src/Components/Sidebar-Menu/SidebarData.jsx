import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    className: "nav-text",
  },
  {
    title: "Category",
    path: "/category",
    icon: <FaIcons.FaFolderPlus />,
    className: "nav-text",
  },
  {
    //Dishes
    title: "Food Item",
    path: "/fooditem",
    icon: <FaIcons.FaFolderPlus />,
    className: "nav-text",
  },
  {
    title: "Combo",
    path: "/combo",
    icon: <FaIcons.FaFolderPlus />,
    className: "nav-text",
  },
  {
    title: "Order Details",
    path: "/order-details",
    icon: <FaIcons.FaFolderPlus />,
    className: "nav-text",
  },
  {
    title: "Report",
    path: "/reports",
    icon: <IoIcons.IoIosPaper />,
    className: "nav-text",
  },
];
