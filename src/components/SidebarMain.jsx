import React from "react";
import "../assets/index.css";
import { Button, Sidebar } from "flowbite-react";
// import SidebarIcon from "../assets/sidebar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeOpen,
  faPlus,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function SidebarMain() {
  return (
    <div className="rounded-none min-h-screen">
      <div className="black-bg h-full relative w-[260px] p-2">
        <div className="mb-1 flex flex-row gap-2 ">
          <button
            color="dark"
            className="flex justify-start min-h-[44px] px-3 py-1 items-center gap-3 duration-200 dark:text-white cursor-pointer text-sm rounded-md border dark:border-white/20 hover:bg-gray-500/10 h-11 bg-white dark:bg-transparent flex-grow overflow-hidden"
          >
            <span>
              <FontAwesomeIcon icon={faPlus} />
            </span>
            <span className="truncate">New Chat</span>
          </button>
          <Button
            color="dark"
            className="bg-inherit flex px-3 min-h-[44px] py-1 gap-3 transition-colors duration-200 dark:text-white cursor-pointer text-sm rounded-md border dark:border-white/20 hover:bg-gray-500/10 h-11 w-11 flex-shrink-0 items-center justify-center bg-white dark:bg-transparent"
          >
            <span>
              <FontAwesomeIcon icon={faEnvelopeOpen} />
            </span>
          </Button>
        </div>
        <div className="flex-col flex-1 transition-opacity duration-500 -mr-2 pr-2 overflow-y-auto">
          <div className="flex flex-col gap-2 pb-2 dark:text-gray-100 text-gray-800 text-sm"></div>
        </div>
        <Sidebar.Items className="border-t border-black/20 pt-2 empty:hidden gizmo:border-token-border-light dark:border-white/20">
          <Sidebar.ItemGroup>
            <div className=" ">
              <Button
                color="dark"
                className="flex px-3 min-h-[44px] py-1 items-center gap-3 duration-200 dark:text-white cursor-pointer text-sm hover:bg-gray-500/10 bg-white dark:bg-transparent flex-grow overflow-hidden"
              >
                <div className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faUser} />
                  <span>Upgrade to Plus</span>
                </div>
              </Button>
            </div>

            <div className="">
              <Button
                color="dark"
                className="flex px-3 min-h-[44px] py-1 items-center gap-3 duration-200 dark:text-white cursor-pointer text-sm  hover:bg-gray-500/10  bg-white dark:bg-transparent flex-grow overflow-hidden"
              >
                <div className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faUser} />
                  <span>Upgrade to Plus</span>
                </div>
              </Button>
            </div>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </div>
    </div>
  );
}
