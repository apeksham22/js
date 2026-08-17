// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Apeksha",
    "full name": "Apeksha Mishra",
    [mySym]: "mykey1",
    age: 23,
    location: "Bokaro",
    email: "apeksha@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "apeksha@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "apeksha@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());