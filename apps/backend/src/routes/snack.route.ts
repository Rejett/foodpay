import { Router } from 'express'
import { createSnack, deleteSnack, listBySnack, listSnacks } from '../controller/snack.controller'

const router = Router()

router.get('/', listSnacks)
router.post('/', createSnack)
router.delete('/delete/:id', deleteSnack)
router.get('/:snack', listBySnack)

export { router as snackRoutes }