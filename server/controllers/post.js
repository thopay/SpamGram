import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';
export const getPost = async (req, res) => {

   
    try{
const postMessages = await PostMessage.find();
res.status(200).json(postMessages);
    }
    catch(error){
     res.status(404),json({message: error.message});
    }

}
export const createPost = async (req, res) => {
    const body = req.body;
    const newPost = new PostMessage(post);
    try{
    await newPost.save();

    res.status(201).json(newPost);
    } catch(error){
res.status(409).json({message: error.message});
    }

}
//connect to front end
export const likePost = async (req, res) => {
 const {id} = req.params;

 if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

 const post = await PostMessage.findById(id);
 const updatedPost = await PostMessage.findByIdAndUpdate(id, {likeCount : post.likeCount + 1}, {new : true})

 res.json(updatedPost);
}