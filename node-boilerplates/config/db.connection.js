import mongoose from 'mongoose';

const connectionString = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/exampleDB';

//Connect to MongoDb
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected...!'))
    .catch(err => console.log(`MongoDB connection error :(', err')`));

mongoose.connection.on('disconnected', err => console.log(err));