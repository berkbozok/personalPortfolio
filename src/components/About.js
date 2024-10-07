import React from "react";
import { navigation } from "../data";
import { Link } from "react-scroll";

const About = () => {
  return (
    <section className="section bg-secondary" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
            src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&w=1000&q=80"
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col ">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                Berk Bozok
              </h2>
              <div></div>
              <p className="mb-4 text-accent">Software Engineer</p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
                I am a 25 years old Software Engineer from Concordia University
                who is passionate about learning new skills and technologies. I
                am looking forward to using the knowledge I learned at my
                University to solve real-life problems and projects. <br />
                <br />
              </p>
            </div>
            <button className="btn btn-md bg-accent hover:bg-secondary-hover transition-all">
              <Link
                to={navigation[4].href}
                activeClass="active"
                spy={true}
                smooth={true}
                duration={800}
                offset={-70}
                className="transition-all duration-300"
              >
                Contact Me
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
