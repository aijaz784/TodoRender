var idCount = 0;
var todos = []

function addTodo() {
    var inpVal = document.getElementById('inp')

    todos.push({
        id: idCount,
        title: inpVal.value
    })

    render()
}

function render() {
    var todoElem = document.getElementById('todos')
    todoElem.innerHTML = "";
    for (i = 0; i < todos.length; i++) {
        var elem = document.createElement('div');
        var textElem = document.createElement('p')
        var deleteButton = document.createElement('button');
        var updateButton = document.createElement('button');

        deleteButton.textContent = "Delete";
        updateButton.textContent = "Update"
        textElem.textContent = todos[i].title



        elem.setAttribute("id", todos[i].id);
        deleteButton.setAttribute("onclick", `deleteTodo(${todos[i].id})`)
        elem.appendChild(textElem)
        elem.appendChild(deleteButton)
        elem.appendChild(updateButton)
        todoElem.appendChild(elem)

    }
    idCount++;

}

function deleteTodo(id) {
    // // console.log("DELETED", id);
    // var deletedItem = document.getElementById(id);
    // var parentElem = deletedItem.parentNode;
    // parentElem.removeChild(deletedItem)

    render()
}

function updateTodo(id) {
    var inpVal = document.getElementById('inp')
    var todoItem = document.getElementById(id)

    if (inpVal.value.trim() === "") {
        alert("Updated Todo not be empty !")
        return;
    }

    todoItem.innerHTML = `
    <p>${inpVal.value}</p> <button onclick="deleteTodo(${id})">Delete</button> <button onclick="updateTodo(${id})">Update</button>
   `
}