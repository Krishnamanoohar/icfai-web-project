import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import VideoBg from '../videos/IBSBg.mp4';
import './Button.css'

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={VideoBg} autoPlay loop muted />
      <h1>ICFAI TECH</h1>
      <p>Foundation For Higher Education</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Apply now
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Campus Life <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;