import react, { useState } from 'react';
import styled from 'styled-components';
import GameButton from '../components/gameButton';

const NewGame = () => {
    const [name, setName] = useState("");

    return(
        <div>
            <div>
                <p>Enter a Name:</p>
                <input placeholder="profile name..."></input>
                <GameButton title="Create Profile"/>
            </div>
        </div>
    )
}

export default NewGame;