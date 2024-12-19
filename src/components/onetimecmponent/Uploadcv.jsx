import React from "react";

const Uploadcv = () => {
  return (
    <div className="flex justify-start gap-0">
      <div>
        <input
          type="file"
          placeholder="..."
          id="upload"
          className="w-48 h-16 "
        />{" "}
      </div>
      <label
        htmlFor="upload"
        className="font-kantumruy font-semibold font-2xl bg-custom-purple py-3 px-5 rounded-lg text-white "
      >
        Upload CV
        <span className="font-normal">[.pdf]</span>
      </label>
    </div>
  );
};

export default Uploadcv;
