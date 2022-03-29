import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
title: String,
message: String,
creator: String,
selectedfile: String,

likeCount: {

    type: Number,
    default: 0
},
createdAt: {
type: Date,
location: Object,
default: new Date()

},

});

const PostMessage = mongoose.model('PostMessage', postSchema);
export default PostMessage;