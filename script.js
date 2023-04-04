var selectedRow=null;
var currentId = 1;
const student = [];

// Form Submit Function
function onFormSubmit() {

        if (selectedRow == null)
        {
            var studentData = readNewFormData(selectedRow);
            insertNewRecord(studentData);
        }
        else
        {
            var studentData = readFormData(selectedRow);
            updateStudent(studentData);
        }

        resetForm();
    
}


// Get Values From Form
function readNewFormData() {
    var formData = {};
    // Get Values From  Input
    formData["id"]=currentId;
    formData["studentName"] = document.getElementById("studentName").value;
    formData["email"] = document.getElementById("email").value;
    formData["age"] = document.getElementById("age").value;
    formData["grade"] = document.getElementById("grade").value;
    formData["degree"] = document.getElementById("degree").value;

    currentId++;

    student.push(formData);
    // return Form Data
    return formData;
}

function readFormData() {
    var formData = {};

    formData["studentName"] = document.getElementById("studentName").value;
    formData["email"] = document.getElementById("email").value;
    formData["age"] = document.getElementById("age").value;
    formData["grade"] = document.getElementById("grade").value;
    formData["degree"] = document.getElementById("degree").value;

    // return Form Data
    return formData;
}


// Insert New User Record
function insertNewRecord(data) {

    var table = document.getElementById("listTable").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);

    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.id;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.studentName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.email;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.age;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.grade;
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = data.degree ;
    cell6 = newRow.insertCell(6);
    cell6.innerHTML = `<a onClick="editStudent(this)"><img src="resources/edit.png" alt="edit"></a>
    <a onClick="deleteStudent(this)"><img src="resources/trash.png" alt="edit"></a>`;
}


function resetForm() {
    document.getElementById("studentName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("age").value = "";
    document.getElementById("grade").value = "";
    document.getElementById("degree").value = "";
    selectedRow = null;
}



function editStudent(td) {
    var btn = document.getElementById("form-action-button");
    btn.value = "Edit Student";
    btn.style.backgroundColor="black";
    btn.style.border="1px solid white";
    btn.style.color="white";
    
    
    selectedRow = td.parentElement.parentElement;
    document.getElementById("studentName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("email").value = selectedRow.cells[2].innerHTML;
    document.getElementById("age").value = selectedRow.cells[3].innerHTML;
    document.getElementById("grade").value = selectedRow.cells[4].innerHTML;
    document.getElementById("degree").value = selectedRow.cells[5].innerHTML;
    console.log(btn.innerHTML);
}

// Update Record
function updateStudent(studentData) {

    selectedRow.cells[1].innerHTML = studentData.studentName;
    selectedRow.cells[2].innerHTML = studentData.email;
    selectedRow.cells[3].innerHTML = studentData.age;
    selectedRow.cells[4].innerHTML = studentData.grade;
    selectedRow.cells[5].innerHTML = studentData.degree;

    var btn = document.getElementById("form-action-button");
    btn.style.backgroundColor="white";
    btn.style.border="none";
    btn.style.color="black";
    btn.value="Add Student";
}


// Delete Function
function deleteStudent(data) {
    if (confirm('Are you sure to delete this record ?')) {
        row = data.parentElement.parentElement;
        document.getElementById("listTable").deleteRow(row.rowIndex);
        resetForm();
    }
}