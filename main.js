const button = document.getElementById("fizzButton");

const numAmount = 200;

const numbers = [];
for (let i = 1; i <= numAmount; i++) {
  numbers.push(i);
  document.getElementById("output").innerHTML = numbers.join(", ");
}

button.onclick = () => {
  numbers.length = 0;
  for (let i = 1; i <= numAmount; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      numbers.push("FizzBuzz");
    } else if (i % 3 === 0) {
      numbers.push("Fizz");
    } else if (i % 5 === 0) {
      numbers.push("Buzz");
    } else {
      numbers.push(i);
    }
  }
  document.getElementById("output").innerHTML = numbers.join(", ");
};
