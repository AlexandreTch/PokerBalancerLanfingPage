import React from 'react';
import Header from './Header';
import './HomeFeed.css';
import Image from '../Pictures/photo.png';

const HomeFeed = () => {
    return(
            <>
            
            <Header />
            <div className='MainDiv'>
                <div className='LeftDiv'>
                    <h1 className='FirstText'>Your poker statistics right at your finger prints</h1>
                </div>
                <div className='RightDiv'>
                    <img className='Img' src={Image}/>
                </div>
            </div>
            <div>
                  <p className='Description'> A lot of text explaining what this product is and why you should have it with some specs and other features. It will explain why doers a person need to have such a product and how user friendly it is.ergjn erver verve verv erverv erv vrev ergergrg ergergerg rg rg erg ergerger gerger gerg gr rg regerg erggerg ergerg reger</p>
            </div>
            <div className='ThirdDiv'>
                 <p className='SecondDescription'> A lot of text explaining what this product is and why you should have it with some specs and other features. It will explain why doers a person need to have such a product and how user friendly it is.ergjn erver verve verv erverv erv vrev ergergrg ergergerg rg rg erg ergerger gerger gerg gr rg regerg erggerg ergerg reger</p>  
            </div>
            </>
    )
};

export default HomeFeed;