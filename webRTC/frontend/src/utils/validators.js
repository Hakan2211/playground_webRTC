export const validateLoginForm = ({ email, password }) => {
  const isMailValid = validateMail(email);
  const isPasswordValid = validatePassword(password);

  return isMailValid && isPasswordValid;
};

export const validateRegisterForm = ({ email, password, username }) => {
  return (
    validateMail(email) &&
    validatePassword(password) &&
    isUsernameValid(username)
  );
};

const validatePassword = (password) => {
  return password.length >= 6 && password.length < 12;
};
const validateMail = (email) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
};

const isUsernameValid = (username) => {
  return username.length > 2 && username.length < 13;
};
