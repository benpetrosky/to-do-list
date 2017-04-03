function Todo(task, date, deadline)
{
  this.taskname = task;
  this.todayDate = date;
  this.deadlineDate = deadline;
}
Todo.prototype.todoString = function(){
  return this.taskname + " by " + this.deadlineDate;
}
Todo.prototype.accomplishedString = function(){
  return this.taskname + " IS DONE!";
}

$(function(){
  $("#form-one").submit(function(event){
    event.preventDefault();

    var taskInput = $("#task").val();
    var todayDateInput = $("#today-date").val();
    var deadlineInput = $("#deadline").val();

    if(!taskInput || !todayDateInput || !deadlineInput)
    {
      alert("Please fill all information");
    }
    else
    {
      var newTask = new Todo(taskInput, todayDateInput, deadlineInput);

      $("#result-to-do-list").prepend("<li><span class='todo-item'>" + newTask.todoString() + "</span></li>");

      $("#task").val("");
      $("#today-date").val("");
      $("#deadline").val("");

      $(".todo-item").click(function() {
        this.remove();
        $("#accomplished").prepend("<li><span class='accomplished-item'>" + newTask.taskname + "</span></li>")
      });
    }
  });
});
// var completed = $(this).text();
// console.log(completed);
