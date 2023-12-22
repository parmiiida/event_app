import mongoose from 'mongoose'

//the URL we wanna connect to
const MONGODB_URI =process.env.MONGODB_URI


//if we dont already have mongoose cache connection in that case we set it to empty obj
let cached =(global as any).mongoose || {conn:null , promise:null}

//if connected just return
export const connectToDatabase = async() =>{
    if (cached.conn) return cached.conn;

    //check if we dont have mongodb_uri
    if(!MONGODB_URI) throw new Error ('MONGODB_URI is missing');

    //if we have cached connection
    cached.promise = cached.promise || mongoose.connect(MONGODB_URI , {
        dbName: ' evently' ,
        bufferCommands: false
    })

    cached.conn = await cached.promise;

    return cached.conn;
}