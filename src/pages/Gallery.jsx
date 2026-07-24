import { useState } from "react";
import useToTop from "../hooks/useToTop";

import SectionTitle from "../components/SectionTitle";
import Footer from "../components/Footer";
import GallerySliderOverlay from "../components/GallerySliderOverlay";

const images = import.meta.glob("../assets/gallery/*.{jpg,png,jpeg,webp}", {
  eager: true,
  import: "default",
});

const layoutClasses = [
  "col-span-1 row-span-2 md:col-span-0 md:row-span-0",
  // "",
  "row-span-2 md:row-span-0",
  // "",
  "col-span-2 md:col-span-0",
];

const galleryImages = Object.entries(images).map(([path, src], index) => ({
  id: index + 1,
  src,
  alt: `Gallery image ${index + 1}`,
  className: layoutClasses[index % layoutClasses.length],
}));

function Gallery() {
  useToTop();
  const [clickedImage, setClikedImage] = useState();
  const [overlayIsOpen, setOverlayIsOpen] = useState(false);

  function viewPicture(id) {
    const image = galleryImages.filter((image) => image.id === id);
    setClikedImage(image);
    setOverlayIsOpen(true);
    console.log(clickedImage);
  }

  function handleOverlay(e) {
    console.log(e.target.classList.contains("overlay"));
    if (e.target.classList.contains("overlay")) setOverlayIsOpen(false);
  }

  return (
    <>
      <div>
        <SectionTitle text="Gallery" />
        {overlayIsOpen && (
          <GallerySliderOverlay
            onHandleOverlay={handleOverlay}
            clickedImage={clickedImage}
            galleryImages={galleryImages}
          />
        )}
        <div className="p-10 pr-5 pl-5 ">
          <h2 className="mb-5 uppercase text-gray-800 md:pl-20 md:mb-10 md:mt-5 md:text-[48px]">
            Fair Havens School at a glance
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4  gap-2 md:gap-2 md:pl-20 md:pr-20">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className={`overflow-hidden rounded-xl cursor-pointer ${image.className} `}
                onClick={() => viewPicture(image.id)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Gallery;
