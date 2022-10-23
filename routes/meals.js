import { Router } from "express"
import * as mealsCtrl from '../controllers/meals.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// Public Routes



export { router }