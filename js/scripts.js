//Obtain values from quiz questions
function quizValues(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const season = document.getElementById("season").value;
  const hobby = document.getElementById("hobby").value;
  const animal = document.getElementById("animal").value;
  const freeTime = document.querySelector("input[name='free-time']:checked").value;
//Conditionals
let result
if (freeTime === "yes") {
  result = name + ", I'm sorry but programming is not for you."
}else if(season === "1") {
  result = name + ", your recommended language is Python.";
} else if (season === "2") {
  result = name + ", your recommended language is C#.";
} else if (season === "3") {
  result = name + ", your recommended language is JavaScript."
} else if (season === "4") {
  result = name + ", your recommended language is Ruby."
}

//Show results and reset button
document.getElementById("output").removeAttribute("class");
document.getElementById("reset").removeAttribute("class", "hidden");
document.getElementById("reset").setAttribute("class", "btn btn-outline-secondary");
document.getElementById("output").innerText = result;
}

window.addEventListener("load", function() {
  const form = document.getElementById("quiz");
  let resetBtn = document.querySelector("button#reset");
  form.addEventListener("submit", quizValues);

  resetBtn.addEventListener("click", function() {
    document.getElementById("output").setAttribute("class", "hidden");
    document.getElementById("name").value = null;
    document.getElementById("season").value = "1";
    document.getElementById("hobby").value = "1";
    document.getElementById("animal").value = "1";
    document.querySelector("input[name='free-time']:checked").value = "yes";
    document.getElementById("reset").setAttribute("class", "hidden");
  })
})