import PropTypes from 'prop-types'

const RegisterForm = ({
  username,
  password,
  name,
  email,
  setName,
  setEmail,
  setUsername,
  setPassword,
  handleRegister
}) => {
  return (
    <form onSubmit={handleRegister}>
      <div>
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
      <button id='register-button' type='submit'>register</button>
    </form>
  )
}
RegisterForm.propTypes = {
  handleRegister: PropTypes.func.isRequired,
  setUsername: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
}
export default RegisterForm