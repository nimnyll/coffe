import {React, useState} from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import CoffeCard1 from '../coffecard1/coffecard1';
import img1 from '../img/CC1.1.png';

const items = [
    <CoffeCard1 img={img1} pris={"285.000"} name={'Giftset "Cà phê phin Việt Nam"'} text={"Món quà tuyệt vời dành cho người sành cà phê. Hạt cà phê được Revo cẩn trọng chọn lựa, rang xay theo công nghệ và bí quyết học hỏi từ những nghệ nhân nổi tiếng, cùng với tình yêu, sự đam mê của người làm cà phê… tạo ra những tách cà phê tinh khiết chỉ dành riêng cho bạn."}></CoffeCard1>,
];

const Carousel1 = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const slidePrev = () => setActiveIndex(0);
    const slideNext = () => setActiveIndex(1);
    const syncActiveIndexForSwipeGestures = (e) => setActiveIndex(e.item);

    const onSlideChanged = (e) => {
        syncActiveIndexForSwipeGestures(e);
        console.debug(`onSlideChanged => Item's position after changes: ${e.item}. Event:`, e);
    };

    const onUpdated = (e) => {
        console.debug(`onUpdated => Item's position after update: ${e.item}. Event:`, e);
    };

    return [
        <AliceCarousel
            mouseTracking
            disableDotsControls
            disableButtonsControls
            items={items}
            activeIndex={activeIndex}
            onSlideChanged={onSlideChanged}
            onUpdated={onUpdated}
        />,
        <div className="b-refs-buttons">
            <button onClick={slidePrev}>Prev</button>
            <button onClick={slideNext}>Next</button>
        </div>,
    ];
};


export default Carousel1;