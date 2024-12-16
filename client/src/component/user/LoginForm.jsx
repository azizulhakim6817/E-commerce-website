import React from "react";
import UserStore from "../../store/UserStore";
import ValidationHelper from "../../utility/ValidationHelper";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import UserSubmitButton from "./UserSubmitButton";

const LoginForm = () => {
  let navigate = useNavigate();
  const { LoginFormOnChange, LogingFormData, UserOTPRequest } = UserStore();

  const onFormSubmit = async () => {
    if (!ValidationHelper.IsEmail(LogingFormData.email)) {
      toast.error("Valid Email Address Required");
    } else {
      let res = await UserOTPRequest(LogingFormData.email);
      res ? navigate("/otp") : toast.error("Something Went Wrong !");
    }
  };

  return (
    <div className="container section">
      <div className="row d-flex justify-content-center">
        <div className="col-md-5">
          <div className="card p-5">
            <h4>Enter Your Email</h4>
            <p>
              A verification code will be sent to the email address you provide
            </p>
            <input
              value={LogingFormData.email}
              onChange={(e) => {
                LoginFormOnChange("email", e.target.value);
              }}
              placeholder="Email Address"
              type="email"
              className="form-control"
            />
            <UserSubmitButton
              onClick={onFormSubmit}
              className="btn mt-3 btn-success"
              text="Next"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
