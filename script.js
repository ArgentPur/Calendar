var currentHour = moment().hours();
var date = moment().date();
console.log(currentHour);
console.log(date);



$(".saveBtn").on("click", function() {
   let event= $(this).siblings(".textValue").val();
   let time=  $(this).siblings(".hour").val();

   localStorage.setItem(event, time,);
   JSON.stringify(event, time);
   console.log(event);
   console.log(time);
  
});


function timeUpdate() {
   var currentHour = moment().hours()

   $(".time-block").each(function() {

      var block = $(".time-block").parseInt()


      if(block = currentHour) {
         $(this).class(".present");
      };

      if(block > currentHour) {
         $(this).class(".future")
      };





   });
};


