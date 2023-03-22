const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
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



module.exports = router;