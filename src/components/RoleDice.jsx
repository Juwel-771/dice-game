import React, { useState } from 'react';
import styled from 'styled-components';

const DiceContainer = styled.div`
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .dice {
        cursor: pointer;
    }
    p {
        font-size: 24px;
    }
`


const RoleDice = () => {

    const [currentDice, setCurrentDice] = useState(1);
    
    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }

    const roleDice = () => {
        const randomNumber = generateRandomNumber(1, 7);
        setCurrentDice(randomNumber);
    }

    return (
        <DiceContainer>
            <div className='dice' onClick={roleDice}>
                <img src={`images/dice/dice_${currentDice}.png`} alt="Dice" />
            </div>
             <p>Click Dice to Roll</p>
        </DiceContainer>
    );
};

export default RoleDice;