import React, { useEffect, useState } from 'react';
import { ImageSrc } from 'redux/types/postTypes';
import { Overlay, Header, SlickWrapper, ImageWrapper, Indicator, CloseButton } from './style';
import Slick from 'react-slick';

interface Props {
  images: ImageSrc[];
  onClose: () => void;
}
const ImagesZoom = ({ images, onClose }: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <Overlay>
      <Header>
        <h1>상세 이미지</h1>
        <CloseButton onClick={onClose}>X</CloseButton>
      </Header>
      <SlickWrapper>
        <div>
          <Slick 
            initialSlide={0}
            beforeChange={(slide, newSlide) => setCurrentSlide(newSlide)}
            infinite
            arrows={false}
            slidesToScroll={1}
          >
            {images && images.map((image, idx) => (
              <ImageWrapper key={idx}>
                <img src={image.src} alt={image.src} />
              </ImageWrapper>
            ))}
          </Slick>
          <Indicator>
            <div>
              {currentSlide + 1}
              {' '}
              /
              {images.length}
            </div>
          </Indicator>
        </div>
      </SlickWrapper>
    </Overlay>
  );
};

export default ImagesZoom;