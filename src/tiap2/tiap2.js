import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Carousel from '../carousel/carousel';

function Tiap2 (){
    return(
        <div>
            <div className="lef-bg"></div>
                <div className='tiap2'>
                        <p className='p-tiap2'>Choose Your Favorite</p>
                        <h2 className='h2-tiap2'>CHUẨN GU ĐÚNG VỊ</h2>
                        <Carousel></Carousel>
                </div>
        </div>);
    
}

export default Tiap2;