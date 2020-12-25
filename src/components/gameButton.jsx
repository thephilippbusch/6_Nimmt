import React, {useState} from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: rgb(50, 50, 50);
    color: rgb(250, 250, 250);
    font-size: 17px;
    width: 300px;
    border: none;
    border-radius: 10px;
    height: 50px;
    cursor: pointer;

    :hover {
        background-color: rgb(70, 70, 70);
        color: rgb(220, 220, 220);
        border: solid 2px rgb(255, 255, 100);
    }
`;

const GameButton = props => {
    const title = props.title;
    const func = props.func;
    
    return (
        <StyledButton onClick={func}>
            {title}
        </StyledButton>
    )
}

export default GameButton;