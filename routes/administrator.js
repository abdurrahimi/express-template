import express from 'express'
import * as controller from '../controller/administrator/Controller.js'

const router = express.Router()

router.get('/test', controller.test)

export default router