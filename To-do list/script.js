const inputBox = document.getElementById("searchInput");
const taskContainer = document.getElementById("toDoList");

const addTask = () => {
    if(inputBox.value === ""){
        alert("Please Enter task.");
    }
    else{
        let li = document.createElement("li");
        let span = document.createElement("span");
        let img = document.createElement("img");
    
        li.textContent = inputBox.value;
        img.src = "delet.png";
        img.alt = "delete"
    
        span.appendChild(img);
        li.appendChild(span);
        taskContainer.appendChild(li);
    
        inputBox.value = "";
        saveData();
    }
}

taskContainer.addEventListener("click",e=>{
    if(e.target.tagName ==="IMG"){
        let liRemove = e.target.closest("li");
        if(liRemove){
            liRemove.remove();
            saveData();
        }
    }
},false)

const saveData = () => {
    localStorage.setItem("taskList", taskContainer.innerHTML);
}

window.onload = () => {
    if (localStorage.getItem("taskList")) {
        taskContainer.innerHTML = localStorage.getItem("taskList");
    }
}

window.onbeforeunload = () => {
    saveData();
}
