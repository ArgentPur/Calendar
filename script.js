var currentHour = moment().hours()

console.log(currentHour)

alert("hi")

$(".saveBtn").on("click", function() {
   var event= $(this).siblings(".textValue").val();
   var time=  $(this).siblings("")

   localStorage.setItem(event)
   console.log(event)
});


function timeUpdate() {
   var currentHour = moment().hours()

   $(".col-sm-8").each(function() {

      var block = $()


      if(block = currentHour) {

         

      }





   });
};


