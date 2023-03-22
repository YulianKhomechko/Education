let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'hello';
// userName = userInput;

// type narrowing
if (typeof userInput === 'string') {
  userName = userInput;
}

// never - never produces a value
function generateError(message: string, errorCode: number): never {
  throw { message, errorCode };
}

generateError('An error occurred', 500);
