const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");


function addTask() {
 
  if (taskInput.value === "") {
         alert("Please Enter a Task");
  }
  else{
  let li = document.createElement("li");
  li.innerHTML = taskInput.value
  taskList.appendChild(li);
  let span = document.createElement("span");
  span.innerHTML = '<i class="fas fa-trash"></i>';
  li.appendChild(span);
  li.lastElementChild.addEventListener("click", function(event) {
  event.stopPropagation();
  taskList.removeChild(li);
  });
 }
taskInput.value=""
}

taskList.addEventListener("click", function(e){
  if(e.target.matches("li")){
    e.target.classList.toggle("completed");
  }
});

function clearAll()
  {
taskList.innerHTML=""  
}
