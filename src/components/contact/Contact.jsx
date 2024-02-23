import React from 'react'
import './contact.css'

const Contact = () => {
    return (
        <div className='firstContact'>
            <div className='contactMainCard'>
                <div id='contact'>
                    <div>
                        <div>
                            <div id='border' className='testiWithBorder'>reservation</div>
                            <h1 className='textHMain'>Book Your Table</h1>
                        </div>
                        <div className='cnt-container'>
                            <div className='firstInputC'>
                                <input id='allInput' type="text" placeholder='Name' />
                                <input id='allInput' type="email" placeholder='Email' />
                            </div>
                            <div className='secondInputC'>
                                <input id='allInputT' type="text" placeholder='Person' />
                                <input id='allInputT' type="datetime" placeholder='Timing' />
                                <input id='allInputT' type="datetime" placeholder='Date' />
                            </div>
                            <div id='containerBtn'>
                                <button id='btn'>Book A Table</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact