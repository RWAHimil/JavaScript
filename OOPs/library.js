let message = "ES6 Modules";

function user(name) {
  //   console.log("Hello Everyone " + name);
  return `Hello ${name}`;
}

class test {
  constructor() {
    console.log("Constructor Method");
  }
}

export { message, test, user };
