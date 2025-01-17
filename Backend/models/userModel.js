// mongoose is imported to interact with the MongoDB database
import mongoose from "mongoose";

// A blueprint for the User collection that enforces the structure and validation of data
const userSchema = new mongoose.Schema ({

    // name field
    name: {
        type: String,
        required: true
    },

    // email field
    email: {
        type: String,
        required: true,
        unique: true
    },

    // password field
    password: {
        type: String,
        required: true
    },
});

// Creates a User model based on userSchema. 
// The User model is exported for use in other parts of the application.
export default mongoose.model("User", userSchema);