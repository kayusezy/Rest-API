// // server.js

// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv"
// import User from "./config/User.js"


// // Load environment variables from .env file
// dotenv.config();

// // Initialize express app
// const app = express();

// // Middleware to parse JSON
// app.use(express.json());

// // Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error('MongoDB connection error:', err));

// // Routes

// // GET: Return all users
// app.get('/users', async (req, res) => {
//   try {
//     const users = await User.find();
//     res.json(users);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // POST: Add a new user
// app.post('/users', async (req, res) => {
//   const user = new User({
//     name: req.body.name,
//     email: req.body.email,
//     age: req.body.age,
//   });
  
//   try {
//     const newUser = await user.save();
//     res.status(201).json(newUser);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // PUT: Edit a user by ID
// app.put('/users/:id', async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);
//     if (!user) return res.status(404).json({ message: 'User not found' });
    
//     user.name = req.body.name || user.name;
//     user.email = req.body.email || user.email;
//     user.age = req.body.age || user.age;
    
//     const updatedUser = await user.save();
//     res.json(updatedUser);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // DELETE: Remove a user by ID
// app.delete('/users/:id', async (req, res) => {
//   try {
//     const user = await User.findByIdAndDelete(req.params.id);
//     if (!user) return res.status(404).json({ message: 'User not found' });
    
//     res.json({ message: 'User deleted', user });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // Start the server
// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });
