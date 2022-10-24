import { Router } from "express"
import * as exercisesCtrl from '../controllers/exercises.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// Public Routes
router.get('/', exercisesCtrl.index)

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, exercisesCtrl.create)

export { router }