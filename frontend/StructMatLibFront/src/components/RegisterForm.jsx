import PropTypes from 'prop-types'

const RegisterForm = ({
  username,
  password,
  name,
  setName,
  setUsername,
  setPassword,
  handleRegister
}) => {
  return (
    <form onSubmit={handleRegister}>
        <div>
        Name
        <input
          id='name'
          type='text'
          value={name}
          name='Name'
          onChange={({ target }) => setName(target.value)}
        />
      </div>
      <div>
        username
        <input
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