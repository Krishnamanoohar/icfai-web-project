import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection2.css';
import VideoBg2 from '../videos/video-2.mp4'
import Rankings from '../images/ifhe-ranking-banner.jpg'
function HeroSection2() {
  return (
    <>
    <h1><i class="fa-sharp fa-solid fa-award-simple"></i>Rankings/Awards</h1>
    <div className='hero-container2'>
      
      <img src={Rankings} alt="" className='ranking'/>
      <div className='rnkPara'>
      

        <h2 >National Assessment and Accreditation Council (NAAC) - 2022</h2>
        <p>3.59/4.00 A++ Grade</p>
        <h2 >CRISIL Business School Grading 2022</h2>
        <p>A*** at National & State Level</p>
        <h2 >Careers 360 University Ranking Survey - 2022</h2>
        <p>3.59/4.00 A++ Grade</p>
      
      </div>
      {/* <video src={VideoBg2} autoPlay loop muted /> */}
      {/* <h1>New one</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div> */}
    </div>
    </>
  )
}

export default HeroSection2;