// singleton
// Object.create
// object literals


const mySym = Symbol("key1")


const jsUser = {
    name: "Durga",
    "full name": "Devi Durga Prasad Rath",
    [mySym]: "myKey1",
    age: 23,
    location: "Rourkela",
    email: "durga@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(typeof jsUser[mySym]);
// console.log(jsUser[mySym]);

jsUser.email = "durga745@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "durga@microsoft.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS user");
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());