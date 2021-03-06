import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ExampleSchema = new Schema(
    {
        firstName: {
            type: String,
            required: [true, 'First Name is required']
        },
        email: {
            type: String,
            required: [true, 'Email is required']
        },
        age: {
            type: Number,
        },
        password: {
            type: String,
            required: [true, 'Password is required']
        }
    },
    {
        timestamps: true
    }
);

const ExampleModel = mongoose.model('ExampleModel', ExampleSchema);

export default ExampleModel;

