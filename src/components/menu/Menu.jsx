import React from 'react'
import './menu.css'
import imageMenu from '../../images/image2.png'
import imageStatic from '../../images/eat.png'

const data = [
    {
        id: 1,
        category: 'starters',
        image: imageMenu,
        proName: 'Raw Scallops from Erquy',
        proAbout: 'Shuck the scallop to that used for oysters',
        price: '$40'
    },
    {
        id: 2,
        category: 'starters',
        image: imageMenu,
        proName: 'Spring Roll',
        proAbout: 'Add oil to a hot pan spring onion whites',
        price: '$40'
    },
    {
        id: 3,
        category: 'starters',
        image: imageMenu,
        proName: 'French Onion Soup',
        proAbout: 'Wheat flour, apple cider vinegar, bread',
        price: '$40'
    },
    {
        id: 4,
        category: 'starters',
        image: imageMenu,
        proName: 'Tomato Bruschetta',
        proAbout: 'Bread, olive oil, garlic, black pepper',
        price: '$40'
    },
    {
        id: 5,
        category: 'maindish',
        image: imageMenu,
        proName: 'Grilled Salmon with Dill Sauce',
        proAbout: 'Brown sugar, salmon fillet, Dijon mustard',
        price: '$40'
    },
    {
        id: 6,
        category: 'maindish',
        image: imageMenu,
        proName: 'Roast Beef with Vegetable',
        proAbout: 'Green beans, rib eye, olive oil, beef',
        price: '$40'
    },
    {
        id: 7,
        category: 'maindish',
        image: imageMenu,
        proName: 'Marrkesh Vegetetarian Curruy',
        proAbout: 'Sweet potato, eggplant, garbanzo bean',
        price: '$40'
    },
    {
        id: 8,
        category: 'maindish',
        image: imageMenu,
        proName: 'Spicy Vegan Potato Curry',
        proAbout: 'Coconut milk, beans, potatoes, curry powder',
        price: '$40'
    },
    {
        id: 9,
        category: 'desserts',
        image: imageMenu,
        proName: 'Spicy Vegan Potato Curry',
        proAbout: 'Coconut milk, beans, potatoes, curry powder',
        price: '$40'
    },
    {
        id: 10,
        category: 'desserts',
        image: imageMenu,
        proName: 'Spicy Vegan Potato Curry',
        proAbout: 'Coconut milk, beans, potatoes, curry powder',
        price: '$40'
    },
]

const Menu = () => {
    return (
        <div className='container'>
            <div className='borderWithMenu'>menu</div>
            <div className='startFlex'>
                <div className='staticSide'>
                    <div className='texts'>
                        <h1>Try Our Special dishes</h1>
                        <p>Every time you perfectly dine with us, it should happy for great inspired food in an environment designed with individual touches unique to the local area.</p>
                        <img src={imageStatic} alt="" />
                        <button className='borderBtn plusC'>See all dishes</button>
                    </div>
                </div>
                <div className='menuSide'>
                    <div className='starter'>
                        <div>
                            <h1 className='forText'>Starters</h1>
                            {data.filter((e) => e.category.includes('starter')).map((item) => {
                                return <div key={item.id} className='loveCard'>
                                    <div><img src={item.image} alt="" /></div>
                                    <div className='text'>
                                        <h2>{item.proName}</h2>
                                        <p>{item.proAbout}</p>
                                    </div>
                                    <div className='place'></div>
                                    <div className='price'><h1>{item.price}</h1></div>
                                </div>
                            })}
                        </div>
                        <div>
                            <h1 className='forText'>Main Dishes</h1>
                            {data.filter((e) => e.category.includes('maindish')).map((item) => {
                                return <div key={item.id} className='loveCard'>
                                    <div><img src={item.image} alt="" /></div>
                                    <div className='text'>
                                        <h2>{item.proName}</h2>
                                        <p>{item.proAbout}</p>
                                    </div>
                                    <div className='place'></div>
                                    <div className='price'><h1>{item.price}</h1></div>
                                </div>
                            })}
                        </div>
                        <div>
                            <h1 className='forText'>Desserts</h1>
                            {data.filter((e) => e.category.includes('desserts')).map((item) => {
                                return <div key={item.id} className='loveCard'>
                                    <div><img src={item.image} alt="" /></div>
                                    <div className='text'>
                                        <h2>{item.proName}</h2>
                                        <p>{item.proAbout}</p>
                                    </div>
                                    <div className='place'></div>
                                    <div className='price'><h1>{item.price}</h1></div>
                                </div>
                            })}
                        </div>
                    </div>
                    <div className='mainDish'></div>
                    <div className='dessert'></div>
                </div>
            </div>
        </div>
    )
}

export default Menu