import React from "react";
import ImageCard from "./imageCard";
import ImageStyle from "../style/imageStyle.css";

export const ImageContainer = (props) => {
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="image_list">{images}</div>;
};

export default ImageContainer;
