import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';
import ImageThumbnail from './ImageThumbnail';

const HeaderContainer =()=>
    (
      <div className="headerContainer">
        <ImageThumbnail />
        <div className="headers">
        <HeaderTitle />
        <HeaderContent />
        </div>
      </div>
    )
  
  export default HeaderContainer;