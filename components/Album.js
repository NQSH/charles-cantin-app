import React from "react";
import Photo from "./Photo";

export default function Album({ photos, filters }) {

  function handleDisabled({ category, published_at }) {
    const { categories, years } = filters;

    if(categories.length > 0 && !categories.includes(category))
      return true;
    if(years.length > 0 && !years.includes(new Date(published_at).getFullYear()))
      return true;
      
    return false;
  }

  return (
    <div style={{ display: "flex", maxWidth: "90%", flexWrap: "wrap", justifyContent: "space-between", gap: "10px" }}>
      {
        photos.map((photo, index) => {
          return <Photo key={index} photo={photo} disabled={handleDisabled(photo)}/>
        })
      }
    </div>
  );
}