import React from 'react';
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
    return (
        <MainContainer>
            <div className='top-section'>
                <TotalScore></TotalScore>
                <NumberSelector></NumberSelector>
            </div>
            <RoleDice></RoleDice>
        </MainContainer>
    );
};

export default GamePlay;