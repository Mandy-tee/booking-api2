import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bookingRouter from "./routes/booking.js";
import userRouter from "./routes/user.js";

// Connect to database
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));


// Connect to database
const app = express();

// Use middlewares
app.use(express.json());
app.use(cors());

// Use routes
app.use(bookingRouter);
app.use(userRouter);

// Listen for incoming requests
app.listen(3002, () => {
    console.log("App is listening on port 3002")
});