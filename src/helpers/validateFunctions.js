const validateEmail = (email) => {
  const regex =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (regex.test(email)) {
    return email;
  }

  return false;
};

export default validateEmail;

const validatePassword = (password, passwordConfirmation) =>
  password === passwordConfirmation ? password : null;

export { validatePassword, validateEmail };
