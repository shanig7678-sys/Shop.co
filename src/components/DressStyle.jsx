import React from 'react'

const DressStyle = () => {

    return (
        <>
            <section className='dressStyle-section'>
                <h2>BROWSE BY dRESS STYLE</h2>
                    <div className="dress-container">
                        <div className="dress-img-1">
                            <div className="causal-card">
                                <h3 className='causal-title'>CASUAL</h3>
                                <img src="./casual.svg" alt="casual" />
                            </div>
                            <div className="formal-card">
                                <h3 className='formal-title'>FROMAL</h3>
                                <img src="./formal.svg" alt="formal" />
                            </div>
                        </div>
                        <div className="dress-img-2">
                            <div className="party-card">
                                <h3 className='party-title'>PARTY</h3>
                                <img src="./party.svg" alt="party" />
                            </div>
                            <div className="gym-card">
                                <h3 className='gym-title'>GYM</h3>
                                <img src="./gym.svg" alt="gym" />
                            </div>
                        </div>
                    </div>
            </section>
        </>
    )
}

export default DressStyle
