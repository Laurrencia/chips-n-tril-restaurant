import React from 'react';
import BtnFour from'./BtnFour';

function Contact() {
  return (
    <div className='contactSection'>
        <h2>Contact Us</h2>
        <p>For more inquiry,reservation,order confirmation or complain Kindly contact us</p>
        <div className='formHold'>
        <form action="" className='form'>
            <div className='inputHold'>
                <input placeholder='Enter Your Name' type='text' required/>
                <input placeholder='johndoe@gmail.com' type='email' required/>
                <textarea placeholder=' Enter Your Message' type='text' required/>
            </div>
           
        </form>
        <BtnFour/>
        </div>
       
    </div>
  )
}

export default Contact