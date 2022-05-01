import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';
import Comment from '../models/comment.js';


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
    console.log(body)
    if (body.message == null) {
        res.status(409).json({ error: 'Empty post' });
    }
    const newPost = new PostMessage(body);
    try {
        await newPost.save();
        res.status(200).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error });
    }

}

export const createComment = async (req, res) => {
    let body = req.query;
    if (body.message == null) {
        res.status(409).json({ error: 'Empty post' });
    }
    const post = await PostMessage.findById(body.postid);
    await PostMessage.findByIdAndUpdate(body.postid, { comments: post.comments + 1 }, { new: true })

    body.postid = mongoose.Types.ObjectId(body.postid)
    const newComment = new Comment(body);
    try {
        await newComment.save();
        res.status(200).json(newComment);
    } catch (error) {
        res.status(409).json({ message: error });
    }

}

export const getComments = async (req, res) => {
    const { id } = req.query;
    const comments = await Comment.find({postid: mongoose.Types.ObjectId(id)});
    try {
        res.status(200).json(comments);
    } catch (error) {
        res.status(409).json({ message: error });
    }

}

//connect to front end
export const likePost = async (req, res) => {
    const { id, user } = req.query;

    const post = await PostMessage.findById(id);
    if (post == null) return res.status(404).json('No post with that id');
    
    if (post.dislikedBy.includes(user)) {
        const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 2, likedBy: post.likedBy.concat(user), dislikedBy: post.dislikedBy.filter(e => e != user) }, { new: true })
        res.json(updatedPost);
        return
    }

    if (post.likedBy.includes(user)) {
        const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount - 1, likedBy: post.likedBy.filter(e => e != user) }, { new: true })
        res.json(updatedPost);
    } else {
        const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1, likedBy: post.likedBy.concat(user) }, { new: true })
        res.json(updatedPost);
    }
}

export const dislikePost = async (req, res) => {
    const { id, user } = req.query;

    const post = await PostMessage.findById(id);
    if (post == null) return res.status(404).json('No post with that id');
    
    if (post.likedBy.includes(user)) {
        const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount - 2, dislikedBy: post.dislikedBy.concat(user), likedBy: post.likedBy.filter(e => e != user) }, { new: true })
        res.json(updatedPost);
        return
    }

    if (post.dislikedBy.includes(user)) {
        const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1, dislikedBy: post.dislikedBy.filter(e => e != user) }, { new: true })
        res.json(updatedPost);
    } else {
        const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount - 1, dislikedBy: post.dislikedBy.concat(user) }, { new: true })
        res.json(updatedPost);
    }
}

function closeTo(post, user) {
    const CLOSE_TO_CONSTANT = 10;
    if (post === null || user === null) return false;
    if (Math.abs(user - post) < CLOSE_TO_CONSTANT) return true;
    return false;
}