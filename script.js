const taskinput = document.getElementById("task-input");
const addtaksbtn = document.getElementById("add-task-btn")
const tasklist = document.getElementById("task-list")
const searchinput = document.getElementById("search-input")

// add task

addtaksbtn.addEventListener("click",()=>{
    const taskText = taskinput.value.trim();
    if(taskText === ""){
        alert("Please Enter a Task")
        return
    }

    const taskitem  =  document.createElement("li")
    taskitem.className = "task-item"

    const taskTextInput = document.createElement("input")
    taskTextInput.type = "text";
    taskTextInput.value = taskText;
    taskTextInput.disabled = true;

    // edit btn
    const editbtn = document.createElement("button");
    editbtn.textContent = "Edit";
    editbtn.className = "edit-btn";

    //delete btn
    const deletebtn = document.createElement("button");
    deletebtn.textContent = "Delete";
    deletebtn.className = "delete-btn";

    taskitem.appendChild(taskTextInput)
    taskitem.appendChild(editbtn)
    taskitem.appendChild(deletebtn)
    tasklist.appendChild(taskitem)


    taskinput.value = "";

    editbtn.addEventListener("click",()=>{
        if(editbtn.textContent === "Edit"){
            taskTextInput.disabled = false
            editbtn.textContent ="Save"
        }
        else{
            taskTextInput.disabled = true
            editbtn.textContent ="Edit"
        }
    })

    deletebtn.addEventListener("click",()=>{
        tasklist.removeChild(taskitem)
    })
})

searchinput.addEventListener("input" , ()=>{
    const searchValue = searchinput.value.toLowerCase();

    const tasks = tasklist.getElementsByClassName("task-item")

    Array.from(tasks).forEach(task=>{
        const tasktext = task.querySelector("input[type='text']").value.toLowerCase()
        if(tasktext.includes(searchValue)){
            task.style.display = "";
        }
        else{
            task.style.display = "none";
        }
    })
})