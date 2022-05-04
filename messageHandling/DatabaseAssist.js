const mongoose = require("./node_modules/mongoose");
import("../server/models/postMessage.js");
const { timeEnd } = require("console");
const SGBP = require("./SpamGramBlueprints.JS");
const MPD = require("./SpamGramBlueprints.JS");

const getPost = async (req, res) => {
    try {
        var posts = [];
        var lat = req.query.lat;
        var long = req.query.long;
        const postMessages = await PostMessage.find();
        // loop through posts
        for (var i = 0; i < postMessages.length; i++) {
            // add posts close to current long lat to array
            if (
                closeTo(postMessages[i].lat, lat) &&
                closeTo(postMessages[i].long, long)
            ) {
                posts.push(postMessages[i]);
            }
        }
        // return array
        res.status(200).json(posts);
    } catch (error) {
        res.status(404), json({ message: error.message });
    }
};
const createPost = async (req, res) => {
    const body = req.query;
    const newPost = new PostMessage(body);
    try {
        await newPost.save();
        res.status(200).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

const sortByLike = async (req, res) => {
    grabbedArray = getPost();
    for (let i = 0; i < grabbedArray.length; i++) {
        console.log(grabbedArray[i]);
    }
};
sortByLike();
