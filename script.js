const taskBox=document.getElementById('add-task-box');
const  taskContainer=document.querySelector('.task-list');

function addTask(){
    if(taskBox.value==''){
        alert('you must write the task first');
    }
    else{
        let newTask=document.createElement('li');
        newTask.innerHTML=taskBox.value;
        taskContainer.appendChild(newTask);
        let span=document.createElement('span');
        span.innerHTML="\u00d7";
        newTask.appendChild(span);
        taskBox.value='';
        
    }

}

taskContainer.addEventListener("click",function(e){
    if(e.target.tagName==='LI'){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
    }

} , false);