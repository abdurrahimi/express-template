import express from 'express'
import * as controller from '../src/controller/adminController.js'

const router = express.Router()

router.post('/create', controller.create)
router.get('/', controller.getList)

export default router