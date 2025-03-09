// eslint-disable-next-line no-unused-vars
import React from 'react';
import './AppDownload.css';
import { assets } from '../../assets/assets';
const AppDownload = () => {
  return (
    <div className='app-download' id="app-download">
       <p>For Better Experience Download <br/>Rajsang App</p>
       <div className="app-download-platforms">
         <img src={assets.google_playStore} alt='' />
         <img src={assets.apple_appStore} alt='' />
       </div>
    </div>
  )
}

export default AppDownload