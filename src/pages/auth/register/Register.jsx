import { useState } from 'react';

import Input from '../../../components/input/Input';
import './Register.scss';
import Button from '../../../components/button/Button';
import { Utils } from '../../../services/utils/utils.service';
import { authService } from '../../../services/api/auth/auth.service';

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
      const avatarColor = Utils.avatarColor();
      const avatarImage = '';
      const result = await authService.signUp({
        username,
        email,
        password,
        avatarColor,
        avatarImage
      });
      console.log(result);
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
              style={{ border: `${hasError ? '1px solid #fa9b8a' : ''}` }}
              handleChange={ (event) => setUsername(event.target.value) }
            />

            <Input
              id='email'
              name='email'
              type='text'
              value={email}
              lableText='Email'
              placeHolder='Enter Email'
              style={{ border: `${hasError ? '1px solid #fa9b8a' : ''}` }}
              handleChange={ (event) => setEmail(event.target.value) }
            />
            <Input
              id='password'
              name='password'
              type='password'
              value={password}
              lableText='Password'
              placeHolder='Enter Password'
              style={{ border: `${hasError ? '1px solid #fa9b8a' : ''}` }}
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
