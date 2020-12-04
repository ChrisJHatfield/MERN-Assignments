const express = require('express');
const app = express();
const port = 8000;
const faker = require('faker');

class User {
    constructor() {
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.phoneNumber = faker.phone.phoneNumber();
    this.email = faker.internet.email();
    this.password = faker.internet.password();
    }
}

console.log(new User());

class Company {
    constructor() {
        this.name = faker.company.companyName();
        this.address = [
            this.street = faker.address.streetName(),
            this.city = faker.address.city(),
            this.state = faker.address.state(),
            this.zipCode = faker.address.zipCode(),
            this.country = faker.address.country()
        ]
    }
}

console.log(new Company());

// Create an api route "/api/users/new" that returns a new user
app.get("/api/users/new", (req, res) => {
    res.json(new User());
})
// Create an api route "/api/companies/new" that returns a new company
app.get("/api/companies/new", (req, res) => {
    res.json(new Company());
})
// Create an api route "/api/user/company" that returns both a new user and a new company
app.get("/api/user/company", (req, res) => {
    res.json({user: new User(), company: new Company() });
})

app.listen( port, () => console.log(`Listening on port: ${port}`) );