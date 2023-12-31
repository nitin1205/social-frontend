import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

import Input from '../../../components/input/Input';
import './Login.scss';
import Button from '../../../components/button/Button';

const Login = () => {
  return (
    <div className="auth-inner">
      {/* <div className="alerts" role="alert">
        Error message
      </div> */}
      <form className="auth-form">
        <div className="form-input-container">
            <Input
              id='username'
              name='username'
              type='text'
              vlaue='my value'
              lableText='Username'
              placeHolder='Enter Username'
            />
            <Input
              id='password'
              name='password'
              type='password'
              vlaue='my password'
              lableText='Password'
              placeHolder='Enter Password'
            />
            <label className="checkmark-container" htmlFor="checkbox">
                <Input id="checkbox" type="checkbox" name="checkbox" value={false} />
                Keep me signed in
            </label>
        </div>
        <Button
          label={'SIGN IN'}
          className='auth-button button'
          disabled={true}

        />
        <Link to={'/forgot-password'}>
          <span className="forgot-password">
              Forgot password? <FaArrowRight className=' arrow-right'/>
          </span>
        </Link>
      </form>
    </div>
  );
};

export default Login;
