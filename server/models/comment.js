import mongoose from 'mongoose';

const commentSchema = mongoose.Schema({
    message: String,
    creator: String,
    createdAt: Number,
	postid: mongoose.SchemaTypes.ObjectId
});

const Comment = mongoose.model('Comment', commentSchema);
export default Comment;