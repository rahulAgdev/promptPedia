import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary p-4 flex justify-between w-full">
      <a href="https://github.com/rahulAgdev" target="_blank">
        <div className="flex items-center ">
          <span className="text-lg">
            <i className="fas fa-copyright"></i>
          </span>
          <span className="text-xs text-black">rahulAgDev</span>
        </div>
      </a>
      <a href="mailto:rahulagdev@gmail.com">
        <div className="flex items-center">
          <span className="text-lg">
            <i className="fas fa-envelope"></i>
          </span>
          <span className="text-xs text-black">rahulagdev@gmail.com</span>
        </div>
      </a>
    </footer>
  );
};

export default Footer;
