var lis = document.getElementById("list");



function addtodo(){
    var input = document.getElementById("input");
    

    var li = document.createElement("li");
    li.setAttribute("class","li");
    var litext = document.createTextNode(input.value);
    li.appendChild(litext);

    lis.appendChild(li);

    var detlbtn = document.createElement("button");
    var deltex = document.createTextNode("Delete");

   

    detlbtn.setAttribute("class","btn");
    detlbtn.setAttribute("onclick","deleteitem(this) ");
    detlbtn.appendChild(deltex);


    var edit = document.createElement("button");
    var edittex = document.createTextNode("Edit");

    edit.appendChild(edittex);
    edit.setAttribute("class","btn")
    edit.setAttribute("onclick","edititem(this)")
    li.appendChild(edit);

    li.appendChild(detlbtn);
    input.value = ""

}
function deleteitem(e){
    e.parentNode.remove();
}
function delall(){

    lis.innerHTML = ""
}
function edititem(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editVal = prompt("Enter Edit Val : ",val); 
    e.parentNode.firstChild.nodeValue = editVal;

}
