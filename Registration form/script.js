let studentsData = []; 

document.getElementById("enrollmentForm").addEventListener("submit", function(event) {
  event.preventDefault();


  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const gender = document.getElementById("gender").value;

  const courses = [];
  const checkboxes = document.querySelectorAll('input[name="courses"]:checked');
  checkboxes.forEach(checkbox => {
    courses.push(checkbox.value);
  });

  const imageUrl = document.getElementById("imageUrl").value.trim();

  const student = {
    fullName,
    email,
    gender,
    courses,
    imageUrl
  };

  studentsData.push(student);

  displayAllStudentsData();

  clearFormFields();
});


function displayAllStudentsData() {
  let dataDisplayContent = '<h2>All Students Details</h2>';

  studentsData.forEach((student, index) => {
    dataDisplayContent += `
      <div class="student-info">
        <div class="img">
        <img src="${student.imageUrl}" alt="Student Image" width="200">
      </div>
      <div class"details">
        <p><strong>Full Name:</strong> ${student.fullName}</p>
        <p><strong>Email:</strong> ${student.email}</p>
        <p><strong>Gender:</strong> ${student.gender}</p>
        <p><strong>Courses:</strong> ${student.courses.join(", ")}</p>
        </div>
        </div>
    `;
  });

  document.getElementById("dataDisplay").innerHTML = dataDisplayContent;
}

function clearFormFields() {
  document.getElementById("enrollmentForm").reset();
}

function clearAll() {
  document.getElementById("dataDisplay").innerHTML = "";
  studentsData = [];
}