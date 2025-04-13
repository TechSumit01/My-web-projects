import React, { useState, useEffect } from "react";
import "../Components/index2.css";
import video1 from "../assets/video.mp4";
import { Link } from "react-router-dom";
import { API_KEY } from "../data";

const Recommended = ({ categoryId }) => {
  const [apiData, setApiData] = useState([]);

  // const recommentVideo_url = `; https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY} `;

  const fetchrecomendedData = async () => {
    const recomendVideo_url = ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY} `;

    try {
      const response = await fetch(recomendVideo_url);
      const json = await response.json();
      setApiData(json.items);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  useEffect(() => {
    fetchrecomendedData();
  }, [categoryId]);

  return (
    <>
      <div className="recommended">
        {apiData.map((value, index) => {
          return (
            <Link
              to={`video/${value.id}`}
              key={index}
              className="side-video-list"
            >
              <img src={value.snippet.thumbnails.medium.url} alt="thumbnail" />
              <div className="side-video-info">
                <h3>{value.snippet.title} </h3>
                <p>{value.snippet.channelTitle}</p>
                <p>{value.statistics.viewCount} Views</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Recommended;
