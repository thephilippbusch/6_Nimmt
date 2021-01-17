import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const PlayerInputContainer = styled.div`
    background-color: red;
    width: 90%;
    
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 5%;

    .title {
        color: white;
        margin: 0;
        width: 100%;
    }

    .cardSelect {
        margin-top: 10px;
        width: 90%;
    }

    .splitter {
        display: flex;
        justify-content: space-around;
        margin-top: 30px;
        width: 100%;

        .score {
            margin: 0;
            color: white;
        }
    }
`;

const ReadyButton = styled.button`
    background: white;
    color: red;
    border-radius: 20px;
    height: 25px;
    width: 140px;
`;

const NotReadyButton = styled.button`
    background: rgb(80, 80, 80);
    color: white;
    border-radius: 20px;
    height: 25px;
    width: 140px;
`;

const PlayerInput = (props) => {
    const [cards, setCards] = useState(props.cards);
    const [score, setScore] = useState(props.score);
    const [ready, setReady] = useState(false);
    const rows = [1, 2, 3, 4];

    const updateCardOptions = () => {
        const options = cards.map(card => {
            return(
                <option value={card}>
                    {card}
                </option>
            );
        });
        return(options);
    }

    useEffect(() => {
        props.fetch({
            playernr: props.playernr,
            score: score,
            ready: ready
        });
    })

    const toggleReadyButton = () => {
        ready ? (
            setReady(false)
        ) : (
            setReady(true)
        );
    }

    return (
        <PlayerInputContainer>
            <p className="title">Player {props.playernr}: {props.username}</p>
            <select className="cardSelect" disabled={ready}>{cards.map(card => {
                return(
                    <option key={card} value={card}>
                        {card}
                    </option>
                )
            })}</select>
            <select className="cardSelect" disabled={ready}>{rows.map(row => {
                return(
                    <option key={row} value={row}>
                        {row}
                    </option>
                )
            })}</select>
            <div className="splitter">
                <p className="score">{score}</p>
                {ready ? (
                    <NotReadyButton onClick={() => toggleReadyButton()}>Not Ready!</NotReadyButton>
                ) : (
                    <ReadyButton onClick={() => toggleReadyButton()}>Ready!</ReadyButton>
                )}
            </div>
        </PlayerInputContainer>
    )
}

export default PlayerInput;