let fruit=['banana','mango','apple'];
//array push
fruit.push("kiwi");
console.log(fruit);
//array pop
fruit.pop("apple");
console.log(fruit);
//array mapping
upperFruit=fruit.map(fruit=>fruit.toUpperCase());
console.log(upperFruit);
//array filtering
let num=[1,2,3,4,5];
let eNum=num.filter(num=>num%2===0);
console.log("even array ="+ eNum);
