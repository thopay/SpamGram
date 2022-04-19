import mongoose from 'mongoose';
import Username from '../models/login.js';


export const signup = async (req, res, next) => {
    const body = req.query;
    const newlogin = new Username(body);
    try {
        await newlogin.save();
        res.status(200).json(newlogin);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }

}

export const getlogin = async (req, res) => {
    try {
        const body = req.query;
        let username2 = body.username;
        let password = body.password;
        const user = await Username.find({ username: username2 });
        console.log(password);
        console.log(user);
        if (user[0].password === password) {
            res.status(200).json(user);
        } else {
            res.status(400).json({ error: "Invalid password"});
        }

    } catch (error) {
        res.status(409).json({ message: error.message });
    }

}
/*function getById(req, res, next) {
    userService.getById(req.params.id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}
*/
//connect to front end
