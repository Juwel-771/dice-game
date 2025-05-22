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
`

const arrayNumber = [1,2,3,4,5,6];

const NumberSelector = () => {

    const [selectedNumber, setSelectedNumber] = useState(0);

    return (
        <NumberSelectorContainer>
            <div className='flex'>
            {
                arrayNumber.map((value, idx) => 
                <Box
                    isSelected = {value == selectedNumber} 
                    key={idx} 
                    onClick={()=>setSelectedNumber(value)
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