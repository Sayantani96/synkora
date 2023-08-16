import React, { useState } from "react";


const RightSidebar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="w-64 h-full bg-gray-100">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-xl font-bold">Who to Follow</h3>
        <button
          className="text-gray-500 hover:text-gray-700"
          onClick={handleClick}
        >
          <i className="fas fa-times"></i>
        </button>
      </div>
      <ul className="my-8">
        <li>
          <a href="#" className="text-gray-800">
            Tanay Pratap
            <button className="ml-2 bg-light-blue text-white px-4 py-2 rounded-lg">Follow</button>
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-800">
            John Doe
            <button className="ml-2 bg-light-blue text-white px-4 py-2 rounded-lg">Follow</button>
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-800">
            Jane Doe
            <button className="ml-2 bg-light-blue text-white px-4 py-2 rounded-lg">Follow</button>
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-800">
            David Smith
            <button className="ml-2 bg-light-blue text-white px-4 py-2 rounded-lg">Follow</button>
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-800">
            Sarah Williams
            <button className="ml-2 bg-light-blue text-white px-4 py-2 rounded-lg">Follow</button>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default RightSidebar;