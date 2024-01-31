import React, { useState } from "react";

function Search() {
  const [input, setinput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setinput("");
  };

  const getData = () => {
    console.log(input);
  };

  return (
    <>
      <div className="flex items-center justify-center m-2">
        <form onSubmit={submitHandler} className="flex items-center">
          <input
            type="text"
            className=" border border-gray-300 focus:outline-none focus:border-gray-500 rounded w-9/12 py-2 px-4 text-gray-700 leading-tight"
            placeholder="Enter text..."
            value={input}
            onChange={(e) => {
              setinput(e.target.value);
            }}
          />
          <button
            onClick={getData}
            className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Search
          </button>
        </form>
      </div>
    </>
  );
}

export default Search;
