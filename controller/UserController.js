const User = require('../models/usermodel');
const jwt = require('jsonwebtoken');

//register a new user

async function addUser(req, res) {
    // newEmail = req.body.email;
    console.log(req.body)
    try {
        const user = new User(req.body)
            await user.save();
            res.status(201).send({ message: "Registration successfull", task: user })
} catch (error) {
        res.status(400).send(error);
    }
}

// Login a user
async function getUser(req, res) {
    console.log(req.body,"*******")
    try {
       newEmail = req.body.email;
       newPassword = req.body.password
        const newUser = await User.findOne({email:newEmail});
        if (!newUser) {
        res.status(400).send({ message: "Invalid Email" });
        }
        console.log("***");

        isMatch = newUser.comparePassword(newPassword);
        if(!isMatch){
         res.status(400).send({ error: "Password Incorrect" });
        }
        const token = jwt.sign({ _id:newUser, _id},'om',{expiresIn:'1h'});
        res.status(200).send({accesstoken:token});
    } catch (error) {
    res.status(500).send(error);
}
}

module.exports={
    addUser,
    getUser
};


