import { Router } from "express"
import * as dayCtrl from '../controllers/day.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// Public Routes
router.get('/', dayCtrl.index)
router.get('/:id', dayCtrl.show)


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, dayCtrl.create)


export { router }