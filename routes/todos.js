import { Router } from 'express'

const router = Router()

// ALL ROUTES IN THIS FILE EXIST ON localhost:3000/todos

// GET localhost:3000/todos
router.get('/', function(req, res) {
  res.send('respond with a resource')
})

// GET localhost:3000/todos/shrek
router.get('/shrek', function(req, res) {
  res.send('respond with a Shrek')
})


export { router }
