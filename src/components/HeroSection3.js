import React from 'react';
import './HeroSection3.css';
import MaingateImg from '../images/slider-bg1.jpg'

function HeroSection3() {
  return (
    <div className='hero-container3'>
    <div>
        <img src={MaingateImg} alt="noimg" className='maingate' />
    </div>
    <div className='para'>
     <h1>The ICFAI Foundation for Higher Education,Hyderabad</h1><br />
     <p>The ICFAI Foundation for Higher Education is a deemed-to-be-University established under section 3 of UGC Act, 1956. IFHE’s comprehensive student-centric learning approach provides relevant knowledge, imparts practical skills and inculcates a positive attitude among the students.</p>
     <br />
     <p>Today, IFHE is one of the largest multi-disciplinary universities in the country. The Faculty of Management, Faculty of Science and Technology and Faculty of Law are the three main building blocks of the university. The University is a member of the Association of Indian Universities (AIU) and Association of Commonwealth Universities (ACU).</p>
     </div>
    </div>
  );
}

export default HeroSection3;