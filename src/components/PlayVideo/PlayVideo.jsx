import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import store from "../../utilities/store";

import { useSelector } from "react-redux";
const PlayVideo = () => {
  const isOpen = useSelector((store) => store.sideBar.isOpen);
  let [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("v") || "");
  console.log(searchQuery);

  return (
    <div className={`${isOpen ? "ml-[224px]" : "ml-6"} mt-7`}>
      <div className="max-w-[1000px]">
       <iframe
          className="rounded-lg  aspect-video"
          src={`https://www.youtube.com/embed/${searchQuery}?si=CJHHobcngF74GsBX`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default PlayVideo;
