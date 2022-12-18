const { document } = require("../model/user-model");
const path = require('path');

exports.fileUser = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/index.html'))
}

exports.inputSaver = (req, res) => {
    const age = req.body.age;
    const name = req.body.name;
    const user = {
        name, age
    }

    document.push(user)

    res.send(document)


}