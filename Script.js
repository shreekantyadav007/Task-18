/* Square numbers using map function */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const squareNumbers = numbers.map((num) => num ** 2);
console.log(squareNumbers);

/* Series of ternary operators */
function getGrade(score) {
  return score >= 80
    ? "A"
    : score >= 70
    ? "B"
    : score >= 60
    ? "C"
    : score >= 50
    ? "D"
    : "E";
}
console.log(getGrade(99));

/* Object destructuring and property modifying */
const car = { CompanName: "BMW", model: "C Series", year: 2024 };
console.log(car);
function updateCarYear(newyear) {
  car.year = newyear;
}
updateCarYear(2023);
console.log(car);

const { model, year } = car;
console.log(`Model: ${model}, Year: ${year}`);

/* Prime number find using filter */

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};
const prime = nums.filter(isPrime);
console.log(prime);

/* state different use case of map, filter and reduce */

const users = [{ name: "Alice" }, { name: "Bob" }, { name: "Carol" }];
const names = users.map((user) => user.name);
const filterableUsers = [
  { name: "Alice", active: true },
  { name: "Bob", active: false },
  { name: "Carol", active: true },
];
const activeUsers = filterableUsers.filter((user) => user.active);
const sum = nums.reduce((prev, curr) => prev + curr);

/* Write an asynchronous function using async-await  to fetch data from an API (you can use the JSONPlaceholder API) and log the result. */

async function fetchData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
fetchData();

/* Use optional chaining to safely access the person's phone number, even if the contact property is missing. */

const person = {
  name: "John Doe",
  address: {
    street: "123 Main St",
    city: "Springfield",
    zip: "12345",
  },
  //contact: { phone: "555-1234" },
};
const phoneNumber = person.contact?.phone;
console.log(phoneNumber);
