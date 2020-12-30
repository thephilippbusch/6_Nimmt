import React, { useState } from 'react';
import styled from 'styled-components';
import GameButton from '../../components/gameButton';

const NewGame = () => {

    return(
        <div>
            <div>
                <h1>New Game</h1>
                <li>
                    <a href="/">Homepage</a>
                    <a href="/loadgame">Load Game</a>
                </li>
            </div>
        </div>
    )
}

export default NewGame;