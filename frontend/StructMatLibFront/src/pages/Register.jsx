import { useState } from 'react'
import { useSelector } from 'react-redux';

import registerService from '../services/register'
import RegisterForm from "../components/RegisterForm"
import Notification from "../components/Notification"


const Register = () => {
    const [username, setUsername] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')


    const [notificationMessage, setNotificationMessage] = useState(null)


    const user = useSelector((state) => state.user.user);


    const handleRegister = async (event) => {
        event.preventDefault()
        try {
            const userCreds = await registerService.register({
                username, password, email, name
            })
            setNotificationMessage(`registration for ${userCreds.name} succeed`)
            setName('')
            setUsername('')
            setPassword('')
            setEmail('')

            setTimeout(() => {
                setNotificationMessage(null)
            }, 6000)
        } catch (error) {
            window.alert(error.response.data.error)
        }
    }

    const registerForm = () => {
        return (
            <div>

                <div>
                    <h2>Register</h2>
                    <RegisterForm
                        username={username}
                        password={password}
                        name={name}
                        email={email}
                        setName={setName}
                        setEmail={setEmail}
                        setUsername={setUsername}
                        setPassword={setPassword}
                        handleRegister={handleRegister}
                    />
                </div>
                <Notification message={notificationMessage} />

            </div>

        )
    }

    return (
        <div>
            {!user && registerForm()}
            {user &&
                <div>
                    <p>
                        {user.name} logged in
                    </p>
                    <p>
                        role: {user.role}
                    </p>
                </div>
            }
        </div>
    )
}

export default Register
