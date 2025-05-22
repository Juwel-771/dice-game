import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    width: 72px;
    height: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
`

const arrayNumber = [1,2,3,4,5,6];

const NumberSelector = () => {
    return (
        <div>
            {
                arrayNumber.map((value, idx) => <Box key={idx}>{value}</Box>)
            }
        </div>
    );
};

export default NumberSelector;