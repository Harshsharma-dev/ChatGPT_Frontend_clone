import React from "react";

export default function LogoSpacing() {
  return (
    <div className="LogoSpacing">
      <div className="align-center flex h-full w-full flex-col justify-center self-center px-2 pb-2 md:pb-[8vh]">
        <h1 className="text-4xl font-semibold text-center text-gray-200 dark:text-gray-600 ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center flex-grow">
          ChatGPT
        </h1>
      </div>
      <div className="align-center flex h-full w-full flex-col justify-center self-center px-2 pb-2 md:pb-[8vh]"></div>
    </div>
  );
}
