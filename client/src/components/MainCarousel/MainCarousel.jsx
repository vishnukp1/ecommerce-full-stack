import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

// Move static image URLs outside component to avoid recreating on each render
const slides = [
  {
    alt: "Slide 1",
    src: "https://cdn.pixelspray.io/v2/black-bread-289bfa/XUefL6/wrkr/original/catalog/brandstore/Mothercare/316-1709145000-babygearmar2024desktop.jpg",
  },
  {
    alt: "Slide 2",
    src: "https://cdn.pixelspray.io/v2/black-bread-289bfa/XUefL6/wrkr/original/catalog/brandstore/Mothercare/316-1706725800-ss2024desktop.jpg",
  },
  {
    alt: "Slide 3",
    src: "https://cdn.pixelspray.io/v2/black-bread-289bfa/XUefL6/wrkr/original/catalog/brandstore/Mothercare/316-1709145000-babycaremar2024desktop.jpg",
  },
];

function MainCarouselComponent() {
  return (
    <div className="h-56 sm:h-64 xl:h-[25rem] 2xl:h-96 w-full">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop
        className="w-full h-full"
      >
        {slides.map(({ src, alt }, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={alt}
              className="w-full h-full object-cover"
              loading="lazy" // ✅ lazy load images
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

// ✅ Wrap with React.memo to avoid re-rendering unless props change
const MainCarousel = memo(MainCarouselComponent);
export default MainCarousel;
