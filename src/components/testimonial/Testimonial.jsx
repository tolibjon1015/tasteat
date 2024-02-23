import React from 'react'
import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import './testimonial.css'

import img from '../../images/forCardImg.png'
import img1 from '../../images/forCardImg1.png'
import img2 from "../../images/forCardImg2.png";
import fullImage from "../../images/fullImg.png";


const data = [
    {
        id: 1,
        image: img,
        name: 'Natasha D',
        county: 'New York',
        desc: 'They known for its fabulous taste and food. Anywhere you go your hunger is satisfied. The best chicken & burgers those are yummy.'
    },
    {
        id: 2,
        image: img1,
        name: 'Jack Sparrow',
        county: 'Salt Lake City',
        desc: 'I have visited this fantastic restaurant on several occasions, food is absolutely outstanding & attention to detail is in league of its own.'
    },
    {
        id: 3,
        image: img2,
        name: 'Martin L',
        county: 'San Diego',
        desc: 'Perfectly known for its fabulous taste and food. Anywhere your hunger is satisfied. They give best fried chicken and burgers those are yummy.'
    },
    {
        id: 4,
        image: img,
        name: 'Natasha D',
        county: 'New York',
        desc: 'They known for its fabulous taste and food. Anywhere you go your hunger is satisfied. The best chicken & burgers those are yummy.'
    },
]

const Testimonial = () => {

    return (
        <div>
            <div className='testimonial'>
                <div className='testiWithBorder'>Testimonial</div>
                <div className='textSide'>
                    <h1>our clients say</h1>
                    <p>We love to hear from customers, so please leave a comment or say hello in an email.</p>
                </div>
                <div className='containerFath'>
                    <Carousel
                        withIndicators
                        height={200}
                        slideSize="33.333333%"
                        slideGap="md"
                        loop
                        align="start"
                        slidesToScroll={3}
                    >
                        <div className='containerMain'>
                            {data.map((item) => {
                                return <div className='containerTesti' key={item.id}>
                                    <Carousel.Slide >
                                        <div className='topTesti'>
                                            <img src={item.image} alt="" />
                                            <div className='ParagraphT'>
                                                <h1>{item.name}</h1>
                                                <p>{item.county}</p>
                                            </div>
                                        </div>
                                        <div className='downTesti'>
                                            <p>{item.desc}</p>
                                        </div>
                                    </Carousel.Slide>
                                </div>
                            })}
                        </div>
                    </Carousel>
                </div>
            </div >
            <div className='fullImageS'>
                <img src={fullImage} alt="" />
            </div>
        </div>
    )
}

export default Testimonial