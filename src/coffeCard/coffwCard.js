

function CoffeCard ({image, header, text, price}){
    return(
            <article className="coffecard flex">
                <img src={image} className="img-CC"/>
                <span children="coffecart-s">
                    <p className="p-CC">{price}</p>
                    <h2 className="h2-CC">{header}</h2>
                    <h3 className="h3-CC">{text}</h3>
                    <button className="button-CC">MUA NGAY</button>
                    <p className="p2-CC">CHI TIẾT</p>
                </span>
            </article>
    )
}

export default CoffeCard;