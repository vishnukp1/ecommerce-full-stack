import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CarouselItem() {
  const [slidesToShow, setSlidesToShow] = useState(4);

  const handleResize = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth < 768) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(4);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: slidesToShow,
  };

  return (
    <div className="mx-4 m-auto">
      <div className="mt-20 ">
        <Slider {...settings}>
          {data.map((d) => (
            <div
              key={d.name}
              className="bg-white h-[450px] text-black rounded-xl "
            >
              <div className=" flex justify-center">
                <div className="md:h-56 xs:h-32 xs:w-24 md:w-48 bg-indigo-50 flex justify-center items-center rounded-xl mx-6">
                  <img
                    data-aos="zoom-out"
                    src={d.img}
                    alt=""
                    className="md:h-44 w-44 xs:h-24 rounded-full"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-4 p-4">
                <p className="text-xl font-semibold">{d.name}</p>
                <p className="text-center">{d.review}</p>
                <button className="bg-indigo-50 text-dark text-lg px-6 py-1 rounded-xl">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

const data = [
  {
    name: `John Morgan`,
    img: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/13188933a.webp",
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Ellie Anderson`,
    img: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/11718435a.webp",
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Nia Adebayo`,
    img: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/15414806a.webp",
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Rigo Louie`,
    img: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/13214670a.webp",
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Mia Williams`,
    img: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/15740075a.webp",
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
];
