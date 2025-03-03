import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://zaidrehmann:admin123@cluster0.jbdck.mongodb.net/FOODDELIVERY').then(() => {
        console.log('DB Connected');
    })
}