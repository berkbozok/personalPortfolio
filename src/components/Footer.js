import React from "react";
import { social } from "../data";

const Footer = () => {
  return (
    <footer className="bg-tertiary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">
          <div className="flex space-x-6 items-center justify-center">
            {social.map((item, index) => {
              const { href, icon } = item;
              return (
                <a className="text-accent text-base" href={href} key={index}>
                  {icon}
                </a>
              );
            })}
          </div>
          <div>
            <img
              src="https://i.imgur.com/7ErOwR5.png"
              alt=""
              width="172"
              height="29"
              viewBox="0 0 172 29"
              fill="none"
            />
          </div>
          <p className="text-paragraph opacity-80 text-[15px]">
            &copy; 2022 Berk Bozok. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
