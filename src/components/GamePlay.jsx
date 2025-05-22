import React from 'react';
import { useState } from 'react';
import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';
import styled from 'styled-components';
import RoleDice from './RoleDice';
import Buttons from './Buttons';
import Rules from './Rules';

const MainContainer = styled.main`
    padding-top: 20px;
    .top-section {
        display: flex;
        justify-content: space-around;
        align-items: end;
    }

    .bottom-btn {
        margin-top: 40px;
        display: flex;
        /* flex-direction: column; */
        gap: 15px;
        align-items: center;
        justify-content: center;
    }

    .bottom-btn button {
        border: 0px;
    }
`

const GamePlay = () => {
    const [score, setScore] = useState(0);
    const [selectedNumber, setSelectedNumber] = useState(0);
    const [currentDice, setCurrentDice] = useState(1);
    const [error, setError] = useState("");
    const [showRules, setShowRules] = useState(false);


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

    const resetScore = () => {
        setScore(0);
        setError("");
    }

    const handleRulesShow = () => {
        setShowRules(!showRules);
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
            <div className='bottom-btn'>
                <button onClick={resetScore}>
                    <Buttons name = "Reset"></Buttons>
                </button>
                <button onClick={handleRulesShow}>
                    <Buttons name = {showRules ? "Hide Rules": "Show Rules"}></Buttons>
                </button>
            </div>
            {showRules && <Rules></Rules>}
        </MainContainer>
    );
};

export default GamePlay;