import React from 'react';
import { useState } from 'react';
import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';
import styled from 'styled-components';
import RoleDice from './RoleDice';

const MainContainer = styled.main`
    padding-top: 70px;
    .top-section {
        display: flex;
        justify-content: space-around;
        align-items: end;
    }
`

const GamePlay = () => {
    const [selectedNumber, setSelectedNumber] = useState(0);
    const [currentDice, setCurrentDice] = useState(1);

    return (
        <MainContainer>
            <div className='top-section'>
                <TotalScore ></TotalScore>
                <NumberSelector selectedNumber = {selectedNumber} setSelectedNumber = {setSelectedNumber}></NumberSelector>
            </div>
            <RoleDice currentDice = {currentDice} setCurrentDice = {setCurrentDice}></RoleDice>
        </MainContainer>
    );
};

export default GamePlay;