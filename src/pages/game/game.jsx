import React from 'react';
import styled from 'styled-components';

const GameContainer = styled.div`
    height: 92vh;
    width: 100%;

    .contentContainer {
        display: flex;
        justify-content: space-around;
        
        .inputContainer {
            margin-top: 50px;
            height: 700px;
            width: 25%;
            background-color: white;
        }

        .resultContainer {
            margin-top: 50px;
            height: 700px;
            width: 65%;
            background-color: black;
        }
    }
`;

const Game = () => {

    return (
        <GameContainer>
            <div className="contentContainer">
                <div className="inputContainer">

                </div>
                <div className="resultContainer">

                </div>
            </div>
        </GameContainer>
    )
}

export default Game;