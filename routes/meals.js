import { Router } from "express"
import * as mealsCtrl from '../controllers/meals.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// Public Routes
router.get('/', mealsCtrl.index)
router.get('/:id', mealsCtrl.show)
router.post('/search', mealsCtrl.search)

// Protected Routes
router.use(decodeUserFromToken)



export { router }