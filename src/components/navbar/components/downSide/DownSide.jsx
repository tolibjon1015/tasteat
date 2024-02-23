import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import "../../navbar.css"
import { Twitter, Pinterest } from '@mui/icons-material';

const data = [
    {
        id: 1,
        label: 'Home',
        link: '/'
    },
    {
        id: 2,
        label: 'About Us',
        link: '/about'
    },
    {
        id: 3,
        label: 'Our Menu',
        link: '/menu'
    },
    {
        id: 4,
        label: 'Pages',
        link: '/pages'
    },
    {
        id: 5,
        label: 'Blog',
        link: '/blog'
    },
    {
        id: 6,
        label: 'Contact Us',
        link: '/contact'
    }
]

const DownSide = () => {
    return (
        <div className='sectionDown'>
            <div className='links'>
                {data.map((item) => {
                    return <div key={item.id} className='mainLinks'>
                        <a href={item.link}>{item.label}</a>
                    </div>
                })}
            </div>
            <div className='socialMedia'>
                <InstagramIcon className='icon' />
                <FacebookIcon className='icon' />
                <Twitter className='icon' />
                <Pinterest className='icon' />
            </div>
        </div>
    )
}

export default DownSide