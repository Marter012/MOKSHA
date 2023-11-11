import React, { useEffect, useRef, useState } from "react";
import { SliderData } from "../../data/SliderData";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import {
  LeftArrow,
  RightArrow,
  SliderContainer,
  SliderDots,
  SliderImages,
  SliderWrapper,
} from "./SliderStyles";

export const Slider = () => {

  const listRef = useRef();

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const listNode = listRef.current;
    const imgNode = listNode.querySelectorAll("li > img")[currentIndex];
    if (imgNode) {
      imgNode.scrollIntoView({ block: "nearest",inline : "end"});
    }
  }, [currentIndex]);

  const scrollToImage = (direction) => {
    if (direction === "prev") {
      const isFirstSlide = currentIndex === 0;
      setCurrentIndex((curr) => {
        return isFirstSlide ? SliderData.length - 1 : curr - 1;
      });
    } else {
      const isLastSlide = currentIndex === SliderData.length - 1;
      setCurrentIndex((curr) => {
        return isLastSlide ? 0 : curr + 1;
      });
    }
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <SliderWrapper>
      <SliderContainer>
        <LeftArrow onClick={() => scrollToImage("prev")}>
          <BsFillArrowLeftCircleFill color="black" />
        </LeftArrow>
        <RightArrow onClick={() => scrollToImage("next")}>
          <BsFillArrowRightCircleFill color="black" />
        </RightArrow>
        <SliderImages>
          <ul ref={listRef}>
            {SliderData.map(({ id, img }) => {
              return (
                <li key={id}>
                  <img key={id} alt={id} src={img}/>
                </li>
              );
            })}
          </ul>
        </SliderImages>
        <SliderDots>
          {SliderData.map((_, idx) => (
            <div
              key={idx}
              className={`dot-container-item ${
                idx === currentIndex ? "active" : ""
              }`}
              onClick={() => goToSlide(idx)}
            >
              &#9865;
            </div>
          ))}
        </SliderDots>
      </SliderContainer>
    </SliderWrapper>
  );
};
