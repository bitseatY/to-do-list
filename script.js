const addBtn=document.getElementById("add-btn");
const  newTask=document.getElementById("new-task");
const taskContainer=document.getElementById("task-container");
const completedContainer=document.getElementById("completed-container");
addBtn.addEventListener("click",addTask);






function addTask(){
    
    
   if(newTask.value.trim()===""){
     alert("write the task first");
   }
   else{
       let task=document.createElement("div");
       let taskText=document.createElement("span")
       let checkBox=document.createElement("span");
       taskText.textContent=newTask.value;
       task.appendChild(checkBox,taskText);
       taskContainer.appendChild(task);
       
       
        
       checkBox.classList.add("checkbox");
      

       checkBox.addEventListener("click",()=>{
          if(taskContainer.contains(task)){
              moveToCompleted(task);
          }
          else{
            moveToUncompleted(task);
          }
           checkBox.classList.toggle("checked")
       });



        newTask.value="";
    }
    
   

}

function moveToCompleted(task){
   task.remove();
   completedContainer.appendChild(task);
   

}
function moveToUncompleted(task){
     task.remove();
     taskContainer.appendChild(task);
}

 