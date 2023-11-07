import img1 from '../img/ic.png'
import img2 from '../img/IC.1.png'
import img3 from '../img/IC.2.png'
import img4 from '../img/IC.3.png'

function Tiap1 ({image}){
    return(
        <div className="tiap1">
            <p className="p-tiap1">Your Personalized Coffee</p>
            <h2 className="h2-tiap1">COFFEE BUILD YOUR BASE</h2>
            <div className=' tiap12 flex'>
                <article className="art-tiap1">
                    <img src={img1} className="img-tiap1"/>
                    <h3 className="h3-tiap1">Nguồn gốc</h3>
                    <p className="p2-tiap1">Những hạt cà phê Arabica, Robusta đạt 
                    chất lượng theo tiêu chuẩn quốc tế.</p>
                </article>
                <article className="art-tiap1">
                    <img src={img2} className="img-tiap1"/>
                    <h3 className="h3-tiap1">Chất lượng</h3>
                    <p className="p2-tiap1">Từng một hạt cà phê là cả một quá trình tập trung 
                    cao độ của nghệ nhân cà phê.</p>
                </article>
                <article className="art-tiap1">
                    <img src={img3} className="img-tiap1"/>
                    <h3 className="h3-tiap1">Các loại hạt</h3>
                    <p className="p2-tiap1">70% chất lượng tách cà phê đến từ nguồn gốc và 
                    chất lượng green bean.</p>
                </article>
                <article className="art-tiap1">
                    <img src={img4} className="img-tiap1"/>
                    <h3 className="h3-tiap1">Pha chế</h3>
                    <p className="p2-tiap1">Những hạt cà phê được lột xác qua quá trình rang xay 
                    kỹ lưỡng và nghiêm ngặt.</p>
                </article>
            </div>
        </div>
    )
}

export default Tiap1;