import { Schema, model } from "mongoose";

const bookingSchema = new Schema({
    title: {type: String, required: true},
    completed: {type: Boolean}
});

export const BookingModel = model("Booking", bookingSchema);