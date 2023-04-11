import { skills } from "../data/skills.js"

function index(req, res) {
  res.render('todos/index', {
    skills: skills
  })
}

export {
  index,
}