/* David Kenny-Vaughan, Week 10  Lab. 30.11.2025

Create an application that asks a user to enter how many subjects they have. 
The application should then ask the user to enter the results for each subject. 
Store these results in an array and print them back to the user along with their overall average and grade for each module.



*/

function setSubjects() {

//Declare constants

  const numSubjects = parseInt(document.getElementById("numSubjects").value);
  const input = document.getElementById("resultInput");
  const results = document.getElementById("finalResults");
  
 //Validate inputs

  if (numSubjects < 1 || isNaN(numSubjects)) {
    alert("Please enter a valid number of subjects");
    return;
  }
  
  

  // Create input fields to take in subjects determined by the number required. 
  for (let i = 1; i <= numSubjects; i++) {
    input.innerHTML += `
      <label>Enter mark for Subject ${i}:</label><br>
      
      <input type="number" class="marks" min="0" max="100"><br>
    `;
  }

  // Add button to calculate scores
  input.innerHTML += `<button onclick="setScores(${numSubjects})" type="button" class="button">Enter</button>`;
  //remove dormant elements function
 removeElements();
}
//remove dormant elements function defined
function removeElements(){
	document.getElementById("row1").style.display="none";
	}
//function to set the scores into an array
function setScores(num) {

  const results = document.getElementById("finalResults");
  const markInputs = document.querySelectorAll(".marks");

  results.innerHTML = ""; // clear old output

  let scores = [];
  let total = 0;

  // Collect scores
  for (let i = 0; i < num; i++) {
    let value = parseFloat(markInputs[i].value);

    if (isNaN(value) || value < 0 || value > 100) {
      alert(`Please enter a valid mark between 0 and 100 for subject ${i + 1}.`);
      return;
    }

    scores.push(value);
    total += value;
  }
//define average
  let average = total / num;

  // Grade function if else statement
  function gradeMark(m) {
    if (m >= 70) return 'A';
    if (m >= 60) return 'B';
    if (m >= 50) return 'C';
    if (m >= 40) return 'D';
    return 'F';
  }

  // Output
  results.innerHTML = `<h3>Your Results:</h3>`;

  for (let i = 0; i < scores.length; i++) {
    results.innerHTML += `
      <p>Subject ${i + 1}: ${scores[i]} (Grade: ${gradeMark(scores[i])})</p>
    `;
  }

  results.innerHTML += `
    <p><strong>Average Score:</strong> ${average.toFixed(2)}</p>
  `;
  //remove anotehr dormant element
  removeElement2();
}

//function to remove dormant element
function removeElement2(){
	document.getElementById("resultInput").style.display="none";
}
