//Obtain values from quiz questions
function quizValues(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const season = document.getElementById("season").value;
  const hobby = document.getElementById("hobby").value;
  const animal = document.getElementById("animal").value;
  const freeTime = document.querySelector("input[name='free-time']:checked").value;

//output values

let result
if (season === "1") {
  result = name + ", your recommended language is Python";
} else if (season === "2") {
  result = name + ", your recommended language is C#";
} else if (season === "3") {
  result = name + ", your recommended language is JavaScript"
} else if (season === "4") {
  result = name + ", your recommended language is Ruby"
}


document.getElementById("output").removeAttribute("class");
document.getElementById("output").innerText = result;
}

window.addEventListener("load", function() {
  const form = document.getElementById("quiz");
  form.addEventListener("submit", quizValues);
})