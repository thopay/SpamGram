import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    message: String,
    creator: String,
    userid: String,
    long: Number,
    lat: Number,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: Number,
    creatorColor: String,
    creatorEmoji: String,
    comments: Number,
    likedBy: [String],
    dislikedBy: [String],
});

const PostMessage = mongoose.model('PostMessage', postSchema);
export default PostMessage;