import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "flowbite-react";
import React from "react";
export default function MyPage() {
  return (
    <div className="mb-6">
      {/* <div className="absolute bottom-0 left-0 right-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient pt-2 md:pl-2 md:w-[calc(100%-.5rem)]"> */}
      <form
        action=""
        className="stretch mx-2 flex flex-col gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl"
      >
        <div className="relative flex h-full flex-1 items-stretch md:flex-col">
          {/* <div> */}
          <div className="h-full flex ml-1 md:w-full md:m-auto md:mb-4 gap-0 md:gap-2 justify-center">
            <div className="grow">
              <div className="absolute bottom-full left-0 mb-4 flex w-full grow gap-2 px-1 pb-1 sm:px-2 sm:pb-0 md:static md:mb-0 md:max-w-none">
                <div className="grid w-full grid-flow-row grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-3">
                  <div className="flex flex-col gap-3">
                    <div className="border rounded-lg p-2 border-gray-600 ">
                      <button className="btn relative btn-neutral group w-full whitespace-nowrap rounded-xl text-left text-gray-700 shadow-[0px_1px_6px_0px_rgba(0,0,0,0.02)] dark:text-gray-300 md:whitespace-normal">
                        <div className="flex w-full gap-2 items-center justify-center">
                          <div className="flex w-full items-center justify-between">
                            <div className="flex flex-col overflow-hidden">
                              <div className="truncate font-semibold">
                                Compare design principles
                              </div>
                              <div className="truncate opacity-50">
                                for mobile apps and desktop software
                              </div>
                            </div>
                            <div className="absolute bottom-0 right-0 top-0 flex items-center rounded-xl bg-gradient-to-l from-gray-100 from-[60%] pl-6 pr-3 text-gray-700 opacity-0 group-hover:opacity-100 dark:from-gray-700 dark:text-gray-200">
                              <span>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                              </span>
                            </div>
                          </div>
                        </div>
                      </button>
                    </div>
                    <div className="border rounded-lg p-2 border-gray-600">
                      <button className="btn relative btn-neutral group w-full whitespace-nowrap rounded-xl text-left text-gray-700 shadow-[0px_1px_6px_0px_rgba(0,0,0,0.02)] dark:text-gray-300 md:whitespace-normal">
                        <div className="flex w-full gap-2 items-center justify-center">
                          <div className="flex w-full items-center justify-between">
                            <div className="flex flex-col overflow-hidden">
                              <div className="truncate font-semibold">
                                Compare design principles
                              </div>
                              <div className="truncate opacity-50">
                                for mobile apps and desktop software
                              </div>
                            </div>
                            <div className="absolute bottom-0 right-0 top-0 flex items-center rounded-xl bg-gradient-to-l from-gray-100 from-[60%] pl-6 pr-3 text-gray-700 opacity-0 group-hover:opacity-100 dark:from-gray-700 dark:text-gray-200">
                              <span>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                              </span>
                            </div>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div class="flex flex-col gap-3">
                    <div className="border rounded-lg p-2 border-gray-600">
                      <button
                        class="btn relative btn-neutral group w-full whitespace-nowrap rounded-xl text-left text-gray-700 shadow-[0px_1px_6px_0px_rgba(0,0,0,0.02)] dark:text-gray-300 md:whitespace-normal"
                        as="button"
                      >
                        <div class="flex w-full gap-2 items-center justify-center">
                          <div class="flex w-full items-center justify-between">
                            <div class="flex flex-col overflow-hidden">
                              <div class="truncate font-semibold">
                                Give me ideas
                              </div>
                              <div class="truncate opacity-50">
                                for what to do with my kids' art
                              </div>
                            </div>
                            <div class="absolute bottom-0 right-0 top-0 flex items-center rounded-xl bg-gradient-to-l from-gray-100 from-[60%] pl-6 pr-3 text-gray-700 opacity-0 group-hover:opacity-100 dark:from-gray-700 dark:text-gray-200">
                              <span class="" data-state="closed">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                              </span>
                            </div>
                          </div>
                        </div>
                      </button>
                    </div>
                    <div className="border rounded-lg p-2 border-gray-600">
                      <button
                        class="btn relative btn-neutral group w-full whitespace-nowrap rounded-xl text-left text-gray-700 shadow-[0px_1px_6px_0px_rgba(0,0,0,0.02)] dark:text-gray-300 md:whitespace-normal"
                        as="button"
                      >
                        <div class="flex w-full gap-2 items-center justify-center">
                          <div class="flex w-full items-center justify-between">
                            <div class="flex flex-col overflow-hidden">
                              <div class="truncate font-semibold">
                                Make up a story
                              </div>
                              <div class="truncate opacity-50">
                                about Sharky, a tooth-brushing shark superhero
                              </div>
                            </div>
                            <div class="absolute bottom-0 right-0 top-0 flex items-center rounded-xl bg-gradient-to-l from-gray-100 from-[60%] pl-6 pr-3 text-gray-700 opacity-0 group-hover:opacity-100 dark:from-gray-700 dark:text-gray-200">
                              <span class="" data-state="closed">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                              </span>
                            </div>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </div>  */}
        </div>
        <div class="flex w-full items-center">
          <div class="flex flex-col w-full flex-grow relative border border-black/10 gizmo:dark:border-gray-100/10 dark:border-gray-900/50 dark:text-white rounded-xl gizmo:rounded-2xl shadow-xs dark:shadow-xs dark:bg-gray-700 bg-white gizmo:bg-[#F5F5F5] gizmo:shadow-[0_0_0_2px_rgba(255,255,255,0.95)] gizmo:dark:shadow-[0_0_0_2px_rgba(52,53,65,0.95)]">
            <textarea
              id="prompt-textarea"
              tabindex="0"
              data-id="root"
              rows="1"
              placeholder="Send a message"
              class="m-0 w-full outline-none resize-none border-0 bg-transparent py-[10px] pr-10 focus:ring-0 focus-visible:ring-0 dark:bg-transparent md:py-4 md:pr-12 gizmo:md:py-3.5 pl-3 md:pl-4"
            ></textarea>
            <button
              disabled=""
              class="absolute p-1 rounded-md md:bottom-3 gizmo:md:bottom-2.5 md:p-2 md:right-3 dark:hover:bg-gray-900 dark:disabled:hover:bg-transparent right-2 disabled:text-gray-400 enabled:bg-brand-purple gizmo:enabled:bg-transparent text-white gizmo:text-gray-500 gizmo:dark:text-gray-300 bottom-1.5 transition-colors disabled:opacity-40"
              data-testid="send-button"
            >
              <span class="" data-state="closed">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="none"
                  class="icon-sm m-1 md:m-0"
                >
                  <path
                    d="M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </form>
      {/* </div> */}
    </div>
  );
}
