import Input from '../../../components/input/Input';
import './Register.scss';
import Button from '../../../components/button/Button';

const Register = () => {
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
              id='email'
              name='email'
              type='text'
              vlaue='test@test.com'
              lableText='Email'
              placeHolder='Enter Email'
            />
            <Input
              id='password'
              name='password'
              type='password'
              vlaue='my password'
              lableText='Password'
              placeHolder='Enter Password'
            />
        </div>
        <Button
          label={'SIGN UP'}
          className='auth-button button'
          disabled={true}
        />
      </form>
    </div>
  );
};

export default Register;
