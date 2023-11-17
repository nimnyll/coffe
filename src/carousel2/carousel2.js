import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import CC2 from "../CC2/CC2";
import img1 from "../img/CC2.1.png"
import img2 from "../img/CC2.2.png"
import img3 from "../img/CC2.3.png"

const responsive = {
    0: { items: 1 },
    560: { items: 2 },
    1024: { items: 3 },

};

const items = [
    <CC2 img={img1} pris="147.000" pris2="155.000" name="Combo Revo Đậm Đà" text="Hàm lượng caffein trong Revo Đậm Đà đủ mạnh để làm bạn tỉnh táo làm việc..."></CC2>,
    <CC2 img={img2} pris="156.000" pris2="165.000" name="Combo Revo Everyday" text="Revo Everyday được phối trộn giữa vị đắng của hạt Robusta và hương thơm..."></CC2>,
    <CC2 img={img3} pris="275.000" pris2="260.000" name="Combo Revo Honey" text="Honey – trong tên gọi Revo Honey đến từ phương pháp chế biến hạt Arabica..."></CC2>,
    <CC2 img={img1} pris="147.000" pris2="155.000" name="Combo Revo Đậm Đà" text="Hàm lượng caffein trong Revo Đậm Đà đủ mạnh để làm bạn tỉnh táo làm việc..."></CC2>,
    <CC2 img={img2} pris="156.000" pris2="165.000" name="Combo Revo Everyday" text="Revo Everyday được phối trộn giữa vị đắng của hạt Robusta và hương thơm..."></CC2>,
    <CC2 img={img3} pris="275.000" pris2="260.000" name="Combo Revo Honey" text="Honey – trong tên gọi Revo Honey đến từ phương pháp chế biến hạt Arabica..."></CC2>,
]


const Carousel2 = () => {
    return(<AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
    />)
};

export default Carousel2;