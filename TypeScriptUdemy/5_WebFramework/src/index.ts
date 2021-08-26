import { User } from './models/User';

const user = new User({ name: 'Elie', age: 23 });


user.on('change', () => console.log('change 2'));
user.on('change', () => console.log('change 1'));
user.on('click', () => console.log('click'));

user.trigger('change');
user.trigger('click');

console.log(user)