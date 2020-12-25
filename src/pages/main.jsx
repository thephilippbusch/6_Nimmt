import React, {useState} from 'react';
import styled from 'styled-components';
import GameButton from '../components/gameButton';
import Header from './header';

const MainMenuContainer = styled.div`
    width: 100%;
    height: 100vh;

    .buttonDiv {
        margin-top: 50px;
        width: fit-content;
        height: 350px;
        align-items: center;
        justify-content: space-around;
        display: flex;
        flex-direction: column;
        margin-left: 40px;
    }
`;

const MainMenu = () => {
    const [count, setCount] = useState(0);

    return(
        <MainMenuContainer>
            <Header />

            <div className="buttonDiv">
                <GameButton title={"Continue"} func={() => setCount(count + 1)}/>
                <GameButton title={"New Game"} func={() => setCount(0)}/>
                <GameButton title={"Load Game"} />
                <GameButton title={"Switch Profile"} />
                <GameButton title={"Exit"} />
                {/*<GameButton onClick={() => setCount(count + 1)}>Plus One</GameButton>
                <GameButton onClick={() => setCount(0)}>Reset</GameButton>
                <GameButton>Load Game</GameButton>
                <GameButton>Switch Profile</GameButton>
                <GameButton>Exit</GameButton>*/}
            </div>
        </MainMenuContainer>
    )
}

export default MainMenu;