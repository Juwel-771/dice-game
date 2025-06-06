import React from "react";
import styled from "styled-components";

const ScoreContainer = styled.div `
    max-width: 200px;
    text-align: center;

    h1{
        font-family: 'poppins';
        font-size: 100px;
        line-height: 100px;
    }

    p{
        font-family: 'poppins';
        font-size: 24px;
        font-weight: 500px;
    }
`

const TotalScore = ({score}) => {
  return (
    <ScoreContainer>
      <h1> {score} </h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

export default TotalScore;
