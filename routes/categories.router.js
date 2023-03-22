const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
  res.json([
    {
      id:1,
      name: "Work",
      description: "Here goes the description",
    },
    {
      id:2,
      name: "Health",
      description: "Here goes the description",
    }
  ])
})

router.get('/:categoryId', (req, res) =>{
  const { categoryId } = req.params
  res.json([
    {
      categoryId,
      name: "Work",
      description: "Here goes the description",
    },
    {
      categoryId,
      name: "Health",
      description: "Here goes the description",
    }
  ])
})

module.exports = router
