import { Router } from "express"
import * as exercisesCtrl from '../controllers/exercises.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// Public Routes

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, exercisesCtrl.create)

export { router }