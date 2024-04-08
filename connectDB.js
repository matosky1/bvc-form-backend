const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://odinukweanthony:Matosky@cluster0.5vr93wd.mongodb.net/bvcform?retryWrites=true&w=majority&appName=Cluster0';

async function connectToMongoDB() {
    try {
        await mongoose.connect(dbURI);
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err)
    }
}

    module.exports = connectToMongoDB;