import { GalleryCarousel } from "@/components";
import Img1 from "../assets/gallery/img1.jpg";
import Img2 from "../assets/gallery/img2.jpg";
import Img3 from "../assets/gallery/img3.jpg";
import Img4 from "../assets/gallery/img4.jpg";
import Img5 from "../assets/gallery/img5.jpg";
import Img6 from "../assets/gallery/img6.jpg";
import Img7 from "../assets/gallery/img7.jpg";
import Img8 from "../assets/gallery/img8.jpg";

const data = [
  {
    id: 1,
    img: Img1,
    alt: "img1",
  },
  {
    id: 2,
    img: Img2,
    alt: "img2",
  },
  {
    id: 3,
    img: Img3,
    alt: "img3",
  },
  {
    id: 4,
    img: Img4,
    alt: "img4",
  },
  {
    id: 5,
    img: Img5,
    alt: "img5",
  },
  {
    id: 6,
    img: Img6,
    alt: "img6",
  },
  {
    id: 7,
    img: Img7,
    alt: "img7",
  },
  {
    id: 8,
    img: Img8,
    alt: "img8",
  },
  {
    id: 9,
    img: Img1,
    alt: "img9",
  },
];

export const Gallery = () => {
  return (
    <div className="mt-24">
      <h3 className="text-center w-full mb-16 font-gowun text-[#FF8796] text-[2rem] tracking-widest">
        Gallery
      </h3>

      <div className="grid grid-cols-3 gap-4">
        {data.map((item) => {
          return (
            <div key={item.id} className="bg-gray-100" onClick={() => {}}>
              <img src={item.img} loading="lazy" />
            </div>
          );
        })}
      </div>

      <GalleryCarousel />
    </div>
  );
};
