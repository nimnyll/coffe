import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import CoffeCard from '../coffeCard/coffwCard';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const items = [
    <CoffeCard price={99.00} text={} header={} image={}></CoffeCard>
    <CoffeCard price={} text={} header={} image={}></CoffeCard>
    <CoffeCard price={} text={} header={} image={}></CoffeCard>
    <CoffeCard price={} text={} header={} image={}></CoffeCard>
    <CoffeCard price={} text={} header={} image={}></CoffeCard>
    <CoffeCard price={} text={} header={} image={}></CoffeCard>
];

const Carousel = () => (
    <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
    />
    );