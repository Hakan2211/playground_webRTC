import React, { useEffect, useState } from "react";
import AuthBox from "../../../components/AuthBox";
import { validateLoginForm } from "../../../utils/validators";
import LoginPageFooter from "./LoginPageFooter";
import LoginPageHeader from "./LoginPageHeader";
import LoginPageInputs from "./LoginPageInputs";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setFormValid] = useState(false);

  useEffect(() => {
    setFormValid(validateLoginForm({ email, password }));
  }, [email, password, setFormValid]);

  const handleLogin = () => {
    console.log("Login");
    console.log(email, password);
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

export default Login;
