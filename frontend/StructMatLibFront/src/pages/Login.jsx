import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Notification from "../components/Notification";

import { login, logout } from "../reducers/userReducer";

import loginService from "../services/login";

import LoginForm from "../components/LoginForm";
import { Button, Card, Container } from "react-bootstrap";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginVisible, setLoginVisible] = useState(false);

  const [notificationMessage, setNotificationMessage] = useState(null);

  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const userCreds = await loginService.login({
        username,
        password,
      });
      dispatch(login(userCreds));
      loginService.setToken(userCreds.token);
      setUsername("");
      setPassword("");
    } catch (error) {
      setNotificationMessage("Invalid username or password!");
      setTimeout(() => {
        setNotificationMessage(null);
      }, 6000);
    }
  };

  const handleLogout = async () => {
    dispatch(logout());
    loginService.setToken(null);
  };

  const loginForm = () => {
    const showWhenVisible = { display: loginVisible ? "none" : "" };
    return (
      <div>
        <Notification message={notificationMessage} />

        <div style={showWhenVisible}>
          <Container className='d-flex justify-content-center'>
            <Card
              bg='primary'
              className='text-center'
              style={{ width: "18rem" }}
              border='primary'
            >
              <Card.Body>
                <Card.Title> Sign in</Card.Title>
                <LoginForm
                  username={username}
                  password={password}
                  setUsername={setUsername}
                  setPassword={setPassword}
                  handleLogin={handleLogin}
                />
                <Button variant='danger' onClick={() => setLoginVisible(false)}>
                  {" "}
                  cancel{" "}
                </Button>
              </Card.Body>
            </Card>
          </Container>
        </div>
      </div>
    );
  };

  return (
    <Container className='d-flex justify-content-center align-items-center'>
      <Card
        bg='light'
        className='text-center'
        style={{ width: "18rem" }}
        border='light'
      >
        {!user && loginForm()}
        {user && (
          <div>
            <p>{user.name} logged in</p>
            <p>Email: {user.email}</p>
            <p>role: {user.role}</p>
            <Button onClick={handleLogout}>logout</Button>
          </div>
        )}
      </Card>
    </Container>
  );
};

export default Login;
