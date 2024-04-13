import React from "react";

const Videos = () => {
  return (
    <div className="w-full flex justify-center" id="tutorials">
      <div className="w-contain ">
        <div className="flex justify-between items-center">
          <a href="#tutorials" className="text-[42px] hover:underline">
            Video tutorials
          </a>
          <input
            className="bg-rule py-3 px-5 rounded outline-white"
            type="text"
            placeholder="Search..."
          />
        </div>
      </div>
    </div>
  );
};

export default Videos;
