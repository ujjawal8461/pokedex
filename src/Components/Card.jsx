import React from "react";

function Card({ props }) {
  const urlImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/`;

  return (
    <>
    <div className="m-3 h-72 bg-slate-400 w-auto flex flex-col items-center" key={props.id}>
    <div className="flex justify-center items-center w-full h-48">
        <img
            // className="w-auto"
            src={`${urlImage}${props.id}.gif`}
            alt="not found"
        />
    </div>
    <div className="bg-blue-400 w-full p-2">
          <h1 style={{ fontFamily: 'Arial', fontSize: '20px', fontWeight: 'bold' }}>{props.id}</h1>
          <h1 style={{ fontFamily: 'Arial', fontSize: '18px', fontWeight: 'normal' }}>{props.name}</h1>
        </div>
    
</div>

    </>
  );
}

export default Card;
