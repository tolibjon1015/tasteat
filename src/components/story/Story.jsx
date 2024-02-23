import React from 'react'
import './story.css'
import mainImage from '../../images/image1.png'
import signature from '../../images/josefine.png'

const Story = () => {
    return (
        <div className='container bgColor'>
            <div className='leftSection'>
                <img src={mainImage} alt="" />
            </div>
            <div className='rightSection'>
                <div className='firstText'>
                    <h1>The Delicious Story</h1>
                    <p>The people, food and the prime locations make the perfect place for the friends & family to come together and have great time.</p>
                </div>
                <div className='secondText'>
                    <div className='first'>
                        <h1>2018</h1>
                        <p>Plan for this restaurant to deliver healthy food.</p>
                    </div>
                    <div className='second'>
                        <h1>2022</h1>
                        <p>Happily in the fourth year by fulfill the motto.</p>
                    </div>
                </div>
                <div className='signature'>
                    <h1>Josefine</h1>
                    <img src={signature} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Story