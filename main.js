console.log('hello node');

let result = '';
let i = 0;

do {
  i = i+ 1
  result = result + i;
} while (i < 1000);
console.log(result);

const obj = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
};

for (const [key, value] of Object.entries(obj)) {
  console.log(`${key}: ${value}`);}

  const arrayOfPersons = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Feb 1, 1941",
    gender: "female",

    firstName: "John",
    lastName: "wick",
    birthDate: "Jan 5, 1965",
    gender: "male",

    firstName: "Jayla",
    lastName: "yaka",
    birthDate: "Sept 6 , 1923",
    gender: "female",

    firstName: "Joe",
    lastName: "smoe",
    birthDate: "may 25, 1945",
    gender: "male"
  };
 const newArr = arrayOfPersons.map(function(firstName){
   return value;
 }); 