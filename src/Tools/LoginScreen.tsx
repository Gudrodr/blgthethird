import * as React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { RouteChildrenProps } from 'react-router';

const LoginScreen = (props: RouteChildrenProps) => {
    const [userData, setUserData] = useState({email: '', password: ''});
    const loginRef = React.createRef<HTMLInputElement>();
    const passRef = React.createRef<HTMLInputElement>();

    const loginFetch = async () => {
        const result = await fetch(`http://127.0.0.1:3001/login`, {
            method: 'POST',
            mode: 'cors',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(userData)
        })
            .then(result => result.json());
        if (result.user) {
            localStorage.setItem('devormedlogintoken', result.token);
            props.history.push('/write');
        } else {
            loginRef.current ? loginRef.current.value = '' : undefined;
            passRef.current ? passRef.current!.value = '' : undefined;
        }
    }

    const loginAction = (e: React.FormEvent) => {
        e.preventDefault();
        setUserData({email: e.target[0].value, password: e.target[1].value});
    }
    
    useEffect(() => {loginFetch()}, [userData.email]);

    return (
        <Screen>
            <Fields onSubmit={loginAction}>
                <input ref={loginRef} type='text' placeholder='login' autoFocus />
                <input ref={passRef} type='password' placeholder='password' />
                <input type='submit' value='Go on' />
            </Fields>
        </Screen>
    )
}

export default LoginScreen;


/** styles below */

const Screen = styled.div`
    display: flex;
    align-items: center;
`;

const Fields = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 10em;

    input {
        color: white;
        background-color: rgba(255, 255, 255, 0.1);
        border: none;
        outline: none;

        :last-child {
            color: black;
            background-color: white;
            cursor: pointer;
        }
    }
`;