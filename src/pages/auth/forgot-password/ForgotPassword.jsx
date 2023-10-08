import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import backgroundImage from '../../../assets/images/background.jpg'
import Input from "../../../components/input/Input";
import "./ForgotPassword.scss";
import Button from "../../../components/button/Button";

const ForgotPassword = () => {
  return (
    <div className="container-wrapper" style={{ backgroundImage: `url(${backgroundImage})`}}>
      <div className="environment">DEV</div>
      <div className="container-wrapper-auth">
        <div className="tabs forgot-password-tabs">
          <div className="tabs-auth">
            <ul className="tab-group">
              <li className="tab">
                <div className="login forgot-password">Forgot Password</div>
              </li>
            </ul>

            <div className="tab-item">
              <div className="auth-inner">
                {/* <div className="alerts" role="alert">
                    Error message
                </div> */}
                <form className="auth-form">
                  <div className="form-input-container">
                    <Input
                      id="email"
                      name="email"
                      type="text"
                      vlaue="tets@test.com"
                      lableText="Email"
                      placeHolder="Enter Email"
                    />
                  </div>
                  <Button
                    label={"SUBMIT"}
                    className="auth-button button"
                    disabled={true}
                  />
                  <Link to={"/"}>
                    <span className="forgot-password">
                      <FaArrowLeft className=" arrow-left" /> Back to Login
                    </span>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
