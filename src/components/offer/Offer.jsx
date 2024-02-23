import React from 'react'
import './offer.css'
import vector from "../../images/Vector.png";
import vector2 from "../../images/Vector1.png";
import backImg from "../../images/card1.png";
import backImg1 from "../../images/card2.png";
import burger from "../../images/food.png";
import pizza from "../../images/pizza.png";

const data = [
    {
        id: 1,
        backImg: backImg,
        foodImg: burger,
        vectorImg: vector,
        sale: 'only<br/>$10',
        title: '50% Offer Going',
        mainTitle: 'Chicken Burger',
        desc: 'Chicken burger with the tasty toppings and leaves.'
    },
    {
        id: 2,
        backImg: backImg1,
        foodImg: pizza,
        vectorImg: vector2,
        sale: 'only<br/>$9',
        title: '50% Offer Going',
        mainTitle: 'Chicken Pizza',
        desc: 'Pizza with multiple flavor and the toping are mixed.'
    }
]

const Offer = () => {
    return (
        <div className='containerOf'>
            <div className='textWithOffer'>
                <div className='newWithBorder'>OFFERS</div>
                <div className='textOfer'>
                    <h1>Our Offer dishes</h1>
                    <p>Our chefs create melt-in-your-mouth dishes that'll satiate even the fussiest eaters now <br />the dishes are in offers use it based on hunger.</p>
                </div>
            </div>
            <div className='cardWithOffer'>
                {data.map((item) => {
                    return <div className='flexOffer' key={item.id}>
                        <div className='textOfferSide'>
                            <img src={item.vectorImg} alt="" />
                            <h2 className='growBottom'>{item.title}</h2>
                            <h1>{item.mainTitle}</h1>
                            <p>{item.desc}</p>
                        </div>
                        <div>
                            <img src={item.foodImg} alt="" />
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Offer