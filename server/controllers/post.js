import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';

export const getPost = async (req, res) => {

    try {
        var posts = [];
        var lat = req.query.lat;
        var long = req.query.long;
        const postMessages = await PostMessage.find();
        // loop through posts
        for (var i = 0; i < postMessages.length; i++) {
            // add posts close to current long lat to array
            if (closeTo(postMessages[i].lat, lat) && closeTo(postMessages[i].long, long)) {
                posts.push(postMessages[i]);
            }
        }
        // return array
        res.status(200).json(posts);
    }
    catch (error) {
        res.status(404), json({ message: error.message });
    }

}
export const createPost = async (req, res) => {
    const body = req.query;
    const newPost = new PostMessage(body);
    try {
        await newPost.save();
        res.status(200).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }

}

//connect to front end
export const likePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    const post = await PostMessage.findById(id);
    const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true })

    res.json(updatedPost);
}

function closeTo(post, user) {
    if (post === null || user === null) return false;
    if (Math.abs(user-post) < 10) return true;
    return false;
}