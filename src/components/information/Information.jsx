import React from 'react'
import './information.css'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import DiningOutlinedIcon from '@mui/icons-material/DiningOutlined';
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined';


const data = [
    {
        id: 1,
        icon: <CalendarMonthOutlinedIcon sx={{ fontSize: 60, color: 'antiquewhite' }} />,
        text: 'Opened 24/7'
    },
    {
        id: 2,
        icon: <DiningOutlinedIcon sx={{ fontSize: 60, color: 'antiquewhite' }} />,
        text: 'Special Menus'
    },
    {
        id: 3,
        icon: <DeliveryDiningOutlinedIcon sx={{ fontSize: 60, color: 'antiquewhite' }} />,
        text: 'Home Delivery'
    },
]


const Information = () => {
    return (
        <div className='container extraContainer'>
            <div className="miniContainer">
                <div className='miniLeftSide'>
                    <div className='miniBorder'>What we offer</div>
                    <div className='mini'>
                        <h1>Our Great Services</h1>
                        <p>The atmosphere set the stage. It’s about more than just a dining room away from your home. food takes the spotlight as guests.</p>
                    </div>
                </div>
                <div className='MiniRightSide'>
                    {data.map((item) => {
                        return <div className='mainMiniCard' key={item.id}>
                            <div className='mainMiniCardS'>
                                <div className='proS'>
                                    {item.icon}
                                    <h1>{item.text}</h1>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Information