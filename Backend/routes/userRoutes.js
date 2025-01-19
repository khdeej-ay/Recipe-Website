import express from 'express'; 
// import bcrypt from 'bcrypt';  // Import bcrypt for hashing and verifying passwords
import User from '../models/userModel.js'; 

const router = express.Router();
// const SALT_ROUNDS = 10; // Number of salt rounds for bcrypt

// Route for user registration
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Hash the password before saving to the database
        // const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

        const newUser = new User({ 
            name, 
            email, 
            password // Save the hashed password
        });

        await newUser.save();
        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        console.error("Error during user creation:", error); // Log the full error to server console
        res.status(500).json({ message: "Error: Could not create user", error: error.message });
    }
});

// Route for user login
router.post('/login', async (req, res) => {
    const { 
        email, 
        password 
    } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
      }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Compare the provided password with the stored hashed password
        if (user.password !== password) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        // const isPasswordMatch = await bcrypt.compare(password, user.password);
        // if (!isPasswordMatch) {
        //     return res.status(400).json({ message: 'Invalid email or password' });
        // }

        res.json({ message: 'Login successful', user });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: "Error: Could not log in", error: error.message });
    }
});

export default router;
