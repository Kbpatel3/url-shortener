import mongoose from 'mongoose';

const urlSchema = new mongoose.Schema({
    url : { type: String, required: true, trim: true },
    shortUrl : { type: String, required: true },
    createdAt : { type: Date, default: Date.now },
    deletedAt : { type: Date, index: { expires: 0 } },
});

export default mongoose.model('Url', urlSchema);