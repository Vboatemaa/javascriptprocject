const todos = [
  {
    title: "Initial Todo",
    description: "This is the initial todo",
    complete: false,
  }
];

function addTodo(title, description) {
todos.push({ title, description, complete: false});
console.log(`Added todo: ${title}`);
}
function removeTodo(index){
if (index >= 0 && index < todos.length) {
const removeTodo = todos.splice(index, 1);
console.log(`Removed todo: ${removedTodo[0].title}`);
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

  // You will need to call your methods above this comment to edit the todos array
  console.log('Here is a list of your todos:');
  // Print the length of the todos array below this comment

  // Print the length of the todos array above this comment
  // Iterare over the todos array and console.log each todo below this comment
  console.log(todos);
}

app();