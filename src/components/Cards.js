import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import infra from "../images/infra.jpg";
import ip from "../images/internship.jpg";
import ws from '../images/workshop.jpg';
import mentor from '../images/mentor.jpg';
import iv from '../images/iv.jpg'
import Placements from '../images/placement.jpg';

function Cards() {
  return (
    <div className='cards'>
      <h1>IFHE's Academic Programs</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={infra}
              text='State of the Art Infrastructure'
              
              path='#'
            />
            <CardItem
              src={ip}
              text='Extensive Internship Programmes for students'
              label='E-Commerce'
              path='/services'
            />
             <CardItem
              src={ws}
              text='WorkShop/Seminars on latest technologies'
              label='Artificial Intelligence'
              path='/services'
            />
             <CardItem
              src={mentor}
              text='Individual Mentorship and Personal Attention'
              label='Data Analytics'
              path='#'
            />
            
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={iv}
              text='Industrial Visits For Real Time Exposure'
              label='Cloud Services'
              path='#'
            />
             <CardItem
              src={Placements}
              text='Excellent placement'
              label='ERP & CPM'
              path='#'
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;