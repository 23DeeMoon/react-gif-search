import React, { useEffect, useState } from "react";
import { useFecthGifs } from "../hooks/useFecthGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  const { imgs, isLoading } = useFecthGifs(category);

  return (
    <div>
      <h3>{category}</h3>

      {isLoading && <h2>Loading...</h2>}

      <div className="card-grid">
        {imgs.map((img) => {
          return <GifItem key={img.id} {...img} />;
        })}
      </div>
    </div>
  );
};
