import PropTypes from "prop-types";
import { Form, Button } from "react-bootstrap";

const LoginForm = ({
  username,
  password,
  setUsername,
  setPassword,
  handleLogin,
}) => {
  return (
    <Form onSubmit={handleLogin}>
      <Form.Group className='mb-3'>
        <Form.Label>username</Form.Label>
        <Form.Control
          placeholder='Enter username'
          id='username'
          type='text'
          value={username}
          name='Username'
          onChange={({ target }) => setUsername(target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>password</Form.Label>
        <Form.Control
          placeholder='Enter password'
          id='password'
          type='password'
          value={password}
          name='Password'
          onChange={({ target }) => setPassword(target.value)}
        />
      </Form.Group>
      <Button variant='success' id='login-button' type='submit'>
        login
      </Button>
    </Form>
  );
};
LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  setUsername: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};
export default LoginForm;
