import mongoose from 'mongoose'
let isConnected = false;
// tracking connection status

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);
    if(isConnected){
        console.log('MongoDB is already connected');
        return;
    }

    try {
        // console.log("The execution is reaching here at try of database.")
        // showing error : first argument should be string which is true.
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'share_prompt',
            useNewUrlParser: true,
            useUnifiedTopology: true,

        })  
        isConnected = true;
        console.log("MongoDb connected");
    } catch (error) {
        console.log(error)
    }
}