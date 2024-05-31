import React from "react";
import { useNavigate } from "react-router-dom";
import AddExhibitItem from "./AddExhibitItem";

export default function ObjectCard({ exhibit }) {
  const navigate = useNavigate();

  return (
    <div className="card">
      <div>
        {exhibit.image ? (
          <img
            src={exhibit.image}
            alt="Object Image"
            className="image md:h-48"
            onClick={() => navigate(`/exhibit/${exhibit.objectID}`)}
          />
        ) : (
          <img
            src={"img/NoImageIcon.png"}
            alt="No image icon"
            className="missing-image md:h-48"
            onClick={() => navigate(`/exhibit/${exhibit.objectID}`)}
          />
        )}
      </div>
      <div className="m-4 flex flex-col">
        <h4 className="font-bold">{exhibit.title}</h4>
        <p>{exhibit.date}</p>
        <p>{exhibit.artist}</p>
      </div>
      <AddExhibitItem exhibit={exhibit} />
    </div>
  );
}
