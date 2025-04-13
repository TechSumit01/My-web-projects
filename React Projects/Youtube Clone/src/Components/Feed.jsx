import React, { useState, useEffect } from "react";
import "../Components/index.css";
import "../Components/media2.css"

import { Link } from "react-router-dom";
import { API_KEY } from "../data";

const Feed = ({ category }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const video_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;

    try {
      const response = await fetch(video_url);
      const json = await response.json();
      setData(json.items);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <div className="feed">
      {data.map((v, i) => (
        <Link
          to={`video/${v.snippet.categoryId}/${v.id}`}
          className="card"
          key={v.id}
        >
          <img src={v.snippet.thumbnails.medium.url} alt="thumbnail" />
          <h2>{v.snippet.title}</h2>
          <h3>{v.snippet.channelTitle}</h3>
          <p>{v.statistics.viewCount} views</p>
        </Link>
      ))}
    </div>
  );
};

export default Feed;
