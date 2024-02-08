import React from "react";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";
import store from "../../utilities/store";
const Shimmer = () => {
  const isOpen = useSelector((store) => store.sideBar.isOpen);
  return (
    <div
      className={`${
        isOpen
          ? "gxsm:ml-[224px] gxsm:w-[calc(100vw-223px)] "
          : "gxsm:ml-6 gxsm:w-[calc(100vw)] "
      }     mt-5 pl-5 justify-between items-center `}
    >
      <div
        className={`${
          isOpen
            ? " xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1"
            : " xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2"
        } w-full grid grid-cols-1  items-center   justify-between  mx-auto gap-4`}
      >
        {Array(50)
          .fill("")
          .map(() => {
            return (
              <div
              key={nanoid()}
                className={`${
                  isOpen
                    ? "xl:w-[360px] lg:w-[380px] md:w-[497px] sm:w-[390px] "
                    : "md:w-[330px] lg:w-[314px] sm:w-[440px] gxsm:w-[380px]"
                }  flex flex-col gap-1 m-1  rounded `}
              >
                <div
                  className={`${
                    isOpen
                      ? "xl:h-[200px] lg:h-[210px] md:h-[278px] sm:h-[215px]"
                      : "md:h-[180px] lg:h-[176px] sm:h-[245px] gxsm:h-[210px] h-[calc(100%-60px)]"
                  } w-full bg-gray-400 rounded shimmer-item animate-shimmer`}
                >
                  <div className="w-full h-full rounded "></div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className=" w-[240px] h-[20px] rounded bg-gray-200 shimmer-item animate-shimmer"></div>
                  <div className="w-[140px] h-[20px] rounded bg-gray-200 shimmer-item animate-shimmer"></div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Shimmer;
