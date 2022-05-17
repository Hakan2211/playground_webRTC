import React, { useEffect, useState } from "react";
import AuthBox from "../../../components/AuthBox";
import { Typography } from "@mui/material";
import RegisterPageInputs from "./RegisterPageInputs";
import RegisterPageFooter from "./RegisterPageFooter";
import { validateRegisterForm } from "../../../utils/validators";
import { connect } from "react-redux";
import { getActions } from "../../../redux/actions/authAction";

const RegisterPage = ({ register }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const [isFormValid, setFormValid] = useState(false);

  const handleRegister = () => {
    const userDetails = {
      email,
      username,
      password,
    };
    register(userDetails);
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

const mapDispatchToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapDispatchToProps)(RegisterPage);
