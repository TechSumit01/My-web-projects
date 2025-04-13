import React, { useState, useEffect } from "react";
import "../Components/index2.css";
import "../Components/media2.css";
import video1 from "../assets/video.mp4";
import like from "../assets/like.png";
import dislike from "../assets/dislike.png";
import share from "../assets/share.png";
import jack from "../assets/jack.png";
import user_profile from "../assets/user_profile.jpg";
import save from "../assets/save.png";
import { API_KEY } from "../data.js";

const PlayVideo = ({ videoId }) => {
  const [videoData, setVideoData] = useState(null);

  const fetchVideoDetails = async () => {
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${API_KEY}`
      );
      const data = await response.json();
      setVideoData(data.items[0]);
    } catch (error) {
      console.error("Failed to fetch video details:", error);
    }
  };
  useEffect(() => {
    fetchVideoDetails();
  }, [videoId]);

  if (!videoData) return <p>Loading...</p>;

  const { snippet, statistics } = videoData;

  return (
    <>
      <div className="play-video">
        {/* <video src={video1} controls muted ></video> */}
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <h3>{snippet.title}</h3>
        <div className="play-video-info">
          <p>
            {" "}
            {statistics.viewCount} Views &bull;{" "}
            {new Date(snippet.publishedAt).toDateString()}
          </p>
          <div className="like-dislike-icon">
            <span>
              <img src={like} alt="like" />
              {statistics.likeCount || "N/A"}
            </span>
            <span>
              <img src={dislike} alt="dislike" />0
            </span>
            <span>
              <img src={share} alt="share" />
              Share
            </span>
            <span>
              <img src={save} alt="save" />
              Save
            </span>
          </div>
        </div>
        <hr />
        <div className="channel-info">
          <img src={jack} alt="jack" />
          <div>
            <h3>{snippet.channelTitle}</h3>
            <p>{statistics.subscriberCount} Subscriber</p>
          </div>
          <button>Subscribe</button>
        </div>
        <div className="video-info">
          <p>{snippet.description} </p>
          <hr className="comments-line" />
          <h4>{statistics.commentCount}</h4>

          <div className="comment">
            <img src={user_profile} alt="" />
            <div>
              <h3>
                @StaceyMartinez-o7l <span>4 hours ago</span>
              </h3>
              <p>The ending was too real😂💀☠️</p>
              <div className="comment-action">
                <img src={like} alt="" />
                <span> 0</span>
                <img src={dislike} alt="" />
              </div>
            </div>
          </div>

          <div className="comment">
            <img src={user_profile} alt="" />
            <div>
              <h3>
                @StaceyMartinez-o7l <span>4 hours ago</span>
              </h3>
              <p>The ending was too real😂💀☠️</p>
              <div className="comment-action">
                <img src={like} alt="" />
                <span> 0</span>
                <img src={dislike} alt="" />
              </div>
            </div>
          </div>
          <div className="comment">
            <img src={user_profile} alt="" />
            <div>
              <h3>
                @StaceyMartinez-o7l <span>4 hours ago</span>
              </h3>
              <p>The ending was too real😂💀☠️</p>
              <div className="comment-action">
                <img src={like} alt="" />
                <span> 0</span>
                <img src={dislike} alt="" />
              </div>
            </div>
          </div>
          <div className="comment">
            <img src={user_profile} alt="" />
            <div>
              <h3>
                @StaceyMartinez-o7l <span>4 hours ago</span>
              </h3>
              <p>The ending was too real😂💀☠️</p>
              <div className="comment-action">
                <img src={like} alt="" />
                <span> 0</span>
                <img src={dislike} alt="" />
              </div>
            </div>
          </div>

          <div className="comment">
            <img src={user_profile} alt="" />
            <div>
              <h3>
                @StaceyMartinez-o7l <span>4 hours ago</span>
              </h3>
              <p>The ending was too real😂💀☠️</p>
              <div className="comment-action">
                <img src={like} alt="" />
                <span> 0</span>
                <img src={dislike} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayVideo;
