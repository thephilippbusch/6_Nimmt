import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory, Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { checkUser } from '../../func/user';

const LoginContainer = styled.div`
    width: 100%;
    height: 92vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;

    .loginForm {
        display: flex;
        background-color: white;
        border-radius: 25px;
        width: 350px;
        height: fit-content;
        margin: auto;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 35px;
        
        .loginHeader {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            margin-bottom: 30px;

            .loginTitle {
                margin: 0px 0px 5px 0px;
            }

            .loginSubtitle {
                margin: 0;
                color: rgb(100, 100, 100);
            }
        }

        .inputDiv {
            width: 100%;
            float: left;
        }

        .inputTitle {
            width: 100%;
            float: left;
            margin-bottom: 10px;
        }

        .inputField {
            padding-left: 10px;
            margin-top: 0px;
            width: 100%;
            height: 30px;
            border-radius: 10px;
            outline: none;
        }

        .submitButton {
            margin-top: 30px;
            background-color: #424e96;
            border: none;
            width: 70%;
            height: 50px;
            cursor: pointer;
            color: white;
            border-radius: 15px;
            font-size: 20px;

            :hover {
                background-color: #424e96;
            }
        }

        .error {
            font-size: 15px;
            color: red;
        }
    }
`;

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    
    const handleLogin = () => {
        if(email !== "" && password !== "") {
            checkUser(email, password);
            setError("");
        } else {
            setError("Please enter your Email and Password!");
        }

        setEmail("");
        setPassword("");
    }

    return(
        <LoginContainer>
            <div className="loginForm">
                <div className="loginHeader">
                    <h1 className="loginTitle">Sign In!</h1>
                    <p className="loginSubtitle">Haven't signed up yet? <a href="/signup">click here</a>!</p>
                </div>
                <div className="inputDiv">
                    <p className="inputTitle">Email:</p>
                    <input className="inputField" type="email" id="email" value={email} onChange={e => {setEmail(e.target.value)}} placeholder="somebody@example.com..."/>
                </div>
                <div className="inputDiv">
                    <p className="inputTitle">Password:</p>
                    <input className="inputField" type="password" id="password" value={password} onChange={e => {setPassword(e.target.value)}}/>
                </div>
                <p className="error">{error}</p>
                <button className="submitButton" onClick={() => handleLogin()}>
                    Log in!
                </button>
            </div>
        </LoginContainer>
    )
}

export default LoginPage;