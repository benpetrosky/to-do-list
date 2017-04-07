function Todo(task, deadline) //--2--> creates an object with parameters referencing each of its properties
{
  this.taskname = task;         //--2--> creates the property (this.placeName) in reference to the (name) parameter to the object
  this.deadlineDate = deadline; //--2--> creates the property (this.placeName) in reference to the (name) parameter to the object
}
Todo.prototype.todoString = function(){ //--4--> creates a outputString function using the properties of the Todo function
  return this.taskname + " by " + this.deadlineDate;//--4--> defines the todoString as a concatination of properties
}
Todo.prototype.accomplishedString = function(){   //--7--> creates a accomplishedString function using the properties of the Todo function
  return  "&#10003" + " " + this.taskname + " IS DONE!"; //--7--> defines the todoString as a concatination of taskname property
}



//user interface logic
$(function(){
  $("#form-one").submit(function(event){
    event.preventDefault();

    var taskInput = $("#task").val();          //--1--> takes input from user and creates a variable
    var deadlineInput = $("#deadline").val();  //--1--> takes input from user and creates a variable

    if(!taskInput || !deadlineInput)
    {
      alert("Please fill all information");    //--1--> tells user to fill in all inputs if there are any ommisions
    }
    else
    {
      var newTask = new Todo(taskInput, deadlineInput); //--3--> creates a variable that runs through the object funtion (Todo) in the business logic with variable input parameters that align with (Todo) parameters.
      var chore = new Date().getMilliseconds();  //--3--> creates a new variable that is assigned an specification based on the millisecond in time the task is submited
      console.log(chore);

      $("#result-to-do-list").prepend("<li><span id='" + chore + "'>" + newTask.todoString() + "</span></li>"); //--5--> calls the new contact utilizing the fullName function.
      console.log(newTask.todoString());

      $("#task").val("");     //----> clears the input field form
      $("#deadline").val(""); //----> clears the input field form


      $('#' + chore).click(function() { //--6--> makes the specification for chore a clickable id
        this.remove();          //--6--> removes the todo list item clicked on
        $('#' + chore).val("");  //--6--> gives chore tag a value
        $("#accomplished").append("<li><span class='accomplished-item'>" + newTask.accomplishedString() + "</span></li>")
      });
    }
  });
});
