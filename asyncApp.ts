// async
// await

// - We use async to return a Promise
// - We use await to wait and Handle the promise

const validateUser = ({ username, password }) => {
  // A function with async keyword returns a promise.
  return new Promise((resolve, reject) => {
    if (username && password) {
      resolve("Autheticated");
    } else {
      reject({ message: "Username or password invalid" });
    }
  });
};

const app = async () => {
  const data = {
    username: "",
    password: 123,
  };
  try {
    const users = await validateUser(data);
    console.log(users);
  } catch (error) {
    console.log(error.message);
  }
};

app();
