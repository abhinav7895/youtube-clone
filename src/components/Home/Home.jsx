import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import useYouTubeData from "../../hooks/useYouTubeData";
import { nanoid } from "nanoid";
import Shimmer from "../Shimmer/Shimmer";
import HomeCategoryFilters from "./HomeCategoryFilters";
const Home = () => {
  const isOpen = useSelector((store) => store.sideBar.isOpen);
  const data = useYouTubeData();
  const [videosData, setVideosData] = useState([]);
  useEffect(() => {
    setVideosData(data);
  }, [data]);

  if (videosData.length === 0) {
    return <Shimmer/>;
  }

  return (
    <div
      className={`${
        isOpen
          ? "gxsm:ml-[224px] gxsm:w-[calc(100vw-223px)] "
          : "gxsm:ml-6 gxsm:w-[calc(100vw)] "
      }    mt-5 pl-5 justify-between items-center`}
    >
      <HomeCategoryFilters/>
      <div
        className={`${
          isOpen
            ? " xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1"
            : " xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2"
        } w-full grid grid-cols-1  items-center   justify-between  mx-auto`}
      >
        {videosData?.map((item) => {
          return (
            <Link
              key={nanoid(6)}
              to={`watch?v=${item.id}`}
              className=" mx-auto"
            >
              <VideoCard key={item.id} item={item} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
