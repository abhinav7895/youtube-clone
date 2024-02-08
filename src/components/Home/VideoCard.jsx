import React from "react";
import { useSelector } from "react-redux";
import { timeAgo, formatViewsCount } from "../../utilities/constants";

const VideoCard = ({ item }) => {
  const isOpen = useSelector(store => store.sideBar.isOpen)
  const { title, viewCount, channelTitle, standard,publishedAt } = item;
  const { url } = standard;
  
  return (
    <div className={`${isOpen ? "xl:w-[360px] lg:w-[380px] md:w-[497px] sm:w-[390px] " : "md:w-[330px] lg:w-[314px] sm:w-[440px] gxsm:w-[380px]"}  flex flex-col gap-3 m-1`}>
      <div className={`${isOpen ? "xl:h-[200px] lg:h-[210px] md:h-[278px] sm:h-[215px]" : "md:h-[180px] lg:h-[176px] sm:h-[245px] gxsm:h-[210px] h-[calc(100%-60px)]"} w-full `}>
        <img className="object-cover w-full h-full rounded-lg" src={url} />
      </div>
      <div className="">
        <h2 className="font-semibold line-clamp-2 gxsm:text-lg">{title}</h2>
        <div className="text-sm">
          <p >{channelTitle}</p>
          <p>{formatViewsCount(viewCount) + " views • " + timeAgo(publishedAt)} </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
