import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import VideoCard from "./VideoCard";
import { config } from "dotenv";
import { Link } from "react-router-dom";
const Home = () => {
  const isOpen = useSelector((store) => store.sideBar.isOpen);
  const [videosData, setVideosData] = useState([]);
  useEffect(() => {
    config();
    const API_KEY = process.env.API_KEY;
    const getYoutubeVideos = async () => {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=IN&key=${API_KEY}`
      );
      const data = await response.json();

      console.log(data);
      const youtubeVideosInfo = data.items.map((item) => {
        const { id, snippet, statistics } = item;
        const {
          channelTitle,
          description,
          localized,
          publishedAt,
          thumbnails,
          channelId,
        } = snippet;
        const { title } = localized;
        const { high, maxres, medium, standard } = thumbnails;
        const { likeCount, viewCount } = statistics;

        return {
          id,
          channelTitle,
          description,
          title,
          publishedAt,
          high,
          maxres,
          medium,
          standard,
          likeCount,
          viewCount,
          channelId,
        };
      });
      setVideosData(youtubeVideosInfo);
    };
    getYoutubeVideos();
  }, []);
  return (
    <div
      className={`${
        isOpen
          ? "gxsm:ml-[224px] gxsm:w-[calc(100vw-223px)] "
          : "gxsm:ml-6 gxsm:w-[calc(100vw)] "
      }    mt-5 pl-5 justify-between items-center`}
    >
      <div
        className={`${
          isOpen
            ? " xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1"
            : " xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2"
        } w-full grid grid-cols-1  items-center   justify-between  mx-auto`}
      >
        {videosData.map((item) => {
          return (
            <Link to={`watch?v=${item.id}`} className=" mx-auto">
              <VideoCard key={item.id} item={item} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
