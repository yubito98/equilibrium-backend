const express = require('express');
const router = express.Router();
const CategoriesService = require('../service/categories.service')

const service = new CategoriesService();

router.get('/', (req, res) =>{
  try{
    const allCategories = service.allCategories()
    res.status(200).json(allCategories)
  }catch(error){
    res.status(404).json({
      message:"not found"
    })
  }
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
