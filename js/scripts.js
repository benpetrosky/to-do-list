function Todo(task, deadline)
{
  this.taskname = task;
  this.deadlineDate = deadline;
}
Todo.prototype.todoString = function(){
  return this.taskname + " by " + this.deadlineDate;
}
Todo.prototype.accomplishedString = function(){
  return  "&#10003" + " " + this.taskname + " IS DONE!";
}

$(function(){
  $("#form-one").submit(function(event){
    event.preventDefault();

    var taskInput = $("#task").val();
    var deadlineInput = $("#deadline").val();

    if(!taskInput || !deadlineInput)
    {
      alert("Please fill all information");
    }
    else
    {
      var newTask = new Todo(taskInput, deadlineInput);

      $("#result-to-do-list").prepend("<li><span class='todo-item'>" + newTask.todoString() + "</span></li>");

      $("#task").val("");
      $("#deadline").val("");

      $(".todo-item").click(function() {
        this.remove();
        $("#accomplished").append("<li><span class='accomplished-item'>" + newTask.accomplishedString() + "</span></li>")
      });
    }
  });
});
// var completed = $(this).text();
// console.log(completed);
