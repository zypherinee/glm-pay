import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { Button, Img, Text, Heading } from '../../components';
import ButtonGroup from './ButtonGroup';

const Contactus = () => {
  return (
    <div>
      <Header />
      <div className="relative z-[1] flex justify-center bg-teal-400 px-14 pb-[75px] pt-[77px] md:p-15 ">
      <Heading as="h1" className="!text-white-A700">
        Contact Us
      </Heading>
    </div>
      {/* Contact section */}
      <div className="w-full bg-white-A700">
        {/* Contact header */}
        <div className="bg-teal-400_01 flex items-center justify-center">
          <Heading size="md" as="h1" className="p-[35px] !text-white-A700">
            Contact Us
          </Heading>
        </div>
        {/* Contact form */}
        <div className="px-14 py-1 md:px-5 md:py-20 pb-40">
          <div className="max-w-[1283px] mx-auto flex gap-14">
            {/* Contact information */}
            <div className="flex-1">
              <Heading size="lg" as="h2" className="font-poppins leading-[72px]">
                Let’s discuss something <span className="text-teal-400">cool</span> together
              </Heading>
              <div className="mt-16">
                <div className="flex items-center gap-4">
                  <Img src="images/img_envelopefill.svg" alt="envelope image" className="h-[24px] w-[24px]" />
                  <Text size="lg" as="p">
                    SaulDesign@gmail.com
                  </Text>
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <Img src="./images/img_call.svg" alt="call image" className="h-[24px] w-[24px] bg-black-900" />
                  <Text size="lg" as="p">
                    +123 456 789
                  </Text>
                </div>
                <div className="mt-6 flex items-center gap-1">
                  <Img src="./images/img_linkedin.svg" alt="linkedin image" className="h-[35px] w-[15px]" />
                  <Text size="lg" as="p">
                    123 Street 456 House
                  </Text>
                </div>
              </div>
            </div>
            {/* Contact form */}
            <div className='flex flex-col'>
            <div className="mt-6 flex flex-col items-center sm:flex-col sm:justify-center sm:items-start sm:gap-4">
  <div className="sm:mr-4 flex-none"> {/* Add margin-right for small screens */}
    <span><i>I'm interested in...</i></span>
  </div>
  <div className="flex-auto"> {/* Make the button group take up remaining space */}
    <ButtonGroup />
  </div>
</div>

<div className="mt-[60px] flex w-[77%] md:w-full">
                      <div className="flex w-full flex-col items-start">
                        <div className="flex w-[93%] flex-col md:w-full">
                          <div className="relative z-[3] flex flex-col items-start gap-[68px] sm:gap-[34px]">
                          <div>
  <input type="text" id="name" name="name" className="input-field" placeholder="Your Name" style={{ 
    fontSize: '20px',  
    width: '480px',                      // Increase the width of the text field
    borderBottom: '1px solid #38b2ac', // Teal-400 bottom border
    color: '#38b2ac',                   // Teal-400 color
    '::placeholder': {                  // Placeholder style
      color: '#38b2ac'                  // Teal-400 color
    }
  }}/>

</div>
<div>
  <input type="email" id="email" name="email" className="input-field" placeholder="Your Email" style={{ 
    fontSize: '20px', 
    width: '480px',                      // Increase the width of the text field
    borderBottom: '1px solid #38b2ac', // Teal-400 bottom border
    color: '#38b2ac',                   // Teal-400 color
    '::placeholder': {                  // Placeholder style
      color: '#38b2ac'                  // Teal-400 color
    }
  }}/>
  
</div>
<input type="text" id="Message" name="Message" className="input-field" placeholder="Your Message" style={{ 
    fontSize: '20px',  
    width: '480px',                      // Increase the width of the text field

    borderBottom: '1px solid #38b2ac', // Teal-400 bottom border
    color: '#38b2ac',                   // Teal-400 color
    '::placeholder': {                  // Placeholder style
      color: '#38b2ac'                  // Teal-400 color
    }
  }}/>
<div className="h-[50px] w-full rounded-[150px] bg-teal-400 blur-[504.00px] backdrop-opacity-[0.5]" />
</div>
                        </div>
                        <Button
                          size="lg"
                          leftIcon={<Img src="images/img_save.svg" alt="save" className="h-[24px] w-[24px]" />}
                          className="min-w-[309px] gap-4 self-end rounded-[16px] font-medium !text-gray-200 sm:px-5"
                        >
                          Send Message
                        </Button>
                      </div>
                    </div>
                    </div>

              
            </div>
          </div>
          <Footer/>
          </div>
          </div>
  
  );
};

export default Contactus;
