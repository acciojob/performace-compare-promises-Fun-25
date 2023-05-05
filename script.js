// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];

// You can write your code here
function fetchAllData() {
  const startTime = performance.now();

  Promise.all(apiUrls.map(url => fetch(url)))
    .then(responses => Promise.all(responses.map(response => response.json())))
    .then(data => {
      const endTime = performance.now();
      const timeTaken = endTime - startTime;

      const output = document.getElementById("output-all");
      output.innerText = `${timeTaken} ms`;
    })
    .catch(error => console.error(error));
}

// Function to fetch data using Promise.any
function fetchAnyData() {
  const startTime = performance.now();

  Promise.any(apiUrls.map(url => fetch(url).then(response => response.json())))
    .then(data => {
      const endTime = performance.now();
      const timeTaken = endTime - startTime;

      const output = document.getElementById("output-any");
      output.innerText = `${timeTaken} ms`;
    })
    .catch(error => console.error(error));
}

// Call the functions when the page is loaded
document.addEventListener("DOMContentLoaded", () => {
  fetchAllData();
  fetchAnyData();
});