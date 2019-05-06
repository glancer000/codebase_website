import React from 'react'

import headerStyles from './hero.module.scss'
import phone from '../images/front.png';


const Hero = () => {


    return(
        <header className={headerStyles.container}>
            <div className={headerStyles.content}>
                <div className={headerStyles.title}>
                    <h1>We develop once, you deploy everywhere</h1>
                    <h5>Build beautiful native mobile and web apps from one single codebase</h5>
                </div>
                <div className={headerStyles.image}><img src={phone} alt="phone" /></div>   
            </div> 
             
        </header>
    )
}

export default Hero