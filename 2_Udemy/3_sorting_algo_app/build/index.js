"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var StringCollection_1 = require("./StringCollection");
var LinkedList_1 = require("./LinkedList");
var numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
var stringCollection = new StringCollection_1.StringCollection("adcefghb");
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(7);
numbersCollection.sort();
console.log(numbersCollection.data);
stringCollection.sort();
console.log(stringCollection.data);
linkedList.sort();
console.log(linkedList.print());
