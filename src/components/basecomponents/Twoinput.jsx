import React, { useState } from "react";

const Twoinput = () => {
  const [inputvalue, setinputvalue] = useState("");

  return (
    <div className="flex justify-start items-center">
      <form action="" className="bg-red-700" onSubmit={(e) => checknumber()}>
        {inputvalue}
        <label htmlFor=""> Guess the number </label>
        <input
          type="number"
          onChange={(e) => setinputvalue(e.target.value)}
          className="bg-custom-purple text-black font-extrabold p-5"
        />

        <button type="submit"></button>
      </form>
    </div>
  );
};

export default Twoinput;
