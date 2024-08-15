import PropTypes from "prop-types";
import { Form, Button } from "react-bootstrap";

const RegisterForm = ({
  username,
  password,
  name,
  email,
  setName,
  setEmail,
  setUsername,
  setPassword,
  handleRegister,
}) => {
  return (
    <Form onSubmit={handleRegister}>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          required
          id='name'
          type='text'
          value={name}
          name='Name'
          onChange={({ target }) => setName(target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          required
          id='email'
          type='text'
          value={email}
          name='Email'
          onChange={({ target }) => setEmail(target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>username</Form.Label>
        <Form.Control
          required
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
          required
          id='password'
          type='password'
          value={password}
          name='Password'
          onChange={({ target }) => setPassword(target.value)}
        />
      </Form.Group>
      <Button variant='primary' id='register-button' type='submit'>
        register
      </Button>
      {/* <div>
        Name
        <input
          required
          id='name'
          type='text'
          value={name}
          name='Name'
          onChange={({ target }) => setName(target.value)}
        />
      </div>
      Email
      <input
        required
        id='email'
        type='text'
        value={email}
        name='Email'
        onChange={({ target }) => setEmail(target.value)}
      />
      <div>
        username
        <input
          required
          id='username'
          type='text'
          value={username}
          name='Username'
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>

      <div>
        password
        <input
          required
          id='password'
          type='password'
          value={password}
          name='Password'
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button id='register-button' type='submit'>register</button> */}
    </Form>
  );
};
RegisterForm.propTypes = {
  handleRegister: PropTypes.func.isRequired,
  setUsername: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};
export default RegisterForm;
