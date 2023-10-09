import { Button } from "flowbite-react";
import React from "react";
import "../assets/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faLock,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
export default function VersionToggle() {
  return (
    <div className="VersionToggle">
      <div className="flex px-2 w-full flex flex-col py-2 md:py-6 sticky top-0 ">
        <div className="dark flex-row gap-1 black-bg flex rounded-xl bg-gray-900 p-1 text-gray-900 dark:bg-gray-900 m-auto">
          <div className="flex w-full list-none gap-1 sm:w-auto">
            <button className="p-0 bg-gray-700 hover:disabled rounded-xl">
              <div className="group/button relative flex w-full items-center justify-center gap-1 rounded-lg border py-3 outline-none transition-opacity duration-100 sm:w-auto sm:min-w-[148px] md:gap-2 md:py-2.5 border-black/10 bg-white text-gray-900 shadow-[0_1px_7px_0px_rgba(0,0,0,0.06)] hover:!opacity-100 dark:border-[#4E4F60] dark:bg-gray-700 dark:text-gray-100">
                <span>
                  <FontAwesomeIcon
                    className="text-lime-400 max-[370px]:hidden relative"
                    icon={faBolt}
                  />
                </span>
                <span className="truncate text-sm font-medium md:pr-1.5 pr-1.5">
                  GPT-3.5
                </span>
              </div>
            </button>
            <button className="text-gray-500 p-0 rounded-xl">
              <div className="relative flex w-full items-center justify-center gap-1 rounded-lg border outline-none transition-opacity duration-100 sm:w-auto sm:min-w-[148px] md:gap-2  border-transparent text-gray-500 ">
                <span>
                  <FontAwesomeIcon icon={faWandMagicSparkles} />
                </span>
                <span className="truncate text-sm font-medium md:pr-1.5 pr-1.5">
                  GPT-4
                </span>
                <span>
                  <FontAwesomeIcon icon={faLock} />
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
