import mongoose from 'mongoose';
import Username from '../models/login.js';
import randomUser from '../utils/randomUser.js';


export const signup = async (req, res, next) => {
    const body = req.query;
    const user = await Username.find({ phonenumber: body.phonenumber });
    if (user.length != 0) {
        res.status(200).json(user[0])
        return
    }
    const userInfo = randomUser();
    const newUser = {...userInfo, phonenumber: body.phonenumber}
    const newlogin = new Username(newUser);
    try {
        await newlogin.save();
        res.status(200).json({...newUser, new_user: true });
        return
    } catch (error) {
        res.status(409).json({ message: error.message });
        return
    }

}

export const getlogin = async (req, res) => {
    try {
        const body = req.query;
        let username2 = body.username;
        let phonenumber = body.phonenumber;
        const user = await Username.find({ phonenumber: phonenumber });
        if (user.length == 0) {
            res.status(400).json({ error: "User not found" })
            return
        }
        console.log(phonenumber);
        console.log(user[0].phonenumber);
        if (user[0].phonenumber == phonenumber) {
            res.status(200).json(user[0]);
            return
        } else {
            res.status(400).json({ error: "Invalid phonenumber"});
            return
        }

    } catch (error) {
        res.status(409).json({ message: error.message });
        return
    }

}
/*function getById(req, res, next) {
    userService.getById(req.params.id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}
*/
//connect to front end
