import express from 'express'
import { createProperty, getAllProperties, getProperty } from '../controllers/propertyController.js'
import jwtCheck from '../config/auth0Config.js'
import { updateResidency } from '../../client/src/utils/api.js'
const router = express.Router()

router.post("/create", jwtCheck ,createProperty)
router.post("/update",jwtCheck,updateResidency)
router.get("/allprops",getAllProperties)
router.get("/:id",getProperty)

export {router as propertyRoute}