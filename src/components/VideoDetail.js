import React from "react";
import Loading from "./Loading";

const VideoDetail = ({ video, errors }) => {
  if (!video && !errors) {
    return <Loading />;
  }

  if (errors) {
    return <div>(You'll need a valid API key in config...)</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          title="video player"
          className="embed-responsive-item"
          src={videoSrc}
        />
      </div>
      <div className="mt-4">
        <h4 className="mb-3">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
