const form = document.querySelector("form");
const myList = document.getElementById(todo);

let content = form.content;
const arr = document.createElement("ul");
form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop operations until i say so
  // blogDatabase
  arr.innerHTML = [
    {
      content: content.value,
    },
  ];
  myList.appendChild("arr");
});
