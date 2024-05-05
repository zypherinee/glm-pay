import React from 'react';
import Header from 'components/Header';
import { Text, Heading, Img } from '../../components';
import Footer from 'components/Footer';

const Team = () => {
  return (
    <div>
      <Header />

      {/* Team section */}
      <div>
        {/* Team section title */}
        <div className="relative z-[1] flex justify-center bg-teal-400 px-14 py-[76px] md:p-5">
          <Heading as="h1" className="bg-white-400" style={{ color: "white" }}>
            Our Team
          </Heading>
        </div>

        {/* Team members section */}
        <div className="relative mt-[10px] flex justify-center bg-gradient px-14 pb-[102px] pt-[89px] md:p-5">
          <div className="mx-auto grid w-full max-w-[1110px] grid-cols-3 gap-[169px] md:grid-cols-2 sm:grid-cols-1">
            {/* Example team member */}
            <div className="flex w-full flex-col items-center gap-[27px]">
              <div className="h-[250px] self-stretch rounded-[125px] bg-blue_gray-100" />
              <Heading as="h2">Gopal Verma</Heading>
              <Text size="xl" as="p">
                Manager
              </Text>
            </div>
            {/* Repeat for other team members */}
            <div className="flex w-full flex-col items-center gap-[27px]">
                    <div className="h-[250px] self-stretch rounded-[125px] bg-blue_gray-100" />
                    <Heading as="h3">Gopal Verma</Heading>
                    <Text size="xl" as="p">
                      Manager
                    </Text>
                  </div>
                  <div className="flex w-full flex-col items-center gap-[27px]">
                    <div className="self-stretch rounded-[125px] bg-blue_gray-100">
                      <div className="h-[250px] rounded-[125px] bg-blue_gray-100" />
                    </div>
                    <div className="flex flex-col">
                      <Heading as="h4">Gopal Verma</Heading>
                      
                    </div>
                    <div className="flex flex-col">
                      <Text size="xl" as="p">
                        Manager
                      </Text>
                      
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-center gap-[27px]">
                    <div className="h-[250px] self-stretch rounded-[125px] bg-blue_gray-100" />
                    <Heading as="h6">Gopal Verma</Heading>
                    <Text size="xl" as="p">
                      Manager
                    </Text>
                  </div>
                  <div className="flex w-full flex-col items-center gap-[27px]">
                    <div className="h-[250px] self-stretch rounded-[125px] bg-blue_gray-100" />
                    <Heading as="h1">Gopal Verma</Heading>
                    <Text size="xl" as="p">
                      Manager
                    </Text>
                  </div>
                  <div className="flex w-full flex-col items-center gap-[27px]">
                    <div className="self-stretch rounded-[125px] bg-blue_gray-100">
                      <div className="h-[250px] rounded-[125px] bg-blue_gray-100" />
                    </div>
                    <div className="flex flex-col">
                      <Heading as="h1">Gopal Verma</Heading>
                      
                    </div>
                    <div className="flex flex-col">
                      <Text size="xl" as="p">
                        Manager
                      </Text>
                      
                    </div>
                    </div>
          </div>
        </div>

        {/* Pattern image */}
        <div className="absolute right-[0.00px] top-[18.00px] z-[2] m-auto h-[231px] w-[8%] object-cover">
          <Img
            src="images/img_span_dotted_pattern.png"
            alt="pattern image"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Team;
