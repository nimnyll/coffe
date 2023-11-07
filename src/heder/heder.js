import imghed1 from '../img/revo_logo.png';
import imghed2 from '../img/30072807_909538065884146_2710474531215143694_o.png'
import imghed3 from '../img/IC_CART.png'

function Heder ({image}){
    return(
        <div className='flex'>
            <div className='hed1'>
                <h1 className='h1'>YOUR<span className='s-h1'> PERSONALIZED</span> COFFEE</h1>
            </div>
            <div className='hed2'>
                <ul>
                    <li className='li1-hed2'>TRANG CHỦ</li>
                    <li className='li-hed2'>COFFEE</li>
                    <li className='li-hed2'>PHIN MẠ MÀU</li>
                    <li className='li-hed2'>COMBO PHIN PHÊ</li>
                    <li className='li-hed2'>GIFTSET</li>
                    <li className='li-hed2'>LIÊN HỆ</li>
                </ul>
            </div>
        </div>
    )
}

export default Heder;