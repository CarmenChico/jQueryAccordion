//close everthing up

var event = document.addEventListener("click", function() {
  console.log(document.getElementById("click"));
});

function closePara(event) {
// document.getElementById("para1").addEventListener("click")

  if ( === "#para1") {
    $("#para1").removeClass("hidePara");
  }

  // $("#para2").removeClass("hidePara");

  // $("#para3").removeClass("hidePara");

}



// Shows all div content
closePara();



//



//open and close here
