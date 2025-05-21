import React from 'react';
import './Home.css'
import dice from '../images/dices.png'
import dice_img from '/images/dicesTwo.png'
import Buttons from './Buttons';



const Home = () => {
    return (
        <section className='home_container'>
            <div className='dice_img'>
                <img src={dice_img} alt="" />
            </div>
            <div>
                <h1 className='dice_name'>DICE GAME</h1>
                <Buttons name = "Play Dice"></Buttons>
            </div>
        </section>
    );
};

export default Home;