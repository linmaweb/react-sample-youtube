import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";
import Header from "./Header";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search, errors] = useVideos("cats");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <>
      <Header />
      <div className="container">
        <SearchBar onFormSubmit={search} />
        <div className="row">
          <div className="col-md-8">
            <VideoDetail video={selectedVideo} errors={errors} />
          </div>
          <div className="col-md-4">
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
