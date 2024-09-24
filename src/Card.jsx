import React from "react";

const Card = ({ title, description, link, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Learn more
      </a>
    </div>
  );
};

export default Card;
