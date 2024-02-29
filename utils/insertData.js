const { User } = require("../models/User.model");



async function insertDoc() {
    const doc = {
        name: "fromServer",
        email: "fromServer@gmail.com",
        password: "superPassword"
    }
    const n = new User(doc)
    const m = await n.save();
    console.log(m)
}

insertDoc();

