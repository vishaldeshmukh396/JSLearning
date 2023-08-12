const arrayFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
arrayFruits[0];
console.log(`First Element===>>${arrayFruits[0]}`);
let length=arrayFruits.length;
arrayFruits[4];
console.log(`Element at last=====>> ${arrayFruits[arrayFruits.length-1]}`);
arrayFruits.unshift("Papaya");
console.log(`Added papaya word===>>${arrayFruits}`);
arrayFruits.push("Pineapple")
console.log(`Added Pineapple at last===>>${arrayFruits}`);
arrayFruits.splice(5,0,"Dragon Fruit");
console.log(`Added Dragon Fruit before Water melon==>>${arrayFruits}`);
arrayFruits[2]="Kiwi";
console.log(`replaced Orange With Kiwi======>>${arrayFruits}`);
 let out=arrayFruits.slice(1,4);
console.log(`Slices 1 to 4 ==>>${out}`);
let res=arrayFruits.slice(5,8);
console.log(`Last three element===>>>${res}`);
