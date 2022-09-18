let btn_add = document.getElementsByClassName("todo-add");
var inp_todo = document.getElementById("todo-text");
var itemCount = 0;

function add_todo(){
    let new_todo_box = document.createElement("div");
    new_todo_box.id = "item-"+itemCount;
    document.getElementById("todo").appendChild(new_todo_box);

    let new_todo = document.createElement("input");
    new_todo.type = "checkbox";
    document.getElementById("item-"+itemCount).appendChild(new_todo);

    new_todo = document.createElement("p");
    new_todo.innerHTML = inp_todo.value;
    new_todo.onclick = function(){remove(new_todo)};
    document.getElementById("item-"+itemCount).appendChild(new_todo);
    
    new_todo_box.id = "item";

    itemCount++;
}

function remove(object){
    object.parentElement.remove();
}