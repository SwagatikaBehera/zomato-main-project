import React, { useState } from "react";
import ImageViewer from "react-simple-image-viewer";

// Component
import PhotoCollections from "../../Components/Restaurant/PhotoCollection";

const Photos = () => {
  const [photos, setPhotos] = useState([
    "https://b.zmtcdn.com/data/pictures/6/18921286/7ebb5125f196fff3c0e37899d3575d5f.jpg",
    "https://b.zmtcdn.com/data/pictures/6/18921286/51bef9ef934cf94f9a055d3e1006ac3a.jpeg",
    "https://b.zmtcdn.com/data/reviews_photos/a18/0433bc1fa7832f8d54d9f58e4ceaba18_1546756334.jpg",
  ]);

  const [isPhotoOpen, setIsPhotoOpen] = useState(false);
  const [CurrentImg, setCurrentImg] = useState(0);

  const closeViewer = () => setIsPhotoOpen(false);
  const openViewer = () => setIsPhotoOpen(true);

  return (
    <>
      {isPhotoOpen && (
        <ImageViewer
          src={photos}
          currentIndex={CurrentImg}
          disableScroll={false}
          closeOnClickOutside={false}
          onClose={closeViewer}
          backgroundStyle={{
            backgroundColor: "rgba(0,0,0,0.8)",
          }}
        />
      )}

      <div className="flex flex-wrap gap-3">
        {photos.map((photo) => (
          <PhotoCollections image={photo} openViewer={openViewer} />
        ))}
      </div>
    </>
  );
};

export default Photos;
