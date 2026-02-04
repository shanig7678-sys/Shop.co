import { SellingData } from '../staticData/SellingData';
import '../App.css'

const TopSelling = () => {

    return (

        <section className='arrival-section'>
            <h2 className="title">Top Selling</h2>
            <div className="arrival-container">
                {
                    SellingData.map((curVal) => {
                        const { id, name, img, price, star, rate, discount, off } = curVal;
                        return (
                            <div className="arrival-card" key={id}>
                                <div className="arrival-img">
                                    <img src={img} alt={name} />
                                </div>
                                <div className="arrival-content">
                                    <h1 className="arrival-title">{name}</h1>
                                    <div className="arrival-rate">
                                        <img src={star} alt={rate} />
                                        <p className="star-rate">{rate}</p>
                                    </div>
                                    <div className="arrival-price">
                                        <p className="arrival-price-offer">{price}</p>
                                        <p className="arrival-price-discount">{discount}</p>
                                        {
                                            off ?
                                                <div className="arrival-discount">
                                                    <p>{off}</p>
                                                </div> :
                                                ""
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <button type="button" className="arrival-btn">
                View All
            </button>
        </section>

    )

}

export default TopSelling
