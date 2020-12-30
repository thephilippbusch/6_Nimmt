import React, {useState} from 'react';
import styled from 'styled-components';
import GameButton from '../../components/gameButton';
import { useHistory } from 'react-router-dom';

const MainMenuContainer = styled.div`
    width: 100%;
    height: 92vh;
    
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
    const history = useHistory();

    return(
        <MainMenuContainer>
            <div className="contentContainer">
                <div className="buttonDiv">
                    <GameButton title={"Continue"} func={() => history.push('/game')}/>    
                    <GameButton title={"New Game"} func={() => history.push('/newgame')}/>
                    <GameButton title={"Load Game"} func={() => history.push('/loadgame')}/>
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