import React, { useState } from "react";
import ImageViewer from "react-simple-image-viewer";

const MenuCollections = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [CurrentImg, setCurrentImg] = useState(0);

  const closeViewer = () => setIsMenuOpen(false);
  const openViewer = () => setIsMenuOpen(true);

  return (
    <>
      {isMenuOpen && (
        <ImageViewer
          src={props.image}
          currentIndex={CurrentImg}
          disableScroll={false}
          closeOnClickOutside={false}
          onClose={closeViewer}
          backgroundStyle={{
            backgroundColor: "rgba(0,0,0,0.8)",
          }}
        />
      )}

      <div
        className="w-32 h-40 md:w-40 md:h-56 flex flex-col mb-6 font-light"
        onClick={openViewer}
      >
        <div className="w-full h-full overflow-hidden rounded-md">
          <img
            src={props.image[0]}
            alt="Menu"
            className="w-full h-full transform transition hover:scale-110 rounded-md"
          />
        </div>
        <h5>{props.menuTitle}</h5>
        <p className="text-sm md:text-base">{props.pages} pages</p>
      </div>
    </>
  );
};

export default MenuCollections;
