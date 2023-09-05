import React from 'react';
import '../../App.css';
import finalPlacementImage from '../../images/final-placements.jpg'
import Footer from '../Footer';
import placementImage from '../../images/placement-image.png'

export default function Placements() {
  return (
    <div>
      <img src={finalPlacementImage} alt="noimg" className='felicitation-img' />
      <h1>Placements</h1><br />
      <div className='placements-mtr'>
        <h1 className='IBS-red-hdng'>ICFAI Business School</h1>
        <p className='ibs-red-p'>The placements for the Class of 2021 have been completed.
          More than 149 leading recruiters have participated in the campus placements.
          IBS students are trained to be well-rounded professionals,
          and the placement record is adequate testimony to the fact.</p>
        <a href="https://www.ifheindia.org/ibs-hyderabad/placements.html">More IBS, Hyderabad Placements</a>
        <hr />
        <h1 className='IBS-red-hdng'>IcfaiTech School</h1>
        <p>IcfaiTech is committed to helping graduating students to get best career
          opportunities through campus placement. A committed team of placement officers
          work round the year in organizing campus placement drives.</p>
        <a href="https://www.ifheindia.org/icfaitech/">More IcfaiTech, Hyderabad Placements</a>
        <hr />
        <h1 className='IBS-red-hdng'>ICFAI Law School</h1>
        <p>Students who successfully complete the 5 year integrated BBA-LLB (Hons.)/BA-LLB (Hons.)
          programs will be having career opportunities in legal practice, corporate sector, international
          business contracts, information technology, banking & Insurance and ADR Practice. ICFAI Law School
          gives utmost importance to student placements on their successful completion of the Law Programs
          and provides placement assistance.</p>
        <a href="https://www.ifheindia.org/fol/placements.html">More FOL, Hyderabad Placements</a>
      </div>
      <div className='placementsImg'>
        <img src={placementImage} alt="No img" />
      </div>
      <Footer />
    </div>
  );
} 