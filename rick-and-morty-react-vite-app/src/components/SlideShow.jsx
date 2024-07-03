import { Slide, Zoom, Fade } from "react-slideshow-image";

const slideImages = [
  {
    url: "../assets/RickAndMortyLogo.png",
    caption: "Slide 1",
  },
  {
    url: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    caption: "Slide 2",
  },
  {
    url: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    caption: "Slide 3",
  },
];

export default function SlideShow() {
  return (
    <div className="flex">
      <Fade>
        {slideImages.map((img, index) => {
          <div key={index}>
            <div
              className="flex items-center justify-center h-[400px] bg-cover"
              style={{ backgroundImage: `url(${img.url})` }}
            >
              <span className="text-2xl">{img.caption}</span>
            </div>
          </div>;
        })}
      </Fade>
    </div>
  );
}
