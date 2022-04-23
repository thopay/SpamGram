import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';


var postsGlobal;
export const getPost = async (req, res) => {

    try {
        var posts = [];
        var lat = req.query.lat;
        var long = req.query.long;
        const postMessages = await PostMessage.find();
        for (var i = 0; i < postMessages.length; i++) {
            // add posts close to current long lat to array
            if (closeTo(postMessages[i].lat, lat) && closeTo(postMessages[i].long, long)) {
                posts.push(postMessages[i]);
            }
        }
        if (req.query.sortBy == "likes") {
            // know they want posts sorted by likes
            res.status(200).json(posts.sort((a, b) => parseFloat(b.likeCount) - parseFloat(a.likeCount)));
        } else if (req.query.sortBy == "date") {
            // know they want by date
            res.status(200).json(posts.reverse());
        } else{
            res.status(200).json(posts);
        }
    }
    catch (error) {
        res.status(404).json({ message: error });
        console.log(error)
    }

}
export const createPost = async (req, res) => {
    const body = req.query;
    const newPost = new PostMessage(body);
    try {
        await newPost.save();
        res.status(200).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error });
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
    const CLOSE_TO_CONSTANT = 10;
    if (post === null || user === null) return false;
    if (Math.abs(user - post) < CLOSE_TO_CONSTANT) return true;
    return false;
}