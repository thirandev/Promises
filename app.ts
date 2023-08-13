console.log("Intro to Promises!");

//  JS is Synchronous by default
// Async Operations are used in browser API, promises, event handlers

// Promise can be used to know the outcome of an Async operation.

// Create a Promise object with its constructor method
// You need to pass a function its called a execution function

// resolve indicates - Success
// reject indicates - Failure

let promise = new Promise(function (resolve, reject) {
  // Got the water
  let values = "Jack fell down";
  if (values === "Fetched water successfully") {
    resolve(values);
  }
  reject(new Error("Jack fell down"));
});

// Step 1
// Promise States (Internal)
// - Pending: When execution starts.
// - fulfilled: When promise resolves successfully.
// - rejected: When promise rejectes.

// Step 2
// Fullfilled / Rejected = Settled

// Step 3
// Promise results
// - undefined: Initail phase when state  is pending.
// - value: When promise resolves successfully.
// - error: When promise rejects.

// Step 4 - Handler Methods exposed to Js side
// .then()
// .catch()
// .finally()

const grandParentsDoingSomethingElse = () => {
  promise
    .then(function (result) {
      console.log(result);
    })
    .catch(function (error) {
      console.log(error.message);
    })
    .finally(function () {
      console.log("Done");
    });
};

grandParentsDoingSomethingElse();

console.log("Promise Chain!");

// What you can do inside a .then() method
// 1 - return another promise.
// 2 - return a synchronous value
// 3 - Return/Throw an Error

let getAllNotes = new Promise((resolve) => {
  const notes = {
    title: "API Note 1",
    notes: "Assuming we are fetching data from an API",
  };
  resolve(notes);
});

// Promise Chain

getAllNotes
  .then((notes) => {
    console.log({ notes });
    // 1 - Another promise.
    // return new Promise(function (resolve) {
    //   setTimeout(function () {
    //     resolve("New Promise");
    //   }, 1000);
    // });

    // 2 - Synchronous value
    // return notes.title;

    // 3 - Error
    throw new Error("Opps! something went wrong");
  })
  .then(function (newValue) {
    console.log({ newValue });
  })
  .catch((error) => {
    console.log(`Message: ${error.message}`);
  })
  .finally(() => {
    console.log("End of execution");
  });
