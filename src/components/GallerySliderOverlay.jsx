import { useState } from "react";
import ArrowIcon from "../assets/icons/image.png";

function GallerySliderOverlay({
  onHandleOverlay,
  clickedImage,
  galleryImages,
}) {
  const [imageNum, setImageNum] = useState(clickedImage[0].id);
  console.log(imageNum, galleryImages);

  function increaseImgNum() {
    if (imageNum === galleryImages.length) return;
    setImageNum((imageNum) => imageNum + 1);
    console.log(imageNum);
  }
  function decreaseImgNum() {
    if (imageNum === 1) return;
    setImageNum((imageNum) => imageNum - 1);
    console.log(imageNum);
  }

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed w-full h-full top-0 left-0 right-0 bottom-0 z-5 bg-[rgba(0,0,0,0.95)] overlay"
        onClick={(e) => onHandleOverlay(e)}
      >
        {/* Image */}
        <div className=" w-fit md:p-">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <button
              className="absolute -left-4.5 top-1/2 -translate-y-1/2 text-white z-100 text-2xl p-2.5 rounded-full bg-white/30 border-[#b8b8b8] border-[0.5px]"
              onClick={() => decreaseImgNum()}
            >
              <img src={ArrowIcon} className="w-[1.8rem] h-[1.8rem]" />
            </button>
            <img
              src={galleryImages[imageNum - 1].src}
              className="m-auto z-10 rounded-2xl"
            />
            <button
              className="absolute justify-center -right-4.5 top-1/2 -translate-y-1/2 text-white z-100 text-2xl transform-[rotate(180deg)] p-2.5 rounded-full bg-white/20 border-[#b8b8b8] border-[0.5px]"
              onClick={() => increaseImgNum()}
            >
              <img src={ArrowIcon} className="w-[1.8rem] h-[1.8rem]" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default GallerySliderOverlay;
