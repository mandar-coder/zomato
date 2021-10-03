import React, { useState } from "react";
import ImageViewer from "react-simple-image-viewer";
import PhotoCollection from "../Components/Restaurant/PhotoCollection";

function Photos() {
  const [photos, setPhotos] = useState([
      "https://b.zmtcdn.com/data/pictures/4/18486844/98b6593ec29d152573eafbda918611ed.jpg",
      "https://b.zmtcdn.com/data/pictures/chains/4/18486844/b9964186cf9b359df6c0f06b159da05d.jpg",
      "https://b.zmtcdn.com/data/pictures/4/18486844/b00b836978d9cf47b642c9684268feef.jpg",
      "https://b.zmtcdn.com/data/reviews_photos/da9/b9d25ffaf7cc8de581e19761d4b37da9_1526837237.jpeg",
      "https://b.zmtcdn.com/data/reviews_photos/c6c/caca011940d0fcca555354ed52d02c6c_1526836761.jpeg",
      "https://b.zmtcdn.com/data/pictures/4/18486844/98b6593ec29d152573eafbda918611ed.jpg",
      "https://b.zmtcdn.com/data/pictures/chains/4/18486844/b9964186cf9b359df6c0f06b159da05d.jpg",
      "https://b.zmtcdn.com/data/pictures/4/18486844/b00b836978d9cf47b642c9684268feef.jpg",
      "https://b.zmtcdn.com/data/reviews_photos/da9/b9d25ffaf7cc8de581e19761d4b37da9_1526837237.jpeg",
      "https://b.zmtcdn.com/data/reviews_photos/c6c/caca011940d0fcca555354ed52d02c6c_1526836761.jpeg",
      "https://b.zmtcdn.com/data/pictures/4/18486844/98b6593ec29d152573eafbda918611ed.jpg",
      "https://b.zmtcdn.com/data/pictures/chains/4/18486844/b9964186cf9b359df6c0f06b159da05d.jpg",
      "https://b.zmtcdn.com/data/pictures/4/18486844/b00b836978d9cf47b642c9684268feef.jpg",
      "https://b.zmtcdn.com/data/reviews_photos/da9/b9d25ffaf7cc8de581e19761d4b37da9_1526837237.jpeg",
      "https://b.zmtcdn.com/data/reviews_photos/c6c/caca011940d0fcca555354ed52d02c6c_1526836761.jpeg",
  ]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);

  const closeViewer = () => {
    setIsMenuOpen(false);
  };

  const openViewer = (index) => {
    setIsMenuOpen(true);
  };

  return (
    <>
      {isMenuOpen && (
        <ImageViewer
          src={photos}
          currentIndex={currentImg}
          disableScroll={false}
          onClose={closeViewer}
        />
      )}
      <div className="flex flex-wrap gap-2">
        {photos.map((photo) => (
          <PhotoCollection image={photo} openViewer={openViewer} />
        ))}
      </div>
    </>
  );
}

export default Photos;