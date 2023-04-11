import { Router } from 'express'
import * as skillsCtrl from "../controllers/skills.js"

const router = Router()

// ALL ROUTES IN THIS FILE EXIST ON localhost:3000/todos

// GET localhost:3000/todos
router.get('/', skillsCtrl.index)

// GET localhost:3000/todos/shrek
router.get('/shrek', function(req, res) {
  res.send('respond with a Shrek')
})


export { router }
