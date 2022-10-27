import { Router } from "express"
import * as mealsCtrl from '../controllers/meals.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// Public Routes
// router.get('/', mealsCtrl.index)
// router.get('/:id', mealsCtrl.show)
router.get('/getMealDetails/:mealId', mealsCtrl.getMealDetails)
router.get('/', mealsCtrl.index)
router.post('/search', mealsCtrl.search)

// Protected Routes
router.use(decodeUserFromToken)
router.post('/', checkAuth, mealsCtrl.createMeal)



export { router }