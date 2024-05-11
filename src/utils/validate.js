export const checkEmailPassword = (email, password) => {
  const isValidEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email,
  );
  const isValidPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(password);

  if (!isValidEmail || !isValidPassword) {
    return "You have entered an invalid email or password";
  }

  return null;
};

export const CheckName = (fullName) => {
  const isValidFullname = /^[a-zA-Z]+ [a-zA-Z]+$/.test(fullName);
  if (!isValidFullname) return "Invalid name";

  return null;
};
