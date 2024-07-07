import { useState } from "react";
import PagingButton from "./PagingButton";

export default function SlideShow({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <div className="w-full flex items-center justify-center gap-5">
        <PagingButton
          type="previous"
          handleClick={() =>
            setCurrentSlide((prev) =>
              prev <= 0 ? slides.length - 1 : prev - 1
            )
          }
        >
          Previous
        </PagingButton>
        {slides[currentSlide]}

        <PagingButton
          type="next"
          handleClick={() =>
            setCurrentSlide((prev) =>
              prev >= slides.length - 1 ? 0 : prev + 1
            )
          }
        >
          Next
        </PagingButton>
      </div>
    </div>
  );
}
