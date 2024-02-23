import React from 'react'
import './info.css'
import { QueryBuilder, AppRegistration } from '@mui/icons-material'
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';

const data = [
    {
        id: 1,
        icon: <FmdGoodOutlinedIcon fontSize="large" />,
        title: 'Locate US',
        desc: 'Riverside 25, San Diego, California'
    },
    {
        id: 2,
        icon: <QueryBuilder fontSize="large" />,
        title: 'Open Hours',
        desc: 'Mon To Fri 9:00 AM - 9:00 PM'
    },
    {
        id: 3,
        icon: <AppRegistration fontSize="large" />,
        title: 'Reservation',
        desc: 'restaurantate@gmail.com'
    }
]

const Info = () => {
    return (
        <div className='main'>
            <div className='flexWrap'>
                {data.map((item) => {
                    return <div className='card' key={item.id}>
                        <span>{item.icon}</span>
                        <div className='left'>
                            <h1>{item.title}</h1>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Info