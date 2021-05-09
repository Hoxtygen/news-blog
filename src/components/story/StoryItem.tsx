import React from "react";
import { StorySample } from "src/interfaces";

const StoryItem: React.FC<StorySample> = ({ userId, title, body }) => {
  return (
    <div className = "story-item">
      <div className="story-item__content">
      <h3 className = "story-item__title">{title}</h3>
      <p>{body}</p>
      <p className = "story-item__author">Posted by: <span>{userId}</span> </p>

      </div>
    </div>
  );
};

export default StoryItem;
