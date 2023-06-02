import React from "react";
import ReactPlayer from "react-player";

const MainPage: React.FC = () => {
  return (
    <div className="h-96">
      <div className="my-8 mx-6">
        <ReactPlayer url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
      </div>
    </div>
  );
};

export default MainPage;
