import React, {useState} from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    background-image: url(button-background.png);
    color: rgb(250, 250, 250);
    font-size: 17px;
    width: 300px;
    border: none;
    border-radius: 10px;
    height: 50px;
    cursor: pointer;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);

    :hover {
        color: rgb(220, 220, 220);
        border: solid 3px rgb(66, 78, 150);
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