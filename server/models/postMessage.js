import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    message: String,
    creator: String,
    long: Number,
    lat: Number,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()

    },
});

const PostMessage = mongoose.model('PostMessage', postSchema);
export default PostMessage;