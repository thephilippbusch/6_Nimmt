import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PlayerInput from '../../components/player_input';

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

const mocks = [
    {key:0, username:"Phillex", playernr: 1, cards: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], score:0},
    {key:1, username:"Kati", playernr: 2, cards: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], score:0},
    {key:2, username:"Clara", playernr: 3, cards: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], score:0}
]

const Game = () => {
    const [allPlayer, setAllPlayer] = useState(mocks);
    const [globalReady, setGlobalReady] = useState(false);
    const [sampleState, setSampleState] = useState("Hello World!");

    const fetchPlayer = (data) => {
        let temp = allPlayer;
        
        temp.forEach((player, i) => {
            if(player.playernr == data.playernr) {
                temp[i] = data;
            }
        });

        setAllPlayer(temp);
        console.log(allPlayer);
        checkReady(temp);
    }

    const checkReady = (data) => {
        let readyCount = true;
        data.map(player => {
            if(!player.ready) {
                readyCount = false;
            }
        });
        if(readyCount) {
            setTimeout(() => {alert("All Players are Ready!")}, 3000);
        }
    }

    return (
        <GameContainer>
            <div className="contentContainer">
                <div className="inputContainer">
                    {mocks.map(mock => {
                        return(
                            <PlayerInput 
                                key={mock.key} 
                                username={mock.username} 
                                playernr={mock.playernr} 
                                cards={mock.cards} 
                                score={mock.score} 
                                fetch={(data) => fetchPlayer(data)}
                            />
                        )
                    })}
                </div>
                <div className="resultContainer">

                </div>
            </div>
        </GameContainer>
    )
}

export default Game;