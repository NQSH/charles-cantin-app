import React from "react";
import Photo from "./Photo";

export default function Album({ photos }) {
  return (
    <div style={{ display: "flex", maxWidth: "90%", flexWrap: "wrap", justifyContent: "space-between", gap: "10px" }}>
      {
        photos.map((photo, index) => {
          return <Photo key={index} photo={photo} />
        })
      }
    </div>
  );
}