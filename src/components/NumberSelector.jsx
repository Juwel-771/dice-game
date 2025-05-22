import React, { useState } from 'react';
import styled from 'styled-components';
import './NumberSelector.css'

const Box = styled.div`
    width: 72px;
    height: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;

    background-color: ${(props)=> (props.isSelected ? "black" : "white")};
    color: ${(props)=> (!props.isSelected ? "black" : "white")};
`

const NumberSelectorContainer = styled.div `

    display: flex;
    flex-direction: column;
    align-items: end;

    .flex {
        display: flex;
        gap: 24px;
    }
    p {
        font-size: 24px;
    }
    .error {
        color: red;
        font-size: 14px;
    }
`

const arrayNumber = [1,2,3,4,5,6];

const NumberSelector = ({setError, error, selectedNumber, setSelectedNumber}) => {

    const numberSelectorHandler = (value) => {
        setSelectedNumber(value);
        setError("")
    }

    return (
        <NumberSelectorContainer>
            <p className='error'>{error}</p>
            <div className='flex'>
            {
                arrayNumber.map((value, idx) => 
                <Box
                    isSelected = {value == selectedNumber} 
                    key={idx} 
                    onClick={()=>numberSelectorHandler(value)
                    } >
                        {value}
                </Box>)
            }
        </div>
            <p>Select Number</p>
        </NumberSelectorContainer>
    );
};

export default NumberSelector;