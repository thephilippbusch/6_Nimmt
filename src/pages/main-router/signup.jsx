import React, { useState } from 'react';
import styled from 'styled-components';
import { newUser } from '../../func/user';

const SignupContainer = styled.div`
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

const SignUpPage = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConf, setPasswordConf] = useState("");
    const [error, setError] = useState("");

    const handleSignup = () => {
        if(password === passwordConf) {
            /* alert("Username: " + username);
            alert("E-mail: " + email);
            alert("Password: "+password); */
            if(
                email !== "" && 
                username !== "" &&
                password !== "" &&
                passwordConf !== ""
            ) {
                newUser(email, username, password);
                setError("");

                setUsername("");
                setEmail("");
                setPassword("");
                setPasswordConf("");
            } else {
                setError("Please fill all fields above!")
            }
        } else {
            setError("Check your Confirmation Password!")
        }
    }

    return(
        <SignupContainer>
            <div className="loginForm" >
                <div className="loginHeader">
                    <h1 className="loginTitle">Sign Up!</h1>
                    <p className="loginSubtitle">Already have an Account? <a href="/login">click here</a> to log in!</p>
                </div>
                <div className="inputDiv">
                    <p className="inputTitle">Username:</p>
                    <input 
                        className="inputField"
                        type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        id="username"
                        placeholder="..."
                    />
                </div>
                <div className="inputDiv">
                    <p className="inputTitle">E-mail:</p>
                    <input 
                        className="inputField"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        id="email"
                        placeholder="somebody@example.com..."
                    />
                </div>
                <div className="inputDiv">
                    <p className="inputTitle">Password:</p>
                    <input
                        className="inputField"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        id="password"
                    />
                </div>
                <div className="inputDiv">
                    <p className="inputTitle">Confirm Password:</p>
                    <input
                        className="inputField"
                        type="password"
                        value={passwordConf}
                        onChange={e => setPasswordConf(e.target.value)}
                        id="password_confirm"
                    />
                </div>
                <p className="error">{error}</p>
                <button className="submitButton" onClick={() => handleSignup()}>
                    Sign Up!
                </button>
            </div>
        </SignupContainer>
    )
}

export default SignUpPage;