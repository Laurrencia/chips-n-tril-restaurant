import React from 'react';
import heroimage from "../components/Images/combo.png";
import BtnOne from './BtnOne';

function Banner() {
  return (
    <banner className="heroSection">
        <div className='heroText'>
            <h1>Enjoy Your Dealicious Meal  @ Affordable Price</h1>
            <p>
                Take a break from your regular food routine and enjoy a delicious meal of chips, burger,
                chicken and other  finger foods.
                Eat and chill  while enjoying soul food at its best.

            </p>
            <small>Let us make your experience memmorable....</small>
            <div>
            <BtnOne/>
            </div>
        </div>
        <div className='heroImgHold'>
          <img src={heroimage} alt="chips and fries" width="" height="" />
        </div>
    </banner>
  )
}

export default Banner;