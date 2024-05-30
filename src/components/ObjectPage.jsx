import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getSingleObject } from "../api/api";

export default function ObjectPage() {
  const { objectID } = useParams();

  const navigate = useNavigate();

  const [exhibitObject, setExhibitObject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getSingleObject(objectID)
      .then((object) => {
        setIsLoading(false);
        setExhibitObject(object);
      })
      .catch(({ response: { status, statusText } }) => {
        setIsLoading(false);
        setError({ status, statusText });
      });
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <div className="flex-col text-center">
          <i className="fa-solid fa-spinner fa-spin"></i>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (error)
    return (
      <div className="d-flex-col text-center mt-4">
        <i className="fa-solid fa-exclamation"></i>
        <p>
          Oops, there's been an error: {error.status} {error.statusText}
        </p>
        <button
          className="return-home-button mt-4"
          onClick={() => {
            navigate("/home");
          }}>
          Home
        </button>
      </div>
    );

  return (
    <div className="grid gap-3">
      <div className="flex justify-end">
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
      <div>
        {exhibitObject &&
          (exhibitObject.image ? (
            <img
              src={exhibitObject.image}
              alt="Object Image"
              className="exhibit-object-image"
            />
          ) : (
            <img
              src={"../img/NoImageIcon.png"}
              alt="Missing Image Icon"
              className="exhibit-object-missing-image"
            />
          ))}
      </div>
      <div>
        <h1 className="text-2xl">{exhibitObject.title}</h1>
      </div>
      <div>
        <p className="text-lg">{exhibitObject.artist}</p>
        {exhibitObject.artistWiki && (
          <a
            href={exhibitObject.artistWiki}
            className="text-xs underline">
            Learn more about the artist.
          </a>
        )}
      </div>
      <div>
        <p>{exhibitObject.date}</p>
      </div>
      <div>
        {exhibitObject.objectWiki ? (
          <a
            href={exhibitObject.objectWiki}
            className="underline">
            Learn more about this item here.
          </a>
        ) : (
          <p>Further information is not available for this item.</p>
        )}
      </div>
      <div>
        {exhibitObject.galleryNumber ? (
          <p>
            You can view this item in gallery number{" "}
            {exhibitObject.galleryNumber}.
          </p>
        ) : (
          <p>This item is currently not available to view in the gallery.</p>
        )}
      </div>
      <div>
        <button className="exhibit-object-button">Add to Your Exhibit</button>
      </div>
    </div>
  );
}
