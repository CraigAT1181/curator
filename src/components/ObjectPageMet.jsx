import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getSingleObject } from "../api/api";
import AddExhibitItem from "./AddExhibitItem";

export default function ObjectPageMet() {
  // Read the objectID from the URL
  const { objectID } = useParams();

  const navigate = useNavigate();

  const [exhibitObject, setExhibitObject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    // Pass the objectID to the backend to fetch a particular exhibit
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
      <div className="flex justify-end mb-2">
        <button
          title="Back button"
          onClick={() => navigate(-1)}>
          <i className="fa-solid fa-arrow-left"></i> Back
        </button>
      </div>
      <div className="relative md:w-60">
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
        <div className="absolute top-2 right-2">
          <AddExhibitItem exhibit={exhibitObject} />
        </div>
      </div>
      <div>
        <h1 className="text-2xl">{exhibitObject.title}</h1>
      </div>
      <div>
        {exhibitObject.artist ? (
          <p className="text-lg">Artist: {exhibitObject.artist}</p>
        ) : (
          <p>Artist: Not provided</p>
        )}

        {exhibitObject.artistWiki && (
          <a
            href={exhibitObject.artistWiki}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs underline">
            Learn more about the artist.
          </a>
        )}
      </div>

      {exhibitObject.city ? <p>Created in {exhibitObject.city}</p> : null}

      <div>
        <p>Dated: {exhibitObject.date}</p>
      </div>
      <div>
        <p>{exhibitObject.period}</p>
      </div>
      <div>
        <p>Department: {exhibitObject.department}</p>
      </div>
      <div>
        {exhibitObject.objectWiki ? (
          <a
            href={exhibitObject.objectWiki}
            target="_blank"
            rel="noopener noreferrer"
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
    </div>
  );
}
