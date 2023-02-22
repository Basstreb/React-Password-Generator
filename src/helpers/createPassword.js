const LOWER_CASE_CODE =
  String.fromCharCode(...[...Array(122 - 97 + 1).keys()].map((i) => i + 97)) +
  String.fromCharCode(241);
const UPPER_CASE_CODE =
  String.fromCharCode(...[...Array(90 - 65 + 1).keys()].map((i) => i + 65)) +
  String.fromCharCode(209);
const NUMBERS_CODE = String.fromCharCode(...[...Array(57 - 48 + 1).keys()].map((i) => i + 48));
const SYMBOLS_CODE =
  String.fromCharCode(...[...Array(47 - 33 + 1).keys()].map((i) => i + 33)) +
  String.fromCharCode(...[...Array(64 - 58 + 1).keys()].map((i) => i + 58)) +
  String.fromCharCode(...[...Array(96 - 91 + 1).keys()].map((i) => i + 91)) +
  String.fromCharCode(...[...Array(126 - 123 + 1).keys()].map((i) => i + 123));

export function createPassword(
  length,
  lowerCase = true,
  upperCase = false,
  numbers = false,
  symbols = false
) {
  let result = '';
  let characters = '';

  if (lowerCase) {
    characters += LOWER_CASE_CODE;
  }
  if (upperCase) {
    characters += UPPER_CASE_CODE;
  }
  if (numbers) {
    characters += NUMBERS_CODE;
  }
  if (symbols) {
    characters += SYMBOLS_CODE;
  }

  //Limit the length of the password
  // const finalLength = length < 8 ? 8 : (length > 16 ? 16 : length);

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
}
