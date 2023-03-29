const {faker} = require('@faker-js/faker');

class CategoriesService{
  constructor(){
    this.categories = [];
    this.generateCategories()
  }

  generateCategories(){
    for (let i = 0; i < 5; i++) {
      this.categories.push({
        title: faker.name.jobArea(),
        image: faker.image.avatar(),
      })

    }
  }

  allCategories(){
    return this.categories
  }

  createCategory(){

  }
}

module.exports = CategoriesService