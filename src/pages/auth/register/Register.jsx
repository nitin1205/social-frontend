import { useState } from 'react';

import Input from '../../../components/input/Input';
import './Register.scss';
import Button from '../../../components/button/Button';

const Register = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [alertType, setAlertType] = useState('');
  const [hasError, setHasError] = useState(false);

  const registerUser = async (event) => {
    setLoading(true);
    event.preventDefault();
    try {
      setHasError(false);
      setAlertType('alert-success');
    } catch (error) {
      setLoading(false);
      setHasError(true);
      setAlertType('alert-error');
      setErrorMessage(error?.response?.data.message);
    }
  }

  return (
    <div className="auth-inner">
      {hasError && errorMessage && (
        <div className={`alerts ${alertType}`} role="alert">
        {errorMessage}
      </div>
      )}
      <form className="auth-form" onSubmit={registerUser}>
        <div className="form-input-container">
            <Input
              id='username'
              name='username'
              type='text'
              value={username}
              lableText='Username'
              placeHolder='Enter Username'
              handleChange={ (event) => setUsername(event.target.value) }
            />

            <Input
              id='email'
              name='email'
              type='text'
              value={email}
              lableText='Email'
              placeHolder='Enter Email'
              handleChange={ (event) => setEmail(event.target.value) }
            />
            <Input
              id='password'
              name='password'
              type='password'
              value={password}
              lableText='Password'
              placeHolder='Enter Password'
              handleChange={ (event) => setPassword(event.target.value) }
            />
        </div>
        <Button
          label={`${ loading ? 'SIGNUP IN PROGRESS...' : 'SIGNUP' }`}
          className='auth-button button'
          disabled={!username || !email || !password}
        />
      </form>
    </div>
  );
};

export default Register;
