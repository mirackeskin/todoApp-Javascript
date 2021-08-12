var taskArray=[];

function createElement(text){
    let taskList=document.getElementById("task-list");
    
    let li=document.createElement("li");
    li.setAttribute("class","list-group-item list-group-item-primary");
    li.innerText=text;
    taskList.appendChild(li);
}

function toList(){
    let localStorageArray=localStorage.getItem("taskListItem");
    if(localStorage.length===0){
        alert("todoList is Empty");
    }else{
        let text=JSON.parse(localStorageArray)
        //text=text[text.length-1];
        for(let i=0;i<text.length;i++){
            createElement(text[i]);
        }
        
    }

    console.log(localStorageArray);
}

window.onload=function(){ 
    
    toList();
    
    const addButton=document.getElementById("btnAddNewTask");
    const clearButton=document.getElementById("btnDeleteAll");
    const inputText=document.getElementById("txtTaskName");



    addButton.onclick=function(e){
        
        if(inputText.value==""){
            alert("Please write new task");
        }else{
            let taskText=inputText.value;
            taskArray.push(taskText);
            localStorage.setItem("taskListItem",JSON.stringify(taskArray)); 
            
            let text=JSON.parse(localStorage.getItem("taskListItem"));
            text=text[text.length-1];
            console.log(text);
            createElement(text);
        }



        e.preventDefault();
    }

    

    clearButton.onclick=function(e){
        localStorage.clear();
        taskArray=[];
        let taskList=document.getElementById("task-list");
        let li=document.getElementsByClassName("list-group-item");
        console.log(li.length); 
        let a=taskList.children;
        console.log(typeof a);

        while(taskList.firstChild){
            taskList.removeChild(taskList.firstChild);
        }

        e.preventDefault();
    }
    

}