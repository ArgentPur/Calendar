var currentHour = moment().hours()
var date = moment().date()
console.log(currentHour)
console.log(date)

alert("hi")

$(".saveBtn").on("click", function() {
   var event= $(this).siblings(".textValue").val();
   var time=  $(this).siblings("")

   localStorage.setItem(event, JSON.stringify)
   console.log(event)
});


function timeUpdate() {
   var currentHour = moment().hours()

   $(".time").each(function() {

      var block = $(this)


      if(block = currentHour) {

         

      }





   });
};


