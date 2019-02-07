import '@babel/polyfill';
import Person from './parts/Person';


const person = new Person('Yamada', 45);

// Yamada が出力される
console.log(person.name); 

// 45 が出力される
console.log(person.age); 
