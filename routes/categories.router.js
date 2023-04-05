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


router.post('/', (req, res) =>{
  try{
    const body =  req.body;
    const category = service.createCategory(body);
    res.status(201).json(category)
  }catch(error){
    res.status(404).json({
      message:"not found"
    })
  }
})



module.exports = router
