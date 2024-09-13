// ----------Problem 1-----------
const greeter = (myArray, counter) => {
    const greetText = 'Hello ';
    for (let index = 0; index < myArray.length; index++) {
      console.log(`${greetText}${myArray[index]}`);
    }
  };
  console.log("----------Problem 1-----------")
  console.log(greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3));


//   ----------Problem 2-----------
  const capitalize = ([first, ...rest]) => {
    return first.toUpperCase() + rest.join('');
  };
console.log("----------Problem 2-----------")  
console.log(capitalize("hello")); 
console.log(capitalize("world")); 


// ----------Problem 3-----------
const colors = ['red', 'green', 'blue', 'yellow'];

const capitalizedColors = colors.map(color => capitalize(color));
 console.log("----------Problem 3-----------") 
 console.log(capitalizedColors);


 // ----------Problem 4-----------
 const filterLessThanTwenty = (arr) => {
    return arr.filter(value => value >= 20);
  };
  
  
  const number = [5, 12, 18, 21, 30, 7, 50];
  const filteredNumbers = filterLessThanTwenty(number);
  console.log("----------Problem 4-----------");
  console.log(filteredNumbers); 


//   ----------Problem 5-----------
  const calculateSum = (arr) => {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  };
  
  // Function to calculate the product of an array
  const calculateProduct = (arr) => {
    return arr.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
  };
  
  
  const numbers = [1, 2, 3, 4, 5];
  
  const sum = calculateSum(numbers);
  const product = calculateProduct(numbers);
  
  console.log("----------Problem 5-----------")
  console.log(`Sum: ${sum}`);       
  console.log(`Product: ${product}`); 

//   ----------Problem 6-----------
class Car {
    constructor(model, year) {
      this.model = model;
      this.year = year;
    }
  
   
    displayInfo() {
      return `${this.model} (${this.year})`;
    }
  }
  
  // Sedan subclass definition
  class Sedan extends Car {
    constructor(model, year, balance) {
    
      super(model, year);
      this.balance = balance;
    }
  
    
    displayInfo() {
      return `${super.displayInfo()} with balance: $${this.balance}`;
    }
  }
  
 console.log("----------Problem 6-----------")
  const mySedan = new Sedan('Toyota Camry', 2021, 25000);
  console.log(mySedan.displayInfo());