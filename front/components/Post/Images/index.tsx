import { PlusOutlined } from '@ant-design/icons';
import React, { useCallback, useMemo, useState } from 'react';
import { ImageSrc } from 'redux/interface/post';
import ImagesZoom from '../ImagesZoom';

interface Props {
  images: ImageSrc[];
}
const PostImages = ({ images }: Props) => {
  const [showImagesZoom, setShowImagesZoom] = useState(false);

  const onZoom = useCallback(() => {
    setShowImagesZoom(true);
  }, []);

  const onClose = useCallback(() => {
    setShowImagesZoom(false);
  }, []);

  console.log(showImagesZoom);

  const renderImages = useMemo(() => {
    if (images.length === 1) {
      return (
        <>
          <img 
            src={images[0].src} 
            alt={images[0].src} 
            onClick={onZoom}
            role="presentation" // 클릭해도되지만 안해도 상관없음
          />
          {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
        </>
      )
    } else if (images.length === 2) {
      return (
        <>
          <img 
            width="50%"
            src={images[0].src} 
            alt={images[0].src} 
            onClick={onZoom}
            role="presentation" // 클릭해도되지만 안해도 상관없음
          />
          <img 
            width="50%"
            src={images[1].src} 
            alt={images[1].src} 
            onClick={onZoom}
            role="presentation" // 클릭해도되지만 안해도 상관없음
          />
          {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
        </>
      )
    } else {
      return (
        <>
          <img
            width="50%"
            src={images[0].src} 
            alt={images[0].src} 
            onClick={onZoom}
            role="presentation" // 클릭해도되지만 안해도 상관없음
          />
          <div
            role="presentation"
            style={{ display: "inline-block", width: "50%", textAlign:"center", verticalAlign: "middle" }}
            onClick={onZoom}
          >
            <PlusOutlined />
            <br />
            {images.length - 1}
            개의 사진 더보기
          </div>
          {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
        </>
      )
    }
  }, [images, showImagesZoom]);

  return (
    <div>
      {renderImages}
    </div>
  );
};

export default PostImages;