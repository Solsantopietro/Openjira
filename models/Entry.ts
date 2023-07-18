import mongoose, { Model, Schema } from 'mongoose'

const entrySchema = new Schema({
    description: { type: String, required: true },
    createdAt: { type: Number },
    status: {
        type: String,
        enum: {
            value: ['pending', 'in-progress', 'finished'],
            message: '{VALUE} no es un estado permitido'
        }
    },
});


const EntryModel: Model = mongoose.models.Entry || mongoose.model('Entry', entrySchema)