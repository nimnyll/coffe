import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import CoffeCard from '../coffeCard/coffwCard';
import img1 from '../img/coffecart1.png'
import img2 from '../img/coffecart2.png'
import img3 from '../img/coffecart3.png'
import img4 from '../img/coffecart4.png'
import img5 from '../img/coffecart5.png'
import img6 from '../img/coffecart6.png'
import Coffeslider from '../coffeslider/coffeslide';

const responsive = {
    0: { items: 1 },
    560: { items: 2 },
    1024: { items: 3 },
};

let coffecard1 = <CoffeCard price={"99.000"} text={"đắng, hậu ngọt, hương hoa"} header={"REVO Morning"} image={img1}></CoffeCard>
let coffecard2 = <CoffeCard price={"85.000"} text={"cân bằng, hậu đắng, vị chocolate "} header={"REVO Everyday"} image={img2}></CoffeCard>
let coffecard3 = <CoffeCard price={"90.000"} text={"đậm đà, đắng, truyền thống"} header={"REVO Origin"} image={img3}></CoffeCard>
let coffecard4 = <CoffeCard price={"139.000"} text={"hậu ngọt, ít đắng, vị chua dâu"} header={"REVO Origin"} image={img4}></CoffeCard>
let coffecard5 = <CoffeCard price={"75.000"} text={"đậm đà, đắng, truyền thống"} header={"REVO Đậm Đà"} image={img5}></CoffeCard>
let coffecard6 = <CoffeCard price={"97.500"} text={"đắng, hậu ngọt, hương hoa"} header={"REVO Everyday"} image={img6}></CoffeCard>


const items = [
    <Coffeslider coffecard1={coffecard1} coffecard2={coffecard2}></Coffeslider>,
    <Coffeslider coffecard1={coffecard3} coffecard2={coffecard4}></Coffeslider>,
    <Coffeslider coffecard1={coffecard5} coffecard2={coffecard6}></Coffeslider>,
    <Coffeslider coffecard1={coffecard1} coffecard2={coffecard2}></Coffeslider>,
];

const Carousel = () => {
    return(<AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
    />)
};

    export default Carousel;