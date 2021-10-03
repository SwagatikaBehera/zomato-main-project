import React from "react";

const PhotoCollections = (props) => {
  return (
    <>
      <div
        className="w-32 h-40 md:w-44 md:h-44 flex flex-col mb-6 font-light"
        onClick={props.openViewer}
      >
        <div className="w-full h-full overflow-hidden rounded-md">
          <img
            src={props.image}
            alt="Food Photo"
            className="w-full h-full transform transition hover:scale-110 rounded-md"
          />
        </div>
      </div>
    </>
  );
};

export default PhotoCollections;
