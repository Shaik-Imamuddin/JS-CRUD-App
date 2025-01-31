var selecetedRow = null;

//show alerts
function showAlert(message , className){
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div ,main);

    setTimeout(()=>document.querySelector(".alert").remove(),3000);
}

//Clear all fields
function clearFields(){
    document.querySelector('#firstName').value = "";
    document.querySelector('#lastName').value = "";
    document.querySelector('#rollNo').value = "";
}

// Add Data
document.querySelector("#student-form").addEventListener("submit", (e)=>{
    e.preventDefault();
    //get Form values
    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    const rollNo = document.querySelector("#rollNo").value;

    //validate
    if(firstName == "" || lastName == "" || rollNo == ""){
        showAlert("Please fill in all fields", "danger");
    }
    else{
        if(selecetedRow == null){
            const list = document.querySelector("#student-list");
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${firstName}</td>
                <td>${lastName}</td>
                <td>${rollNo}</td>
                <td>
                <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
                <a href="#" class="btn btn-danger btn-sm delete">Delete</a></td>
            `;
            list.appendChild(row);
            selecetedRow = null;
            showAlert("Student Added","sucess");
        }
        else{
            selecetedRow.children[0].textContent = firstName;
            selecetedRow.children[1].textContent = lastName;
            selecetedRow.children[2].textContent = rollNo;
            selecetedRow = null;
            showAlert("student Info Edited" , "Info")
        }
        clearFields();
    }

});

// Edit Data
document.querySelector("#student-list").addEventListener("click",(e)=>{
    target=e.target;
    if(target.classList.contains("edit")){
        selecetedRow = target.parentElement.parentElement;
        document.querySelector("#firstName").value = selecetedRow.children[0].textContent;
        document.querySelector("#lastName").value = selecetedRow.children[1].textContent;
        document.querySelector("#rollNo").value = selecetedRow.children[2].textContent;
    }
});

//delete data
document.querySelector('#student-list').addEventListener("click",(e)=>{
  target = e.target;
  if(target.classList.contains("delete")){
    target.parentElement.parentElement.remove();
    showAlert("Student Data Deleted","danger");
  }  
});