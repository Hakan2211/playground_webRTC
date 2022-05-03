import CustomPrimaryButton from "../../../components/CustomPrimaryButton";
import RedirectInfo from "../../../components/RedirectInfo";
import { useNavigate } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";

const RegisterPageFooter = ({ handleRegister, isFormValid }) => {
  const navigate = useNavigate();

  const handlePushToLoginPage = () => {
    navigate("/login");
  };

  const getFormNotValidMessage = () => {
    return "Username should contains between 3 and 12 character and password should contains 6 and 12 characters. Also correct email-adress should be provided.";
  };
  const getFormValidMessage = () => {
    return "Press to register!";
  };
  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <CustomPrimaryButton
            label="Register"
            additionalStyles={{ marginTop: "30px" }}
            disabled={!isFormValid}
            onClick={handleRegister}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text="Need an account?"
        redirectText="Already have an account"
        additionalStyles={{ marginTop: "5px" }}
        redirectHandler={handlePushToLoginPage}
      />
    </>
  );
};

export default RegisterPageFooter;
