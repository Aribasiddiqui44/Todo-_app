var list = document.getElementById("todo_list");
function addTodo()
{
    var input_Val = document.getElementById("todo_data");
    var li = document.createElement("li");
    var litext = document.createTextNode(input_Val.value);
    li.appendChild(litext);
    var _btn = document.createElement("button");
    var buttonText= document.createTextNode("Delete");
    var but = document.createElement("button");
    var butntext = document.createTextNode("Delete All");
    but.setAttribute("onclick","deleteall(this)");
    but.appendChild(butntext);
    li.appendChild(but)
    _btn.setAttribute("onclick","deleteTodo(this)");
    _btn.appendChild(buttonText);
    
    list.appendChild(li);
    li.appendChild(_btn);
    
}
function deleteTodo(currentElement)
{
  currentElement.parentNode.remove();
}
function deleteall()
{
  todo_list.innerHTML="";
}

