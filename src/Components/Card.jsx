import React from "react";

function Card({ props }) {
  const urlImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/`;

  return (
    <>
      <div className="m-3 bg-slate-400 w-auto " key={props.id}>
        <h1>{props.id}</h1>
        <img
          className="w-auto h-auto"
          src={`${urlImage}${props.id}.gif`}
          alt="not found"
        />
        <h1>{props.name}</h1>
      </div>
    </>
  );
}

export default Card;
