import React from 'react'
import './footer.css'
import logo from "../../images/logo.png";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import Instagram from '@mui/icons-material/Instagram';
import Facebook from '@mui/icons-material/Facebook';
import { Pinterest, Twitter } from '@mui/icons-material';

const data = [
    {
        id: 1,
        label: 'Styleguide',
        link: '/style-guide'
    },
    {
        id: 2,
        label: 'Licenses',
        link: '/licenses'
    },
    {
        id: 3,
        label: 'Protected',
        link: '/protected'
    },
    {
        id: 4,
        label: 'Not Found',
        link: '/not-found'
    }
]

const Footer = () => {
    return (
        <div className='ft-footer'>
            <div className='ft-01'>
                <div>
                    <h1 id='ft-text'>#TheTastEat</h1>
                </div>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div>
                    <Instagram sx={{ fontSize: 28, color: 'antiquewhite', margin: '0 5px', cursor: "pointer" }} />
                    <Facebook sx={{ fontSize: 28, color: 'antiquewhite', margin: '0 5px', cursor: "pointer" }} />
                    <Pinterest sx={{ fontSize: 28, color: 'antiquewhite', margin: '0 5px', cursor: "pointer" }} />
                    <Twitter sx={{ fontSize: 28, color: 'antiquewhite', margin: '0 5px', cursor: "pointer" }} />
                </div>
            </div>
            <div className='ft-02'>
                <div className='ft-text'>
                    <h1>© Copyright - TastEat | Designed by <span>VictorFlow</span> - Powered by <span>Webflow</span></h1>
                </div>
                <div className='ft-03'>
                    {data.map((item) => {
                        return <div className='ft-link' key={item.id}>
                            <a href={item.link}>{item.label}</a>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Footer