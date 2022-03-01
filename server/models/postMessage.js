import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
title: {type: String, required:true},
message: {type: String, required:true},
creator: String,
selectedfile: String,
likeCount: {

    type: Number,
    default: 0
},
createdAt: {
type: Date,
default: new Date()

}

});

const PostMessage = mongoose.model('PostMessage', postSchema);
export default PostMessage;