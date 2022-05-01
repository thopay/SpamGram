import mongoose from 'mongoose';

const loginSchema = new mongoose.Schema({
    username: String,
    emoji: String,
    color: String,
    phonenumber: Number,
});

const Username = mongoose.model('Username', loginSchema);
export default Username;