import React from 'react'
import './blog.css'
import bigImage from "../../images/bigImage.png";
import bigImage1 from "../../images/bigImage1.png";

const data = [
    {
        id: 1,
        img: bigImage,
        btnText: 'View More',
        dif: 'Delicious',
        date: 'March 19, 2022',
        title: 'The Legend of US Cuisine: The Story of Hungry People',
        desc: 'Capitalize on low-hanging fruit to identify a ballpark value added matrix economically and the creative activity to beta test override the food quality.'
    },
    {
        id: 2,
        img: bigImage1,
        btnText: 'View More',
        dif: 'Cooking',
        date: 'March 19, 2022',
        title: 'The Most Popular Delicious Food of Mediterranean Cuisine',
        desc: 'Strategies on low-hanging fruit to identify a ballpark value added matrix economically and the creative activity to beta test override the food quality.'
    }
]

const Blog = () => {
    return (
        <div className='container'>
            <div className='textSideSection'>
                <div id='extraL' className='newWithBorder'>Blog</div>
                <div className='textOfer'>
                    <h1>Be First Who Read News</h1>
                    <p className='extraTextEffect'>Explore the latest stories about our dishes, offers,<br />events and future plans here.</p>
                </div>
            </div>
            <div className="bigcard">
                {data.map((item) => {
                    return <div key={item.id}>
                        <div className='bigImageSide'>
                            <button className='backBtn'>{item.btnText}</button>
                        </div>
                        <div className='bigZone'>
                            <div className='quote'>
                                <div id='extraL' className='quoteBorder'>{item.dif}</div>
                                <div className='quoteBorder'>{item.date}</div>
                            </div>
                            <div className='quoteText'>
                                <h2>{item.title}</h2>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Blog