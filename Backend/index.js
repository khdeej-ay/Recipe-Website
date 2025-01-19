import express from 'express';    //Framework for building the server
import mongoose from 'mongoose';    //Library for MongoDB interactions
import dotenv from 'dotenv';    //Loads environment variables from .env.cors: Enables cross-origin requests
import cors from 'cors';    //Enables cross-origin access
import userRoutes from './routes/userRoutes.js';    //Handles user-specific API routes
dotenv.config();

const app = express();    //Creates an Express app
// const port = 4000;
const port = process.env.PORT;

// app.use(cors({
//     origin: 'https://recipe-website-munch.vercel.app/',    //Allow the live site to make requests
//     // origin: 'http://localhost:5173/',    //Allow localhost to make requests (for debugging purposes)
//     methods: ['GET', 'POST'],
// }));    //Enables cross-origin access

app.use(cors());  // Allow all origins (for debugging purposes)
app.use(express.json());    //Parses JSON request bodies

// app.get('/', (req, res) => {
//     res.send('Welcome to the API. Use /api/user for user routes.');
// });

app.use('/api/user', userRoutes);

const dbURI = process.env.DB_URI;    //DB_URI is loaded from .env for secure database configuration

// Asynchronously connects to MongoDB using the URI from .env (Handles connection success and failure)
const connectDB = async () => {
    try {
        await mongoose.connect(dbURI);
        console.log('MongoDB Connected...');
    } catch (error) {
        console.error ('Error connecting to MongoDb:', error.message);
    }
};

connectDB();

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});