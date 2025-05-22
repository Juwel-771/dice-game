import React from 'react';
import './Home.css'
import dice_img from '/images/dicesTwo.png'
import Buttons from './Buttons';



const Home = ({toggle}) => {
    return (
        <section className='home_container'>
            <div className='dice_img'>
                <img src={dice_img} alt="" />
            </div>
            <div>
                <h1 className='dice_name'>DICE GAME</h1>
                <button onClick={toggle} style={{border: "none"}}>
                    <Buttons name = "Play Dice"></Buttons>
                </button>
            </div>
        </section>
    );
};

export default Home;