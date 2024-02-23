import React from 'react'
import './popular.css'
import card1 from "../../images/forCard1.png";
import card2 from "../../images/forCard2.png";
import card3 from "../../images/forCard3.png";
import card4 from "../../images/forCard4.png";

const data = [
    {
        id: 1,
        title: 'Chicken Manjoori',
        cost: '$15',
        desc: 'Dish relished by all age groups as a starter dish at parties.',
        img: card1,
    },
    {
        id: 2,
        title: 'Chicken Manjoori',
        cost: '$15',
        desc: 'Dish relished by all age groups as a starter dish at parties.',
        img: card2,
    },
    {
        id: 3,
        title: 'Chicken Manjoori',
        cost: '$15',
        desc: 'Dish relished by all age groups as a starter dish at parties.',
        img: card3,
    },
    {
        id: 4,
        title: 'Chicken Manjoori',
        cost: '$15',
        desc: 'Dish relished by all age groups as a starter dish at parties.',
        img: card4,
    },
]

const PopularFood = () => {
    return (
        <div className='popularSection'>
            <div className='textSideSection'>
                <div className='newWithBorder'>MENU</div>
                <div className='textOfer'>
                    <h1>Popular Dishes</h1>
                    <p>There is a game between the waiters in restaurant to see who serves the food to <br />each table fastest. That led to attempting the Guinness Record.</p>
                </div>
            </div>
            <div className='cardSideSection'>
                <div className='flexCardMain'>
                    {data.map((item) => {
                        return <div key={item.id}>
                            <div className='imageCard'>
                                <img src={item.img} alt="" />
                                <div className='cardMainTitle'>
                                    <h1>{item.title}</h1>
                                    <h1>{item.cost}</h1>
                                </div>
                                <div className='cardSecondDesc'>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
                <div className='saidMain'>
                    <button className='borderBtn extra'>See All Dishes</button>
                </div>
            </div>
        </div>
    )
}

export default PopularFood