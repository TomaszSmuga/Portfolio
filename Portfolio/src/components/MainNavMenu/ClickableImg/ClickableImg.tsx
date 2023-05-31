import React from "react";

interface Props {
  imageUrl: string;
  onClick: () => void;
}

const ClickableImage: React.FC<Props> = ({ imageUrl, onClick }) => {
  return (
    <a href="#" onClick={onClick}>
      <img src={imageUrl} alt="Clickable Image" />
    </a>
  );
};

export default ClickableImage;
