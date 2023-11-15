import img1 from '../img/CC1.2.png'
import img2 from '../img/CC1.3.png'

function CoffeCard1 ({img, pris, name, text}){
    return (
        <article className="coffecard1 flex">
            <img className="img-CC1" src={img}></img>
            <span className="s-CC1">
                <p className="p-CC1">{pris}</p>
                <h2 className="h2-CC1">{name}</h2>
                <p className="p1-CC1">{text}</p>
                <article className="art1-CC di">
                    <img  src={img1}></img>
                    <p className='p-art-CC1 di'>Loại hạt<br/>Fine Robusta Blend</p>
                </article>
                <article className="art2-CC1 di">
                    <img className='img1-art-CC1'src={img2}></img>
                    <p className='p-art-CC1 di'>Độ cao<br/>700 - 800m</p>
                </article>
                <div className='flex'>
                    <button className="button-CC1">MUA NGAY</button>
                    <p className='p-CC11'>CHI TIẾT</p>
                </div>
            </span>
        </article>
    )
}

export default CoffeCard1;