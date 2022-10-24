import { Router } from "express"
import * as dayCtrl from '../controllers/day.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// Public Routes

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)


export { router }