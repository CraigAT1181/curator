import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddExhibitItem from "./AddExhibitItem";

export default function ObjectCard({ exhibit }) {
  const navigate = useNavigate();

  const renderMetropolitanExhibit = () => (
    <div>
      {exhibit.image ? (
        <img
          src={exhibit.image}
          alt="Object Image"
          className="image md:h-48"
          onClick={() => navigate(`/met-exhibits/${exhibit.objectID}`)}
        />
      ) : (
        <img
          src="img/NoImageIcon.png"
          alt="No image icon"
          className="missing-image md:h-48"
          onClick={() => navigate(`/met-exhibits/${exhibit.objectID}`)}
        />
      )}
      <div className="m-4 flex flex-col">
        <h4 className="font-bold">{exhibit.title}</h4>
        <p>{exhibit.date}</p>
        <p>{exhibit.artist}</p>
      </div>
    </div>
  );

  const renderClevelandExhibit = () => (
    <div>
      {exhibit.image.url ? (
        <img
          src={exhibit.image.url}
          alt="Object Image"
          className="image md:h-48"
          onClick={() => navigate(`/cleveland-artworks/${exhibit.objectID}`)}
        />
      ) : (
        <img
          src="img/NoImageIcon.png"
          alt="No image icon"
          className="missing-image md:h-48"
          onClick={() => navigate(`/cleveland-artworks/${exhibit.objectID}`)}
        />
      )}
      <div className="m-4 flex flex-col">
        <h4 className="font-bold">{exhibit.title}</h4>
        <p>{exhibit.date}</p>
        <p>{exhibit.creators[0]}</p>
      </div>
    </div>
  );

  const renderExhibitDetails = () => {
    if (exhibit.museum === "metropolitan") {
      return renderMetropolitanExhibit();
    } else if (exhibit.museum === "cleveland") {
      return renderClevelandExhibit();
    } else {
      return null;
    }
  };

  return (
    <div className="card">
      <div>{renderExhibitDetails()}</div>
      <AddExhibitItem exhibit={exhibit} />
    </div>
  );
}
