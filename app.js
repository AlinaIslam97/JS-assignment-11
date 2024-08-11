// Question 01

function submit() {

  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var email = document.getElementById('email').value;

  document.getElementById('displayFirstName').innerText = firstName;
  document.getElementById('displayLastName').innerText = lastName;
  document.getElementById('displayEmail').innerText = email;

  document.getElementById('result').style.display = 'block';

};


// Question 02

function expand() {
  var para = document.getElementById("para")
  var para2 = document.getElementById("para2")
  var link = document.getElementById("link")

  if (link.innerHTML === "Read more..") {
    link.innerHTML = "Read less."
    para2.style.display = "inline"
  } else {
    link.innerText = "Read more.."
    para2.style.display = "none"
  }

}



// Question 03

var selectedRow = null;

function addStudent() {
  var name = document.getElementById('name').value;
  var age = document.getElementById('age').value;
  var grade = document.getElementById('grade').value;

  if (selectedRow === null) {
    var table = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow();
    newRow.insertCell(0).innerHTML = name;
    newRow.insertCell(1).innerHTML = age;
    newRow.insertCell(2).innerHTML = grade;
    newRow.insertCell(3).innerHTML = `<button onclick="editStudent(this)">Edit</button>
                                              <button onclick="deleteStudent(this)">Delete</button>`;
  } else {
    selectedRow.cells[0].innerHTML = name;
    selectedRow.cells[1].innerHTML = age;
    selectedRow.cells[2].innerHTML = grade;
    selectedRow = null;
  }

  document.getElementById('studentForm').reset();
}

function deleteStudent(button) {
  var row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

function editStudent(button) {
  selectedRow = button.parentNode.parentNode;
  document.getElementById('editName').value = selectedRow.cells[0].innerHTML;
  document.getElementById('editAge').value = selectedRow.cells[1].innerHTML;
  document.getElementById('editGrade').value = selectedRow.cells[2].innerHTML;
  document.getElementById('editForm').style.display = 'block';
}

function saveEdit() {
  selectedRow.cells[0].innerHTML = document.getElementById('editName').value;
  selectedRow.cells[1].innerHTML = document.getElementById('editAge').value;
  selectedRow.cells[2].innerHTML = document.getElementById('editGrade').value;
  selectedRow = null;
  document.getElementById('editForm').style.display = 'none';
}

function cancelEdit() {
  selectedRow = null;
  document.getElementById('editForm').style.display = 'none';
}