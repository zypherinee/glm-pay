import Footer from 'components/Footer';
import Header from 'components/Header';
import React from 'react';
import { Heading, Img } from 'components';

const TermsCondi = () => {
  return (
    <div>
       <Header />
 <div>
  {/*heading*/}
  <div className="relative z-[1] flex justify-center bg-teal-400 px-14 pb-[75px] pt-[77px] md:p-15 ">
              <Heading as="h1" className="!text-white-A700">
                Terms & Conditions
              </Heading>
            </div>
            {/* about us description section */}
            <div className="relative mt-[-150px] h-[1081px] bg-gradient pb-[81px] pl-[107px] pr-[91px] pt-[77px] md:h-auto md:p-5 overflow-x-hidden">
<div className="mr-[206px] h-[200px] w-[23%] rounded-[150px] bg-teal-400 blur-[504.00px] backdrop-opacity-[0.5] md:mr-0" />
<p
  size="lg"
  as="p"
  className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max w-full !font-normal leading-6 px-8 py-6"
  style={{ margin: '0 20px', paddingTop: '220px', paddingLeft: '20px', paddingRight: '20px', marginRight: '80px' }}
>
                  <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt, eros sed placerat
                  sollicitudin, nisl nisi congue quam, non placerat purus dui in ante. Quisque et lectus a nunc
                  fringilla dictum. Nullam quis bibendum nisl. Vestibulum fringilla lorem diam, eget efficitur est
                  faucibus sit amet. Duis felis lacus, luctus sit amet ultrices quis, volutpat lobortis enim. Etiam
                  tempor tempus vehicula. In molestie aliquam ex, ac suscipit risus tincidunt non. Donec porttitor
                  ultrices ex non vehicula. Integer velit nisi, euismod vitae diam non, congue faucibus dolor.
                  Curabitur lectus neque, mollis quis venenatis ut, euismod id magna. Nam non lorem interdum tortor
                  convallis commodo ut eget elit. Fusce ullamcorper libero ac tellus malesuada, eget scelerisque sem
                  convallis. Curabitur et posuere risus. Aliquam varius, lorem in consequat eleifend, risus leo
                  lobortis libero, quis vehicula ex lectus quis diam. Cras eleifend vehicula rhoncus. Aenean eget
                  felis blandit, maximus lorem eu, placerat libero.
                  <br />
                  Aliquam sed est at magna varius lacinia. Aliquam consectetur cursus pretium. Pellentesque in diam
                  metus. Vestibulum pharetra ligula purus, in eleifend ipsum blandit nec. Donec viverra, orci tempus
                  porta rutrum, enim dui accumsan eros, vitae ultrices magna ex non mauris. Quisque ut dolor aliquet
                  purus mollis feugiat eget a justo. Aenean et ante euismod, auctor est sit amet, convallis velit.
                  Aliquam vitae odio sollicitudin, finibus est sed, posuere sapien. Proin eu quam quis nunc euismod
                  volutpat. Nam nec imperdiet ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                  posuere cubilia curae; Etiam at metus tincidunt nunc malesuada suscipit ut et mauris.
                  <br />
                  Vestibulum eu erat vitae neque viverra dignissim vel a velit. In scelerisque, risus at tincidunt
                  iaculis, magna augue accumsan libero, vitae fringilla diam mauris a lorem. Duis risus lorem, porta
                  aliquet suscipit sed, viverra ut felis. Morbi faucibus dolor ut aliquam lobortis. In auctor faucibus
                  arcu, nec dapibus ex consectetur eu. Sed molestie feugiat felis in hendrerit. Morbi sem nibh,
                  ullamcorper vel volutpat in, sagittis nec sapien. Duis maximus libero a eros sodales pulvinar.
                  <br />
                  <br />
                  Sed a posuere felis. Sed volutpat id orci a facilisis. Vivamus congue fringilla orci ac ultrices.
                  Nullam consectetur risus sed dui eleifend, a imperdiet justo pretium. Quisque eu sapien non risus
                  imperdiet lacinia. Sed lobortis tristique ex id pulvinar. Phasellus vitae dolor sagittis, molestie
                  enim ornare, ornare est. Donec tristique orci nisi, quis mattis elit commodo condimentum. Nam id
                  lobortis ante. Suspendisse pretium augue id nunc euismod gravida. Sed accumsan est non est luctus,
                  at semper nisi sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique
                  egestas diam id convallis.
                  <br />
                  Proin ornare accumsan erat sed dapibus. Proin accumsan ipsum nec congue porttitor. Pellentesque
                  pellentesque libero hendrerit augue rhoncus tincidunt. Aenean iaculis auctor posuere. Aenean
                  consequat dui et metus commodo auctor et sit amet elit. Etiam libero lorem, bibendum ac semper in,
                  lacinia et dui. Nam rhoncus nec libero ut sodales. Mauris lorem dolor, semper a quam et, pulvinar
                  fringilla turpis. Sed aliquet non ante in mattis. Fusce pellentesque elit vitae libero venenatis, et
                  interdum est consequat. Vivamus id rutrum sem, ut mollis quam. Nunc varius tellus tortor, at
                  venenatis lectus ullamcorper et. Vivamus sed placerat quam, quis feugiat sem. Curabitur nec neque
                  sed nisl condimentum feugiat.                
                  </span>
              </p>
            </div>
      {/* decorative image section */}
      <Img
        src="images/img_span_dotted_pattern.png"
        alt="pattern image"
        className="absolute right-[0.00px] top-[14%] m-auto h-[231px] w-[9%] object-cover"
      />
    </div>

    <Footer />
  </div>
  )
}

export default TermsCondi;
