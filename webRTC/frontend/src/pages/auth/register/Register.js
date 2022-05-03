import React, { useEffect, useState } from "react";
import AuthBox from "../../../components/AuthBox";
import { Typography } from "@mui/material";
import RegisterPageInputs from "./RegisterPageInputs";
import RegisterPageFooter from "./RegisterPageFooter";
import { validateRegisterForm } from "../../../utils/validators";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const [isFormValid, setFormValid] = useState(false);

  const handleRegister = () => {
    console.log(email, username, password, "register");
  };

  useEffect(() => {
    setFormValid(validateRegisterForm({ email, username, password }));
  }, [email, username, password, setFormValid]);

  return (
    <AuthBox>
      <Typography variant="h5" sx={{ color: "white" }}>
        Create an Account
      </Typography>
      <RegisterPageInputs
        email={email}
        setEmail={setEmail}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassowrd={setPassword}
      />
      <RegisterPageFooter
        handleRegister={handleRegister}
        isFormValid={isFormValid}
      />
    </AuthBox>
  );
};

export default Register;
