import img1hed1 from '../img/revo_logo.png';
import img2hed1 from '../img/30072807_909538065884146_2710474531215143694_o.png'

function Heder (){
    return(
        <div className="flex">
            <div className="heder1 ">
                <img className="img1-hed1" src={img1hed1}></img>
                <img className="img2-hed1" src={img2hed1}></img>
                <h1 className ="h1">YOUR PERSONALIZED  COFFEE</h1>
            </div>
            <div></div>
        <div className="heder2"></div>
        </div>
    )
}

export default Heder;