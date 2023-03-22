const {faker} = require('@faker-js/faker');

class UsersService{

  constructor(){
    this.users = [];
    this.generate()
  }

  generate(){
    for (let i = 0; i < 10; i++) {
      this.users.push({
        id: faker.datatype.uuid(),
        name: faker.name.firstName(),
        birthdate: faker.date.birthdate()
      })
    }

  }

  createUser(body){
    this.users.push(body);
    return {
      message:'User Created',
      data: body
    }
  }

  updateUser(){
    
  }

  allUsers(){
    return this.users
  }

  oneUser(id){
    const user = this.users.find(item => item.id == id);
    return user;
  }

  deleteUser(id){
    const userIndex = this.users.findIndex(item => item.id == id)
    this.users.splice(userIndex, 1);
    const response = {
      message: "User Deleted",
      id
    }
    return response
  }

}

module.exports = UsersService

