import React, {useState} from 'react';
import styled from 'styled-components';
import GameButton from '../components/gameButton';
import Header from './header';

const MainMenuContainer = styled.div`
    width: 100%;
    height: 100vh;
    
    .contentContainer {
        display: flex;

        .buttonDiv {
            margin-top: 50px;
            width: 30%;
            height: 350px;
            align-items: center;
            justify-content: space-around;
            display: flex;
            flex-direction: column;
        }

        .titleScreen {
            width: 70%;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 92vh;

            .titleImage {
                height: 80%;
            }
        }
    }
`;

const HomePage = () => {
    const [count, setCount] = useState(0);

    return(
        <MainMenuContainer>
            <Header />

            <div className="contentContainer">
                <div className="buttonDiv">
                    <GameButton title={"Continue"} func={() => setCount(count + 1)}/>
                    <GameButton title={"New Game"} func={() => setCount(0)}/>
                    <GameButton title={"Load Game"} />
                    <GameButton title={"Switch Profile"} />
                    <GameButton title={"Exit"} />
                </div>

                <div className="titleScreen">
                    <img 
                        className="titleImage"
                        src="title_logo.png"
                        alt="6 Nimmt!"
                    />
                </div>
            </div>
        </MainMenuContainer>
    )
}

export default HomePage;