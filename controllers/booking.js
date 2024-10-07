import { BookingModel } from "../models/booking.js";

export const addBooking = async (req, res, next) => {
    try {
        // Validate user inputs
        // Write todo to database
        console.log("body-->",req.body)
        await BookingModel.create(req.body);
        // Respond to request
        res.status(201).json("Booking was added!");
    } catch (error) {
       next(error); 
    }
}

export const getBooking = async (req, res, next) => {
    try {
        // Fetch bookings from database
        const booking = await BookingModel.find();
        // Return response
        res.status(200).json(booking);
    } catch (error) {
        next(error);
    }
}

export const updateBooking = (req, res, next) => {
    res.json("Booking updated!");
}

export const deleteBooking = (req, res, next) => {
    res.json("Booking deleted!");
}