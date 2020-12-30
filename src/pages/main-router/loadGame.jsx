import React, { useState } from 'react';
import styled from 'styled-components';
import GameButton from '../../components/gameButton';

const LoadGame = () => {

    return(
        <div>
            <div>
                <h1>Load Game</h1>
                <li>
                    <a href="/">Homepage</a>
                    <a href="/newgame">New Game</a>
                </li>
            </div>
        </div>
    )
}

export default LoadGame;