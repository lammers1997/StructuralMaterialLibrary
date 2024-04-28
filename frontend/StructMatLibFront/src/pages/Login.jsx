import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import {login, logout} from '../reducers/userReducer'

import loginService from '../services/login'

import LoginForm from "../components/LoginForm"

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loginVisible, setLoginVisible] = useState(false)

    const user = useSelector((state) => state.user.user);

    const dispatch = useDispatch();

    const handleLogin = async (event) => {
        event.preventDefault()
        try {
            const userCreds = await loginService.login({
                username, password,
            })
            dispatch(login(userCreds))
            setUsername('')
            setPassword('')
        } catch (error) {
            console.log('something went wrong!')
        }
    }

    const handleLogout = async () => {
        dispatch(logout())
    }

    const loginForm = () => {
        const showWhenVisible = { display: loginVisible ? 'none' : '' }
        return (
            <div>
                <div style={showWhenVisible}>
                    <h2>Log in to application</h2>
                    <LoginForm
                        username={username}
                        password={password}
                        setUsername={setUsername}
                        setPassword={setPassword}
                        handleLogin={handleLogin}
                    />
                    <button onClick={() => setLoginVisible(false)}> cancel </button>
                </div>
            </div>
        )
    }

    return (
        <div>
            {!user && loginForm()}
            {user &&
                <div>
                    <p>
                        {user.name} logged in
                    </p>
                    <button onClick={handleLogout}>logout</button>
                </div>
            }
        </div>
    )
}

export default Login
