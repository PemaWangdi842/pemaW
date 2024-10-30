// Load the student data when the page loads
let studentData = [];

// Fetch the data from students.json
fetch("students.json")
  .then((response) => response.json())
  .then((data) => {
    studentData = data; // Store the data in the studentData array
  })
  .catch((error) => console.error("Error loading student data:", error));

// Function to search for student by Serial Number and Student Number
function searchStudent() {
  // Get values from the input fields
  const slNo = document.getElementById("SlNO").value;
  const studentNo = document.getElementById("studentNo").value;

  const student = studentData.Sheet1.find(
  (s) => s["Sl.NO"] == slNo && s["Student No"] == studentNo
);

  // Display result in tabular format
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = ""; // Clear previous result
  if (student) {
    resultDiv.innerHTML = `
  <table class="result-table">
    <tr>
      <th>Serial Number</th>
      <th>Student Number</th>
      <th>Student Name</th>
      <th>Course</th>
      <th>Marks</th>
    </tr>
    <tr>
      <td>${student["Sl.NO"]}</td>
      <td>${student["Student No"]}</td>
      <td>${student["Student name"]}</td>
      <td>${student["Course"]}</td>
      <td>${student["Marks"]}</td>
    </tr>
  </table>
`;

  } else {
    resultDiv.innerHTML = "<p>No matching student found.</p>";
  }
}
