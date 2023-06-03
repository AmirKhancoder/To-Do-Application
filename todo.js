const todo_container=document.getElementById("todo-container");
const input_item=todo_container.children[0];
const input_time=todo_container.children[1];
const container_todo=document.getElementById("container_todo");

function unshift(element){
    const removedElement=[];
    while(container_todo.children.length!=0){
        const lastElement= container_todo.lastElementChild;
        removedElement.push(lastElement);
        container_todo.removeChild(lastElement);
    }

    container_todo.appendChild(element);
    while(removedElement.length!=0){
        container_todo.appendChild(removedElement.pop());
    }
}

function changeMe(){
    let text_val=input_item.value.trim();
    let time_val=input_time.value;
    // console.log(text_val , time_val);
    const div= document.createElement("div");
    div.className="todo-item";
    let b=document.createElement("b");
    let span=document.createElement("span");
    b.innerText=text_val;
    span.innerText=time_val;
    if(text_val && time_val){
        div.appendChild(b);
        div.appendChild(span);
        // container_todo.appendChild(div);
        unshift(div);
    }
     
}