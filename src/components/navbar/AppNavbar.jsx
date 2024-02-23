import React from 'react'
import "./navbar.css"
import TopSide from './components/topSide/TopSide'
import DownSide from './components/downSide/DownSide'


const AppNavbar = () => {
    return (
        <div>
            <TopSide />
            <DownSide />
        </div>
    )
}

export default AppNavbar