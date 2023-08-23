import express from 'express'
import { allBookings, bookVisit, cancelBooking, createUser, getAllFavorites, toFav } from '../controllers/useController.js'
import jwtCheck from '../config/auth0Config.js'
const router = express.Router()

router.post("/register", createUser)
router.post("/bookVisit/:id",bookVisit)
router.post("/allBookings",allBookings)
router.post("/cancelBooking/:id",cancelBooking)
router.post("/toFav/:rid",toFav)
router.post("/allFav",getAllFavorites)

export {router as userRoute}