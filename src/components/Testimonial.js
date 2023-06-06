import React from 'react';
import JohnDoe from "./Images/john-doe-image.png";
import {AiFillStar} from "react-icons/ai";

function Testimonial() {
  return (
    <div className='TestimonialSection'>
        <h2>Testimonials</h2>
        <p className='testimonaldescription'>Here is what our customers are saying about us</p>
        <div className='reviewHold'>
            <img src={JohnDoe} alt='customer' />
            <p className='review'> <i>"</i>i must say, chips and trils is really the best place to be in Muscat, very serene
                environment. And the meals are delicious, well prepared and very affordable. i will 
                recommend them to anyone looking to have a good meal.its simply amazing.<i>"</i>
            </p>
           
            <div className='reviewStar'>
               <AiFillStar/>
               <AiFillStar/>
               <AiFillStar/>
               <AiFillStar/>
               <AiFillStar/>
            </div>
            <h4 className='customer'>
                Joseph Beserk
            </h4>


        </div>
    </div>
  )
}

export default Testimonial;