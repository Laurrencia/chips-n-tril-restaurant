import React from 'react';
import {AiFillFacebook} from "react-icons/ai";
import {AiOutlineTwitter} from "react-icons/ai";
import {AiFillInstagram} from "react-icons/ai";


function Footer() {
  return (
    <footer className='footerSection'>
    <div className='footerHold'>
        <div className='contactDetails'>
            <p>Info</p>
            <h2 className="footerLogo">Chips <i>'N'</i> Trill</h2>
            <p>Email: chipsntrillOman@gmail.com</p>
            <p>Location: Al Khoud Galleria Mall, Muscat Oman</p>
            <p>Mobile: +968 12345678</p>
        </div>
        <div className='quickLinks'>
            <p>Quick Links</p>
            <ul>
              <li>Referral program</li>
              <li>Deals of the day</li>
              <li>Career</li>
            </ul>
        </div>
        <div className='socialLinks'>
            <p>Social Links</p>
            <p>Connect with us on our social media handle</p>
            <div>
            <AiFillFacebook/>
            <AiOutlineTwitter/>
            <AiFillInstagram/>
            </div>
           
            
        </div>
    </div>
    <div className='copyRight'>
      <small> <i>Experience the trill in every bite... </i></small>
      <p>&copy;Laurrencia .O. Francis Joseph</p>
    </div>
    </footer>
  )
}

export default Footer