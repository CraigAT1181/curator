import React from "react";
import { useNavigate } from "react-router-dom";

export default function ObjectCard({ exhibit }) {
  const navigate = useNavigate();

  return (
    <div
      className="card"
      onClick={() => navigate(`/exhibit/${exhibit.objectID}`)}>
      <div>
        {exhibit.image ? (
          <img
            src={exhibit.image}
            alt="Object Image"
            className="image md:h-48"
          />
        ) : (
          <img
            src={"img/NoImageIcon.png"}
            alt="No image icon"
            className="missing-image md:h-48"
          />
        )}
      </div>
      <div className="m-4">
        <div className="font-bold">{exhibit.title}</div>
        <div>{exhibit.date}</div>
        <div>{exhibit.artist}</div>
      </div>
      <div
        className="badge"
        title="Add to your exhibit">
        <button>+</button>
      </div>
    </div>
  );
}
