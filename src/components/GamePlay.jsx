import React from 'react';
import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';
import styled from 'styled-components';

const MainContainer = styled.main`
    .top-section {
        display: flex;
        justify-content: space-around;
        align-items: end;
    }
`

const GamePlay = () => {
    return (
        <MainContainer>
            <div className='top-section'>
                <TotalScore></TotalScore>
                <NumberSelector></NumberSelector>
            </div>
            
        </MainContainer>
    );
};

export default GamePlay;