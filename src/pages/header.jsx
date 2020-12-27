import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 8vh;
    background-color: #424e96;

    .titleContainer {
        margin-left: 40px;
        display: flex;
        align-items: baseline;

        .titlePicture {
            height: 7vh;
        }
    }

    .navbarContainer {
        .navbarList {
            text-decoration: none;
            color: rgb(230, 240, 255);
            display: flex;
            margin-right: 200px;
            
            .navbarItem {
                margin: 0px 30px 0px 30px;
                font-size: 20px;
                cursor: pointer;

                :hover {
                    text-decoration: underline;
                }
            }
        }
    }
`;

const Header = () => {

    return(
        <HeaderContainer>
            <div className="titleContainer">
                {/*<h1 className="titleText">6 Nimmt!</h1>*/}
                <img className="titlePicture" src="logo_text.png" alt="6 Nimmt Logo"/>
            </div>

            <div className="navbarContainer">
                <li className="navbarList">
                    <ul className="navbarItem" onClick={() => console.log("Home")}>Home</ul>
                    <ul className="navbarItem" onClick={() => console.log("About")}>About</ul>
                    <ul className="navbarItem" onClick={() => console.log("Help")}>Help</ul>
                </li>
            </div>
        </HeaderContainer>
    );
}

export default Header;