import React from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home1 from "pages/Home1";
import About from "components/About/About";
import Careers from "components/Careers/Careers";
import Policy from "components/Policy/Policy";
import TermsCondi from "components/TermsCondi/TermsCondi";
import Termsofuse from "components/Termsofuse/Termsofuse";
import Partnersofus from "components/Partnersofus/Partnersofus";
import Team from "components/Team/Team";
import Contactus from "components/Contactus/Contactus";

function App() {
  return (
<div>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home1 />}/>
        <Route exact path="/About" element={<About />}/>
        <Route exact path="/Careers" element={<Careers />}/>
        <Route exact path="/Policy" element={<Policy />}/>
        <Route exact path="/TermsCondi" element={<TermsCondi />}/>
        <Route exact path="/Termsofuse" element={<Termsofuse />}/>
        <Route exact path="/Partnersofus" element={<Partnersofus />}/>
        <Route exact path="/Team" element={<Team />}/>
        <Route exact path="/Contactus" element={<Contactus />}/>
      </Routes>
    </Router>  
    </div>
  );
}

export default App;
