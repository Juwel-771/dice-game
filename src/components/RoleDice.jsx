import React from 'react';
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
    return (
        <DiceContainer>
            <div className='dice'>
                <img src="images/dice/dice_1.png" alt="Dice" />
            </div>
             <p>Click Dice to Roll</p>
        </DiceContainer>
    );
};

export default RoleDice;