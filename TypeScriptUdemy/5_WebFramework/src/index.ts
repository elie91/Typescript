import { User } from './models/User';

const user = new User({ id: 1 });
user.on('change', () => console.log('user changed'));
user.fetch();

const user2 = new User({ id: 2, name: "Toto", age: 20 });
user.on('save', () => console.log('user saved'));
user.save();

console.log(user)
console.log(user2)
