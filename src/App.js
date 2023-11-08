import './App.css';
import Heder from './heder/heder';
import Tiap1 from './tiap1/tiap1';
import Tiap2 from './tiap2/tiap2';
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


function App() {
  return(
    <div>
      <Heder></Heder>
      <Tiap1></Tiap1>
      <Tiap2></Tiap2>
    </div>
  );
  
}

export default App;
