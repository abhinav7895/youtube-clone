import {useEffect, useState} from 'react'

const useYouTubeData = () => {
    const [videosData, setVideosData] = useState([]);

    useEffect(() => {
      const getYoutubeVideos = async () => {
        const response = await fetch(
          `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=IN&key=AIzaSyAO10jm5gfIUTwU8ENXchH_RwBzAJwgBkA`
        );
        const data = await response.json();
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
  return videosData;
}

export default useYouTubeData