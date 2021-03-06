import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import AuthBox from "../../../components/AuthBox";
import { getActions } from "../../../redux/actions/authAction";
import { validateLoginForm } from "../../../utils/validators";
import LoginPageFooter from "./LoginPageFooter";
import LoginPageHeader from "./LoginPageHeader";
import LoginPageInputs from "./LoginPageInputs";

const Login = ({ login }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setFormValid] = useState(false);

  useEffect(() => {
    setFormValid(validateLoginForm({ email, password }));
  }, [email, password, setFormValid]);

  const handleLogin = () => {
    const userDetails = {
      email,
      password,
    };

    login(userDetails);
  };

  return (
    <AuthBox>
      <LoginPageHeader />
      <LoginPageInputs
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      />
      <LoginPageFooter isFormValid={isFormValid} handleLogin={handleLogin} />
    </AuthBox>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapDispatchToProps)(Login);
