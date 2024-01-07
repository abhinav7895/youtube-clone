import React from "react";
import { useSelector } from "react-redux";

const VideoCard = ({ item }) => {
  const isOpen = useSelector(store => store.sideBar.isOpen)
  const { title, viewCount, channelTitle, standard,publishedAt } = item;

  const { url } = standard;
  const formatViewsCount = (views) => {
    if (views < 1000) {
      return views.toString();
    } else if (views < 1000000) {
      return (views / 1000).toFixed(1) + "K";
    } else {
      return (views / 1000000).toFixed(1) + "M";
    }
  };

  function timeAgo(publishedAt) {
    const currentDate = new Date();
    const publishedDate = new Date(publishedAt);
  
    const timeDifference = currentDate - publishedDate;
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
  
    if (days > 0) {
      return `${days} ${days === 1 ? 'day' : 'days'} ago`;
    } else if (hours > 0) {
      return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
    } else if (minutes > 0) {
      return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
    } else {
      return `${seconds} ${seconds === 1 ? 'second' : 'seconds'} ago`;
    }
  }

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
