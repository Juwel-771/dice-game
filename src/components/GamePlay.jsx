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
    const [score, setScore] = useState(0);
    const [selectedNumber, setSelectedNumber] = useState(0);
    const [currentDice, setCurrentDice] = useState(1);
    const [error, setError] = useState("");


       const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }

    const roleDice = () => {
        if(!selectedNumber){
            setError("You have not selected any number");
            return;
        }
        setError("");
        const randomNumber = generateRandomNumber(1, 7);
        setCurrentDice(randomNumber);

        if(selectedNumber === randomNumber){
            setScore((prev)=>prev+randomNumber);
        }else {
            setScore((prev)=>prev-2);
        }

        setSelectedNumber(undefined)
    }

    return (
        <MainContainer>
            <div className='top-section'>
                <TotalScore score = {score} ></TotalScore>
                <NumberSelector 
                    setError = {setError} 
                    error = {error} 
                    selectedNumber = {selectedNumber} 
                    setSelectedNumber = {setSelectedNumber}>
                </NumberSelector>
            </div>
            <RoleDice currentDice = {currentDice} roleDice = {roleDice}></RoleDice>
        </MainContainer>
    );
};

export default GamePlay;