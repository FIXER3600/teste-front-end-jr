import React, { useState } from "react";
import "./style.css";

interface CarouselProps {
  slides: React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <button className="prev" onClick={prevSlide}>
        Previous
      </button>
      <div className="slide">{slides[currentIndex]}</div>
      <button className="next" onClick={nextSlide}>
        Next
      </button>
    </div>
  );
};

export default Carousel;
