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
    font-size: 16px;
    border: 1px solid transparent;
    transition: 0.2s background ease-in;

    cursor: pointer;

    &:hover {
        background-color: white;
        outline: 1px solid black;
        color: black;
        transition: 0.2s background ease-in;
    }
`


const Buttons = (props) => {
    return (
        <Button>{props.name}</Button>
    );
};

export default Buttons;