const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors")
const connectDB = require("./configs/db");

const app = express();

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectDB();

app.use(cors());

// Parse JSON request bodies
app.use(express.json());

// Set up your routes
//app.use('/', require('./routes/mainRoutes'));
app.use('/', require('./routes/appoinmentRoutes'));
//app.use('/', require('./routes/patientRoutes'));
app.use('/user', require('./routes/userRoutes'));
//app.use('/protected', require('./routes/protected'));

const PORT = process.env.PORT || 8080;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});