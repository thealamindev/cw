import React from "react";
import { Link } from "react-scroll";
import Container from "./Container";
import Image from "./Image";
import logo from "../../public/logo.png";

const Menu = () => {
  return (
    <div className="bg-white shadow-sm py-[25px]">
      <Container>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/" smooth={true} duration={500}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="course" smooth={true} duration={500}>
                    Course
                  </Link>
                </li>
                <li>
                  <Link to="team" smooth={true} duration={500}>
                    Team
                  </Link>
                </li>
                <li>
                  <Link to="about" smooth={true} duration={500}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="blog" smooth={true} duration={500}>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="contact" smooth={true} duration={500}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <Link to="/" smooth={true} duration={500}>
              <Image imgSrc={logo} imgAlt={"logo"} className={"w-[80px]"} />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-black text-lg font-bold uppercase">
              <li>
                <Link to="/" smooth={true} duration={500}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="course" smooth={true} duration={500}>
                  Course
                </Link>
              </li>
              <li>
                <Link to="team" smooth={true} duration={500}>
                  Team
                </Link>
              </li>
              <li>
                <Link to="about" smooth={true} duration={500}>
                  About
                </Link>
              </li>
              <li>
                <Link to="blog" smooth={true} duration={500}>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={500}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            {/* <a className="btn text-lg font-bold">Register Now</a> */}
            <a href="/" className="bn5 text-lg font-bold">Register Now</a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Menu;
