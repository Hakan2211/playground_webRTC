import React from "react";
import InputWithLabel from "../../../components/InputWithLabel";

const RegisterPageInputs = (props) => {
  const { email, setEmail, username, setUsername, password, setPassword } =
    props;
  return (
    <>
      <InputWithLabel
        value={email}
        setValue={setEmail}
        label="Email Adress"
        type="text"
        placeholder="Enter email adress"
      />
      <InputWithLabel
        value={username}
        setValue={setUsername}
        label="Username"
        type="text"
        placeholder="Enter a username"
      />
      <InputWithLabel
        value={password}
        setValue={setPassword}
        label="Password"
        type="password"
        placeholder="Enter password"
      />
    </>
  );
};

export default RegisterPageInputs;
