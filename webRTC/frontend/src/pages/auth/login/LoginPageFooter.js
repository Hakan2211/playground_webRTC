import React from "react";
import CustomPrimaryButton from "../../../components/CustomPrimaryButton";
import RedirectInfo from "../../../components/RedirectInfo";
import { useNavigate } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";

const LoginPageFooter = ({ handleLogin, isFormValid }) => {
  const navigate = useNavigate();

  const handlePushToRegisterPage = () => {
    navigate("/register");
  };

  const getFormNotValidMessage = () => {
    return "Enter correct e-mail adress and password should contains betweens 6 and 12 characters";
  };
  const getFormValidMessage = () => {
    return "Press to login!";
  };
  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <CustomPrimaryButton
            label="Login"
            additionalStyles={{ marginTop: "30px" }}
            disabled={!isFormValid}
            onClick={handleLogin}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text="Need an account?"
        redirectText="Create an Account"
        additionalStyles={{ marginTop: "5px" }}
        redirectHandler={handlePushToRegisterPage}
      />
    </>
  );
};

export default LoginPageFooter;
