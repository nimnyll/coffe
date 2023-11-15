import './App.css';
import Heder from './heder/heder';
import Tiap1 from './tiap1/tiap1';
import Tiap2 from './tiap2/tiap2';
import Tiap3 from './tiap3/tiap3';
import Tiap4 from './tiap4/tiap4';
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Carousel1 from './slider2/slider2';


function App() {
  return(
    <div>
      <Heder></Heder>
      <Tiap1></Tiap1>
      <Tiap2></Tiap2>
      <Tiap3></Tiap3>
      <Tiap4></Tiap4>
    </div>
  );
  
}

export default App;
