const jwt = require("jsonwebtoken");

//decode , verify, generate

const value = {
    name: "Vaishnavi",
    accountNumber: 123123
}

//Sign and not generate
const token = jwt.sign(value, "secret")
console.log(token);

//This token has been generated using the secret, and hence this token can only be verified using this secret
//This secret is like a checkbook you get after creating a bank account

//Output=> eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVmFpc2huYXZpIiwiYWNjb3VudE51bWJlciI6MTIzMTIzLCJpYXQiOjE3MDQyNTQxNDZ9.xzXiUbWBioG1nGljegRMwXsJe5YtKgMSOB2ltl1Yqcs 


//To verify the token
const verifiedValue = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVmFpc2huYXZpIiwiYWNjb3VudE51bWJlciI6MTIzMTIzLCJpYXQiOjE3MDQyNTQxNDZ9.xzXiUbWBioG1nGljegRMwXsJe5YtKgMSOB2ltl1Yqcs", "secret");
console.log(verifiedValue);

//Output=> { name: 'Vaishnavi', accountNumber: 123123, iat: 1704254146 }