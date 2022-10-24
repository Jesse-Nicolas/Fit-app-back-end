import { Router } from "express"
import * as exercisesCtrl from '../controllers/exercises.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes -------------*/
router.get('/', exercisesCtrl.index)
router.get('/:id', exercisesCtrl.show)

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, exercisesCtrl.create)
router.put('/:id', checkAuth, exercisesCtrl.update)
router.delete('/:id', checkAuth, exercisesCtrl.delete)

export { router }