import React from "react";
import { Text, Button, Img, Heading, Input } from "./..";
import { Link } from "react-router-dom";

export default function Footer({ ...props }) {
  return (
    <footer
      {...props}
      className={`${props.className} flex flex-col items-start pt-3 pb-3 pl-[276px] pr-14 gap-6 md:pt-3 md:px-5 sm:p-5 bg-white-A700`}
      style={{ marginTop: "-20px" }}    >
      <div className="mx-auto flex w-full max-w-[1100px] items-start md:flex-col">
        <div className="flex flex-1 items-center justify-between gap-5 md:self-stretch">
          <div className="flex flex-col items-start gap-7 ml-[-150px]">
            <Heading size="xs" as="h6">
              Company
            </Heading>
            <ul className="flex flex-col gap-3.5">
              <li>
              <Link to="/About">About</Link>
              </li>
              <li>
              <Link to="/Careers">Careers</Link>
              </li>
              <li>
                <a href="FAQs" target="_blank" rel="noreferrer">
                  <Text as="p" className="!font-roboto">
                    FAQs
                  </Text>
                </a>
              </li>
              <li>
              <Link to="/Team">Our Team</Link>
              </li>
              <li>
              <Link to="/Contactus">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start gap-7">
            <Heading size="xs" as="h6">
              Other Links
            </Heading>
            <ul className="flex flex-col items-start gap-3.5">
              <li>
              <Link to="/Policy">Privacy Policy</Link>
              </li>
              <li>
              <Link to="/TermsCondi">Terms & Conditions </Link>
              </li>
              <li>
                <a href="FAQs" target="_blank" rel="noreferrer">
                  <Text as="p">FAQs</Text>
                </a>
              </li>
              <li>
              <Link to="/Termsofuse">Terms of Us </Link>
              </li>
              <li>
              <Link to="/Partnersofus">Partners of Us </Link>

              </li>
            </ul>
          </div>
        </div>
        <div className="ml-[174px] flex flex-1 flex-col items-start gap-[23px] md:ml-0 md:self-stretch">
          <Heading size="xs" as="h6">
            Subscribe
          </Heading>
          <Text size="md" as="p" className="w-full leading-[19px]">
            Subscribe to stay tuned for Launch Service or Product. Let's do it!{" "}
          </Text>
          <div className="flex gap-4 self-stretch">
            <Input shape="square" name="Email Address Field" placeholder={`Enter your Email`}  style={{ width: "95px" }}/>
            <Button size="sm" className="min-w-[109px] rounded-[15px] border border-solid border-white-A700 sm:px-5">
              Subscribe
            </Button>
          </div>
        </div>
        <div className="ml-[123px] flex w-[20%] md:ml-0 md:w-full">
          <div className="flex w-full flex-col items-start gap-[18px]">
            <Heading size="xs" as="h6">
              Follow Us:
            </Heading>
            <div className="flex justify-between gap-5 self-stretch">
              <Button shape="circle" className="w-[24px] !rounded-[12px]">
                <Img src="images/img_facebook.svg" />
              </Button>
              <Button shape="circle" className="w-[24px] ">
                <Img src="images/img_clock.svg" />
              </Button>
              <Button shape="circle" className="w-[24px]  !rounded-[12px]">
                <Img src="images/img_link.svg" />
              </Button>
              <Button shape="circle" className="w-[24px]  !rounded-[12px]">
                <Img src="images/img_info.svg" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-[300px] flex md:ml-0">
        <Text size="xs" as="p" className="!font-roboto">
          © 2024 All Rights Reserved
        </Text>
      </div>
    </footer>
  );
}
