import React, { useState } from "react";


const LeftSidebar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="w-64 h-full bg-gray-100">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-xl font-bold">Menu</h3>
        <button
          className="text-gray-500 hover:text-gray-700"
          onClick={handleClick}
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>
      <ul className="my-8">
        <li>
          <a href="#" className="text-gray-800">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-800">
            Explore
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-800">
            Write
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-800">
            Bookmark
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-800">
            Profile
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-800">
            Create New Post
          </a>
        </li>
      </ul>
    </div>
  );
};

export default LeftSidebar;