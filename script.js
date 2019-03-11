var runningindex = 0;

function clickDel(div){
    $(div).remove();
}
function editTask(div){
    $(div).replaceWith('<input type="input" id="inputTask'+runningindex+'" />');
}
function addTask(){
    var content = document.getElementById("inputToDoTask").value;
    var text ='<div id="task'+runningindex+'" class="ToDoTask"> <p id="p'+runningindex+'>'+content+'</p><span id="deleteTask" onclick="clickDel(task'+runningindex+')">x</span><i onclick ="editTask(p'+runningindex+')" class="far fa-edit fa-xs"></i><div style="clear:both"></div></div>';
    console.log(content);
    $("#inputToDoTask").val("");
    runningindex++;
    return text;
}

$(document).ready(function(){
    $("#btnDodaj").click(function(){
        $("#toDoTasks").append(addTask);
    });

    
});