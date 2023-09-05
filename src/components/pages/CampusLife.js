import React from 'react'
import ReactDOM from 'react-dom/client';
import '../../App.css'
import CampusLifeVdo from '../../videos/IBSBg.mp4'
import Footer from '../Footer'
import CampuslifeImg from '../../images/Campus-LifeImgs.jpg'

import asana from '../../images/asana.jpg'
import astitva from '../../images/astitva.jpg'
import dansation from '../../images/dansation.jpg'
import paritantra from '../../images/pritantra.jpg'
import yantrikee from '../../images/yantrikee.jpg'
import gambol from '../../images/gambol.jpg'
import spotlit from '../../images/spotlit.jpg'
import nexus from '../../images/nexus.jpg'


function CampusLife() {

  const onasana = function(){
    const root = ReactDOM.createRoot(document.getElementById('right'));
    root.render(
    <React.StrictMode>
      <div className='asana'>
        <img src={asana} />
        <h1>Asana Club</h1>
      </div>
      <div className='asanadesc'>
        <p><span>Domain:</span> Cultural </p>
        <p><span>Email Id:</span> astitva.icfaitech@ifheindia.org </p>

      </div>
      <br />
      <h3>Description</h3>
      <p className='cdesc'>Asana is an official music club of IcfaiTech IFHE Hyderabad. The club strives to impart various skills to its members by subjecting them to numerous events. This would enable them to hone their talent in order to excel in their future endeavours. The club also looks forward to act as a stress buster for its participants and channel their energy into a productive learning process.</p>
      <br/>
      <h2>Co-Ordinator</h2>
      <br/>
      <h3>  Mr. Ayush Kumar Karn</h3>
      <h3>+91-8340492564</h3>
    </React.StrictMode>
    );
  }


  const onastitva = function(){
    const root = ReactDOM.createRoot(document.getElementById('right'));
    root.render(
    <React.StrictMode>
      <div className='asana'>
        <img src={astitva} />
        <h1>Astitva Club</h1>
      </div>
      <div className='asanadesc'>
        <p><span>Domain:</span> Cultural </p>
        <p><span>Email Id:</span> astitva.icfaitech@ifheindia.org </p>

      </div>
      <br />
      <h3>Description</h3>
      <p className='cdesc'>Astitva is an official music club of IcfaiTech IFHE Hyderabad. The club strives to impart various skills to its members by subjecting them to numerous events. This would enable them to hone their talent in order to excel in their future endeavours. The club also looks forward to act as a stress buster for its participants and channel their energy into a productive learning process.</p>
      <br/>
      <h2>Co-Ordinator</h2>
      <br/>
      <h3>  Mr. Sandeep Kumar</h3>
      <h3>+91-9120775164</h3>
    </React.StrictMode>
    );
  }

  const ondance = function(){
    const root = ReactDOM.createRoot(document.getElementById('right'));
    root.render(
    <React.StrictMode>
      <div className='asana'>
        <img src={dansation} />
        <h1>Dansation Club</h1>
      </div>
      <div className='asanadesc'>
        <p><span>Domain:</span> Cultural </p>
        <p><span>Email Id:</span> dansation.icfaitech@ifheindia.org </p>

      </div>
      <br />
      <h3>Description</h3>
      <p className='cdesc'>Dansation is an official Dance club of IcfaiTech IFHE Hyderabad. The club strives to impart various skills to its members by subjecting them to numerous events. This would enable them to hone their talent in order to excel in their future endeavours. The club also looks forward to act as a stress buster for its participants and channel their energy into a productive learning process.</p>
      <br/>
      <h2>Co-Ordinator</h2>
      <br/>
      <h3>  Mr. Nagaraju Ayyar</h3>
      <h3>+91-8722445139</h3>
    </React.StrictMode>
    );
  }

  const onpari = function(){
    const root = ReactDOM.createRoot(document.getElementById('right'));
    root.render(
    <React.StrictMode>
      <div className='asana'>
        <img src={paritantra} />
        <h1>Paritantra Club</h1>
      </div>
      <div className='asanadesc'>
        <p><span>Domain:</span> Environment </p>
        <p><span>Email Id:</span> paritantra.icfaitech@ifheindia.org </p>

      </div>
      <br />
      <h3>Description</h3>
      <p className='cdesc'>Paritantra is an official Environmental club of IcfaiTech IFHE Hyderabad. The club strives to impart various skills to its members by subjecting them to numerous events. This would enable them to hone their talent in order to excel in their future endeavours. The club also looks forward to act as a stress buster for its participants and channel their energy into a productive learning process.</p>
      <br/>
      <h2>Co-Ordinator</h2>
      <br/>
      <h3>  Mr. Devaiyyah Goud</h3>
      <h3>+91-7873398012</h3>
    </React.StrictMode>
    );
  }







  return (
    <div>
      <div className='campus-Imgs'>
        <img src={CampuslifeImg} alt="" />
      </div>
      <br/>
      <h1>Clubs</h1>
      <br/>
      <div className='Club'>
        
        <div className='left'>

          <img src={asana}  onClick={onasana} />
          <img src={astitva} onClick={onastitva} />
          <img src={dansation} onClick={ondance} />
          <img src={paritantra} onClick={onpari} />
          <img src={yantrikee} />
          <img src={gambol} />
          <img src={spotlit} />
          <img src={nexus} />




        </div>
        <div className='right' id='right' >

        </div>
      </div>
      <Footer />  
    </div>
  )
}

export default CampusLife
