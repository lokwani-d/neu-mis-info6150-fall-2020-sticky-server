import mongoose from 'mongoose';

const StickySchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: "Title is a required property."
        },
        content: {
            type: String
        },
        createdDate: {
            type: Date,
            default: Date.now
        },
        lastModifiedDate: {
            type: Date,
            default: Date.now
        }
    },
    {
        versionKey: false
    }
);

StickySchema.virtual('id').get(function() {
    return this._id.toHexString();
});

StickySchema.set('toJSON', { virtuals: true });

const model = mongoose.model('Sticky', StickySchema);

export default model;