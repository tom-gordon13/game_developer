let User = require('../../models/user')
let jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const cookieParser = require('cookie-parser');

module.exports = {
    create,
    login,
    checkToken,
    fetchToken,
}

async function create(req, res) {

    try {
        // Add the user to the database

        const user = await User.create(req.body)
        const token = createJWT(user);
        res.json(token);
    } catch (err) {
        // Client will check for non-2xx status code
        // 400 = Bad request 
        res.status(400).json(err)
    }
}


async function login(req, res) {
    try {
        const user = await User.findOne({ 'email': req.body.email })
        if (!user) throw new Error();
        const match = await bcrypt.compare(req.body.password, user.password)
        if (!match) throw new Error();
        const token = createJWT(user);

        // Set the JWT as a cookie
        // res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'none' });
        res.cookie('token', token, { secure: true, sameSite: 'none' });

        // validateToken(req, res, token
        res.json({ message: 'Logged In' })

    } catch {
        res.status(400).json('Bad Credentials')
    }
}

function checkToken(req, res) {
    const token = req.cookies.token;

    res.json(req.exp)

}

function fetchToken(req, res) {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) {
            return res.status(500).json({ message: 'Failed to authenticate token.' });
        }

        // If everything is good, return decoded token payload.
        res.json({ token: token });

    });

}

// Helper Functions

function createJWT(user) {

    return jwt.sign(
        // extra data for the payload
        { user },
        process.env.SECRET,
        { expiresIn: '24h' }
    );
}


