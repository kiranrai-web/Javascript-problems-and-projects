const createBtn = document.querySelector(".addNote");
const noteContainer = document.querySelector(".container");
let notes = document.querySelectorAll(".note")

const updateStorage =()=>{
    localStorage.setItem("notes",noteContainer.innerHTML)
}

function showNotes(){
    noteContainer.innerHTML = localStorage.getItem("notes");
}

showNotes();

createBtn.addEventListener("click",()=>{
    let noteBox = document.createElement("p");
    let img = document.createElement("img");
    noteBox.className = "note";
    noteBox.setAttribute("contenteditable","true");
    img.src = "delete.png"
    noteContainer.appendChild(noteBox).appendChild(img);
})

noteContainer.addEventListener("click",e=>{
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName ==="P"){
        notes = document.querySelectorAll(".note");
        notes.forEach(nt=>{
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown", event=>{
    if(event.key ==="Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault()
    }
})


