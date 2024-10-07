import { Router } from "express";
import { addBooking, deleteBooking, getBooking, updateBooking } from "../controllers/booking.js";

// Create a router
const bookingRouter = Router();

// Define routes
bookingRouter.post("/bookings", addBooking);

bookingRouter.get("/bookings", getBooking);

bookingRouter.patch("/bookings/:id", updateBooking);

bookingRouter.delete("/bookings/:id", deleteBooking);

// Export router
export default bookingRouter;