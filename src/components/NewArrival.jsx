import { ArrivalData } from "../staticData/ArrivalData"
import '../App.css'

const NewArrival = () => {
    return (
        <section className="arrival-section">
            <h2 className="title">NEW ARRIVALS</h2>
            <div className="arrival-container">
                {
                    ArrivalData.map((curVal) => {
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
                                        <div className="arrival-discount">
                                            <p>{off}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </section>
    )
}

export default NewArrival
