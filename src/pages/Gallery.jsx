import SectionTitle from "../components/SectionTitle";
import Footer from "../components/Footer";
import GallerySliderOverlay from "../components/GallerySliderOverlay";
import { useState } from "react";

const images = import.meta.glob("../assets/gallery/*.{jpg,png,jpeg}", {
  eager: true,
  import: "default",
});

const layoutClasses = [
  "col-span-1 row-span-2",
  "",
  "row-span-2",
  "",
  "col-span-2",
  "",
  // "h-[12rem]",

  // "h-[12.5rem]",

  // "h-[13rem]",

  // // "h-[12em]",
];
const galleryImages = Object.entries(images).map(([path, src], index) => ({
  id: index + 1,
  src,
  alt: `Gallery image ${index + 1}`,
  className: layoutClasses[index % layoutClasses.length],
}));

console.log(galleryImages);
function Gallery() {
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
          <h2 className="mb-5 uppercase text-gray-800 ">
            Fair Havens School at a glance
          </h2>
          <div className="grid grid-cols-2  gap-2">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className={`overflow-hidden rounded-xl ${image.className}`}
                onClick={() => viewPicture(image.id)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
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

// text-[#67B3FF]
