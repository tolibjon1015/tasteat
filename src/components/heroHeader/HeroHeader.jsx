import React from 'react'
import './hero.css'
import LeftSide from './components/leftSide/LeftSide'
import RightSide from './components/rightSide/RightSide'

const HeroHeader = () => {
    return (
        <div className="mainHero">
            <LeftSide />
            <RightSide />
        </div>
    )
}

export default HeroHeader