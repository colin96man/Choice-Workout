const User = require('../models/user');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = {
    signup,
    login
}

async function signup(req, res) {
    console.log(req.body, '<------ signup controller');
    const user = new User(req.body);
    try {
        await user.save();
        const token = createJWT(user);
        res.json({token});
    } catch(err) {
        res.status(400).json(err);
    }
}

async function login(req, res) {
    try {
        const foundUser = await User.findOne({email: req.body.email});
        if(!foundUser) return res.status(401).json({err: 'Bad Credentials!'});
        foundUser.comparePassword(req.body.pw, (err, isMatch) => {
            if(isMatch) {
                const token = createJWT(foundUser);
                res.json({token});
            } else {
                return res.status(401).json({err: 'Bad Credentials'});
            }
        });
    } catch(err) {
        return res.status(401).json(err);
    }
}

/*------ Helper Functions ------*/

function createJWT(user) {
    return jwt.sign(
        {user},
        SECRET,
        {expiresIn: '24h'}
    );
}