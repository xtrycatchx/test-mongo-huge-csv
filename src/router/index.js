import express from 'express'
import { container } from '../crap/container'

const router = express.Router()
const streamController = container.resolve('streamController')

router.get('/test', streamController.get)

export default router;
