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
    cursor: pointer;
`;

const NotReadyButton = styled.button`
    background: rgb(80, 80, 80);
    color: white;
    border-radius: 20px;
    height: 25px;
    width: 140px;
    cursor: pointer;

    :disabled {
        background-color: rgba(120, 120, 120, 0.4);
        cursor: default;
    }
`;

const PlayerInput = (props) => {
    const [cards, setCards] = useState(props.cards);
    const [selectedCard, setSelectedCard] = useState(props.cards[0]);
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


    const toggleReadyButton = () => {
        ready ? (
            setReady(false)
        ) : (
            setReady(true)
        );

        props.fetch({
            username: props.username,
            playernr: props.playernr,
            cards: cards,
            selectedCard: parseInt(selectedCard),
            score: score,
            ready: !ready
        });
    }

    return (
        <PlayerInputContainer>
            <p className="title">Player {props.playernr}: {props.username}</p>
            <select 
                className="cardSelect" 
                disabled={ready}
                onChange={e => setSelectedCard(e.target.value)}
            >
                {cards.map(card => {
                    return(
                        <option key={card} value={card}>
                            {card}
                        </option>
                    )
                })}
            </select>
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
                    <NotReadyButton disabled={props.roundOver} onClick={() => toggleReadyButton()}>Not Ready!</NotReadyButton>
                ) : (
                    <ReadyButton onClick={() => toggleReadyButton()}>Ready!</ReadyButton>
                )}
            </div>
        </PlayerInputContainer>
    )
}

export default PlayerInput;