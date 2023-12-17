import { Collection } from "./Collection";

console.log('Hello World')
const test = new Collection('test');
test.addMain('MyList', 'All things i need to do')
test.collection['MyList'].addContent('do Cardio 1 hour');
console.log(test);