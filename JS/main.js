
//close everthing up
//the first thing we did was to set it up to close ... we did that through the scss
//
// var bodyp = $('.accordian> paraG').hide();
//
// // ----shows 1 body open at start of the page---//
// bodyp.first().show();
//
//
// };
// // }




//now that we were able to get it to close  by applying the overflow to the id, we have to create a function to close it based on the click area.
 // var event = document.addEventListener("click", function() {
// var $this = $(this);
//we want to test to see if this works.
  // console.log(document.getElementById("click"));


// });

function closePara(event) {
  console.log(event);

  if (event.target.id==="header1") {
    console.log("Hey");
    $("#para1").removeClass("hidePara");
    $("#para2").addClass("hidePara");
    $("#para3").addClass("hidePara");

    }

    if (event.target.id==="header2") {
      console.log("Hey");
      $("#para2").removeClass("hidePara");
      $("#para1").addClass("hidePara");
      $("#para3").addClass("hidePara");
    }
    if (event.target.id==="header3") {
      console.log("Hey");
      $("#para3").removeClass("hidePara");
      $("#para1").addClass("hidePara");
      $("#para2").addClass("hidePara");
    }

}
// Shows all div content
// closePara(event);
// document.getElementById("para1").addEventListener("click")
$(".title").click(closePara);




//open and close here
