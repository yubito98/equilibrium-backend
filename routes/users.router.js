const express = require('express');
const router = express.Router();
const UsersService = require('../service/users.service');

const service = new UsersService();

router.get('/', (req, res) =>{
  const users = service.allUsers()
  res.status(200).json(users)
})

router.get('/:userId', (req, res) =>{
  const { userId } = req.params;
  const user = service.oneUser(userId)
  res.status(200).json(user)
})

router.get('/:userId/categories', (req, res) =>{
  const { userId } = req.params
  res.json(
    {
      userId,
      name: "Work",
      description: "Here goes the description",
    }
    )
})

router.get('/:userId/categories/:categoriesId/goals', (req, res) =>{
  const { userId } = req.params
  res.status(200).json(
    {
      userId,
      name: "Work",
      description: "Here goes the description",
    }
    )
})

// POST REQUESTS
router.post('/',(req, res) =>{
  const body = req.body;
  const createUser = service.createUser(body);
  res.status(201).json(createUser)
})

router.patch('/:id', (req, res) =>{
  const {id} = req.params;
  const body = req.body;
  res.json({
    message: "Updated",
    data:body,
    id,
  })
})

router.delete('/:id', (req, res) =>{
  const {id} = req.params;
  const deleteUser = service.deleteUser(id)
  res.json(deleteUser)
})


module.exports = router;