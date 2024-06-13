import React from "react";
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
        <h2 className="font-bold">{exhibit.title}</h2>
        <p>Dated: {exhibit.date}</p>
        {exhibit.artist ? (
          <p>Artist: {exhibit.artist}</p>
        ) : exhibit.department ? (
          <p>Department: {exhibit.department}</p>
        ) : null}
      </div>
    </div>
  );

  const renderClevelandArtworks = () => (
    <div>
      {exhibit.image?.url ? (
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
        <h2 className="font-bold">{exhibit.title}</h2>
        <p>{exhibit.date}</p>
        <p>{exhibit.creators[0]}</p>
      </div>
    </div>
  );

  const renderExhibitDetails = () => {
    if (exhibit.museum === "metropolitan") {
      return renderMetropolitanExhibit();
    } else if (exhibit.museum === "cleveland") {
      return renderClevelandArtworks();
    } else {
      return null;
    }
  };

  return (
    <div className="card">
      <div>{renderExhibitDetails()}</div>
      <div className="absolute right-2 top-2">
        <AddExhibitItem exhibit={exhibit} />
      </div>
    </div>
  );
}
