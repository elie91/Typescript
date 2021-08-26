import { NumbersCollection } from './NumbersCollection';
import { StringCollection } from './StringCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const stringCollection = new StringCollection("adcefghb");
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(7);

numbersCollection.sort();
console.log(numbersCollection.data);
stringCollection.sort();
console.log(stringCollection.data);
linkedList.sort();
console.log(linkedList.print());
