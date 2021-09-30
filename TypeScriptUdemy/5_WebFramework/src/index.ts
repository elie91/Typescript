import { User } from './models/User';

const user = new User({ id: 1, name: 'Elie', age: 23 });


user.events.on('change', () => console.log('change 2'));
user.events.on('change', () => console.log('change 1'));
user.events.on('click', () => console.log('click'));

user.events.trigger('change');
user.events.trigger('click');

console.log(user)

user.fetch()