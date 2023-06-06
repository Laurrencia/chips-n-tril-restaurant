import React from 'react';
import chicken from "./Images/Grilled-chicken.png";
import chips from "./Images/chips and dip.png";
import burger from "./Images/double-burger.png";
import combo from "./Images/combo.png";
import salad from "./Images/home-banner-image.png";
import chickenCombo from "./Images/chicken-combo.png";
import chickenBurger from "./Images/burger.png";
import veggie from "./Images/about-background-image.png";
import BtnThree from "./BtnThree";



function Menu() {
  return (
    <div className='menuHold'>
        <h2>Checkout Our Yummy Menu</h2>
        <p className='menudescription'>We have a variety of chicken, chips and burger combo meals specially crafted to meet your nutritional needs.</p>
        <p className='menudescription'> All our meals come with one complimentary cup of drink</p>
        <div className='menuGridContainer'>
            
            <div className='menuGrid'>
                <div className='gridImageHold'>
                <img src={chips} alt='fried chips and dips' width='200px' height="200px"/>
                </div>
                <div className='menuInfo'>
                    <h4>Chips and Dips</h4>
                    <p>Fried Potatoe chips served with hot pepper sauce & mayo dips  </p>
                    <p className='menuprice'> OMR. 3</p>
                    <BtnThree/>
                </div>

            </div>
            <div className='menuGrid'>
                <div className='gridImageHold'>
                <img src={burger} alt=' burger'  width='200px' height="200px"/>
                </div>

                <div className='menuInfo'>
                    <h4>Double Beef Burger</h4>
                    <p>Duble Kingsize Beef Burger served with vegetable slice and hot sauce </p>
                    <p className='menuprice'> OMR. 7</p>
                    <BtnThree/>
                </div>

            </div>
            <div className='menuGrid'>
                <div className='gridImageHold'>
                <img src={combo} alt= "combo meals" width='200px' height="200px"/> 
                </div>
                <div className='menuInfo'>
                    <h4>Chips and Burger Combo</h4>
                    <p>Family size chips and burger combo, with sandwich and chili sauce  </p>
                    <p className='menuprice'> OMR. 13</p>
                    <BtnThree/>
                </div>

            </div>
            <div className='menuGrid'>
                <div className='gridImageHold'>
                <img src={chicken} alt='roasted chicken' width='200px' height="200px"/>
                </div>
                <div className='menuInfo'>
                    <h4>Full Grilled Chicken</h4>
                    <p>Fully oven grilled chicken with honey and pepper drizle   </p>
                    <p className='menuprice'> OMR. 5</p>
                    <BtnThree/>
                </div>

            </div>
            <div className='menuGrid'>
                <div className='gridImageHold'>
                <img src={salad} alt="salad meal" width='200px' height="200px"/>
                </div>
                
                <div className='menuInfo'>
                    <h4> Chicken Salad</h4>
                    <p>Healthy chicken salad, can be taken with or without dressing  </p>
                    <p className='menuprice'>OMR. 3.5</p>
                    <BtnThree/>
                </div>

            </div>
            <div className='menuGrid'>
                <div className='gridImageHold'>
                <img src={chickenCombo} alt='chicken and chips meal combo' width='200px' height="200px"/>
                </div>
                
                <div className='menuInfo'>
                    <h4>Fried Chicken and Chips</h4>
                    <p>Fried chicken and chips combo with 50cl cola drink  </p>
                    <p className='menuprice'> OMR. 8</p>
                    <BtnThree/>
                </div>

            </div>
            <div className='menuGrid'>
                <div className='gridImageHold'>
                <img src={chickenBurger} alt='family favourite' width='200px' height="200px"/>
                </div> 
                <div className='menuInfo'>
                    <h4>Chicken Burger</h4>
                    <p>Juicy single chicken burger with cheese and veggies  </p>
                    <p className='menuprice'> OMR. 3</p>
                    <BtnThree/>
                </div>

            </div>
            <div className='menuGrid'>
                <div className='gridImageHold'>
                <img src={veggie} alt='vegan meal' width='200px' height="200px"/>
                </div>
                <div className='menuInfo'>
                    <h4>Vegan Salad</h4>
                    <p>Completely glutten free vegan salad , served with avacado dressing </p>
                    <p className='menuprice'> OMR. 5</p>
                    <BtnThree/>
                </div>

            </div>

        </div>

    </div>
  )
}

export default Menu