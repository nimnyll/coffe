function CC2({img, pris, pris2, name, text}){
        console.log(pris2);
    return(
        <article className="CC2">
            <img className="img-CC2" src={img}/>
            <span>
                <div className="flex">
                    <p className="pris-CC2">{pris}</p>
                    <p className="pris2-CC2">{pris2}</p>
                </div>
                <h2 className="h2-CC2">{name}</h2>
                <p className="text-CC2">{text}</p>
                <div className="flex">
                    <button className="button-CC1">MUA NGAY</button>
                    <p className="p-CC11">CHI TIẾT</p>
                </div>
            </span>
        </article>
    )
}

export default CC2;