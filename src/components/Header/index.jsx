import React from "react";
import { Button, Heading, Img } from "./..";
import {Link} from "react-router-dom"

export default function Header({ ...props }) {
  return (
    <header
      {...props}
      className={`${props.className} flex md:flex-col justify-between items-center pt-[20px] pb-[3px] pl-[50px] pr-[5px] gap-5 md:px-5 sm:p-5 bg-white-A700`}
    >
      <Img src="images/img_header_logo.png" alt="header logo" className="h-[61px] w-[190px] object-contain" />
      <div className="flex w-[68%] items-start justify-between gap-5 md:w-full md:flex-col">
        <ul className="!mt-[25px] flex flex-wrap gap-[25px] text-lg">
          <li>
          <Link className="nav-link active btn-navv" aria-current="page" to="/"><b>Home</b></Link>
          </li>
          <li>
          <Link className="nav-link active btn-navv" aria-current="page" to="/About"><b>About Us</b></Link>
          </li>
          <li>
          <Link className="nav-link active btn-navv" aria-current="page" to="/Careers"><b>Careers</b></Link>
          </li>
          <li>
          <Link className="nav-link active btn-navv" aria-current="page" to="/Contactus"><b>Contact Us</b></Link>
          </li>
          <li>
          <Link className="nav-link active btn-navv" aria-current="page" to="/Contactus"><b>Contact Us</b></Link>
          </li>
        </ul>
        <Button size="md" shape="round" className="min-w-[207px] font-opensans font-bold sm:px-5 mr-10">
          Download App
        </Button>
      </div>
    </header>
  );
}
