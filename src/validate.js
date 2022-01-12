const isRequired = (input) =>
  input === '' ? 'This is a required field' : true;

const isEmail = (input) =>
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)
    ? true
    : 'Please enter valid email';

module.exports = {
  isRequired,
  isEmail,
};
