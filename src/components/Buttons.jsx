import React from 'react';
import styled from 'styled-components';

const Button = styled.button `
    width: 200px;
    background-color: black;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 8px;
    font-family: 'poppins';
`


const Buttons = (props) => {
    return (
        <Button>{props.name}</Button>
    );
};

export default Buttons;