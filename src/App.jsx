import { useState } from "react";
import images from "./images";
import Slider from "react-touch-drag-slider";
import "./styles.css";

// Whatever you render out in the Slider will be draggable 'slides'
function App() {
  // state should start with the index you want to start the slide on
  const [slideIndex, setSlideIndex] = useState(1);

  const increment = () => {
    if (slideIndex < images.length - 1) setSlideIndex(slideIndex + 1);
  };

  const decrement = () => {
    if (slideIndex > 0) setSlideIndex(slideIndex - 1);
  };

  return (
    <main>
      <button
        type="button"
        className="btn left"
        onClick={decrement}
        disabled={slideIndex === 0}
      >
        〈
      </button>
      <button
        type="button"
        className="btn right"
        onClick={increment}
        disabled={slideIndex === images.length - 1}
      >
        〉
      </button>
      <Slider
        onSlideComplete={setSlideIndex}
        onSlideStart={(i) => {
          console.log("started dragging on slide", i);
        }}
        activeIndex={slideIndex}
        threshHold={100}
        transition={0.3}
        scaleOnDrag={true}
      >
        {images.map(({ url, title }) => (
          <img src={url} key={`${title}-${url}`} alt={title} />
        ))}
      </Slider>
    </main>
  );
}

export default App;
