import React, { useEffect, useState } from 'react';
import { ImageSrc } from 'redux/interface/post';
import { Overlay, Header, SlickWrapper, ImageWrapper, Indicator } from './styled';
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
        <button onClick={onClose}>X</button>
      </Header>
      <SlickWrapper>
        <div>
          <Slick 
            initialSlide={0}
            afterChange={(slide) => setCurrentSlide(slide)}
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
        </div>
      </SlickWrapper>
    </Overlay>
  );
};

export default ImagesZoom;