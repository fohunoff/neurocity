'use strict';

(function () {
  
  class User {
    constructor(options) {
      this.name = options.name,
      this.avatar = options.avatar
    }
  }
  
  class Manager {
    constructor(options) {
      this.name = options.name,
      this.avatar = options.avatar
    }
  }
  
  class Admin {
    constructor(options) {
      this.name = options.name,
      this.avatar = options.avatar
    }
  }
  
  class UserFactory {
    createUser(options){
      if (options.userRole === 'User') {

        return new User(options);

      } else if (options.userRole === 'Manager') { 

        return new Manager(options);

      } else if (options.userRole === 'Admin') {

        return new Admin(options);

      }
    }
  }

  const factory = new UserFactory();

  const user = factory.createUser({
    userRole: 'User',
    name: 'Иван',
    avatar: 'ava.png'
  });

  const manager = factory.createUser({
    userRole: 'Manager',
    name: 'Вячеслав',
    avatar: 'ava.png'
  });

  const admin = factory.createUser({
    userRole: 'Admin',
    name: 'Денис',
    avatar: 'ava.png'
  });


  console.log('\n[user ↓↓]');
  console.log(user);
  console.log('\n[manager  ↓↓]');
  console.log(manager);
  console.log('\n[admin]: ↓↓');
  console.log(admin);

})();