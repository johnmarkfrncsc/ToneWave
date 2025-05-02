import React, { useRef, useState, useEffect } from "react";

const CarouselArrow = ({ children }) => {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const childrenArray = React.Children.toArray(children);
  const totalCards = childrenArray.length;

  const scrollToCard = (index) => {
    const container = scrollRef.current;
    const card = container?.querySelectorAll(".carousel-card")[index];
    if (card) {
      card.scrollIntoView({ behavior: "smooth", inline: "center" });
      setCurrentIndex(index);
    }
  };

  const scrollLeft = () => {
    const newIndex = currentIndex === 0 ? totalCards - 1 : currentIndex - 1;
    scrollToCard(newIndex);
  };

  const scrollRight = () => {
    const newIndex = currentIndex === totalCards - 1 ? 0 : currentIndex + 1;
    scrollToCard(newIndex);
  };

  useEffect(() => {
    scrollToCard(0);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={scrollRef}
        className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth no-scrollbar justify-start items-start"
      >
        {childrenArray.map((child, index) => (
          <div key={index} className="flex-shrink-0 snap-center carousel-card">
            {child}
          </div>
        ))}
      </div>

      <div className="absolute inset-y-1/2 left-0 right-0 hidden sm:flex justify-between px-2 pointer-events-none">
        <button
          onClick={scrollLeft}
          className="btn btn-circle bg-neutral-600 opacity-50 text-white hover:text-black hover:bg-white pointer-events-auto"
        >
          ❮
        </button>
        <button
          onClick={scrollRight}
          className="btn btn-circle bg-neutral-600 opacity-50 text-white hover:text-black hover:bg-white pointer-events-auto"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default CarouselArrow;

