import React from "react";
import { Img, Heading, Text } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HomeAppbadges from "../../components/HomeAppbadges";

export default function Home1Page() {
  return (
    <>

      {/* main content section */}
      <div className="w-full bg-white-A700">
        <div>
          {/* header section */}
          <div className="relative h-[957px] md:h-auto">
            <div className="w-full">
              <Header />

              {/* coming soon section */}
              <div className="relative mt-[-1px] flex bg-gradient pb-[118px] pl-[5px] pr-14 pt-[100px] md:p-5">
                <div className="relative mx-auto h-[561px] w-full max-w-[1115px]">
                  <div className="absolute bottom-[0.00px] left-[0.00px] m-auto flex w-[60%] justify-center pr-1.5">
                    <div className="flex w-full flex-col items-start gap-8 relative" style={{ top: "-70px" }}>
                      <Heading size="md" as="h1" className="text-shadow-ts !font-raleway">
                        Coming Soon!
                      </Heading>
                      <Text size="sm" as="p" className="w-full leading-[150%]">
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br/>when an
                        unknown printer took a galley of type and scrambled it to make a type <br/>specimen book.
                      </Text>
                      <HomeAppbadges />
                    </div>
                  </div>
                  <div className="absolute right-[0.00px] top-[21%] m-auto h-[300px] w-[27%] rounded-[150px] bg-teal-400 blur-[504.00px] backdrop-opacity-[0.5]" />
                  <Heading
                    size="md"
                    as="h2"
                    className="absolute left-[0.00px] top-[0.00px] m-auto w-[100%] leading-[px]" style={{ fontSize: "40px" }}
                  >
                    <p><span className="text-teal_500">International</span>
                    <span className="text-black-900">
                        &nbsp;Fund Transfer..<br />
                        </span></p>
                       <br/>
                       <p>             
                        <span>                     
                        Utility Bill Payments & 
                      </span>
                      <span className="text-teal-400"> Recharges</span></p>
                  </Heading>
                </div>
              </div>
            </div>
            <Img
              src="images/img_mockuuups_4vi7v.png"
              alt="product image"
              className="absolute bottom-[90px] right-[2%] m-auto h-[740px] w-[41%] object-cover"
            />
            <Img
              src="images/img_span_dotted_pattern.png"
              alt="pattern image"
              className="absolute right-[0.00px] top-[14%] m-auto h-[231px] w-[9%] object-cover"
            />
          </div>

          {/* footer section */}
          <Footer />
        </div>
      </div>
    </>
  );
}
