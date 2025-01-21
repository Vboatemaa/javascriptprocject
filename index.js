const todos = [
  {
    title: "Initial Todo",
    description: "This is the initial todo",
    complete: false,
  },
];

function addTodo(title, description) {
todos.push({ title, description, complete: false});
console.log(`Added todo: ${title}`);
}
function removeTodo(index){
if (index >= 0 && index < todos.length) {
const removeTodo = todos.splice(index, 1);
console.log(`Removed todo: ${removeTodo[0].title}`);
} else {
console.log("Invalid index. Unable to remove todo.");
} 
}
function editTodo(index, newTitle, newDescription) {
  if (index >= 0 && index < todos.length){
  todos[index].title = newTitle || todos[index].title;
  todos[index].description = newDescription || todos[index].description;
  console.log(`Edited todo at index ${index}`);
} else {
console.log("invalid index. Unable to edit todo.");
}
}
function markTodoComplete(index){
  if (index >= 0 && index < todos.length){
    todos[index].complete = true;
    console.log(`Marked todo as complete: ${todos[index].title}`); 
  } else {
    console.log("Invalid index. Unable to mark todo as complete.");
  }
}
function displayTodoLength(){
  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.complete).length;
  console.log(`Total todos: ${totalTodos}, Completed todos: ${completedTodos}`);
}


function app(){
  console.log('Welcome to the Todo Application');
  console.log('================================');
  // You will need to call your methods below this comment to edit the todos array
  addTodo("Buy groceries", "eggs, Bread, Malt");
  addTodo("Complete project", "Finish the TODO list project")
  displayTodoLength();
  // You will need to call your methods above this comment to edit the todos array
  console.log("\nCurrent todos:");
  todos.forEach((todo, index) => {
  console.log(
    `${index + 1}. ${todo.title} - ${todo.description} (Completed: ${todo.complete})` 
  );
  });
  editTodo(0, "Buy groceries for thr week","Add water to the list");
  markTodoComplete(1),
  removeTodo(0);
  displayTodoLength();

  console.log("/nUpdated todos:");
  todos.forEach((todo, index) => {
    console.log(
      `${index + 1}. ${todo.title} - ${todo.description} (Completed: ${todo.complete})`
    );
  });
}

app();