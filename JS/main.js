// ---we use this at the begining so that the document waits for everything to be present and ready before it starts working....
//this maybe applies to the src being a link instead of the downloaded file we have acquired. (need to check)

// jQuery(document).ready(functions($){

// }
 $(title).click(function(){
//
// }

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
var event = document.addEventListener("click", function() {
var $this = $(this);
//we want to test to see if this works.
  console.log(document.getElementById("click"));
});

function closePara(event) {
document.getElementById("para1").on("click")

  if (==="#para1") {
    $("#para1").removeClass("hidePara");
  }

  // $("#para2").removeClass("hidePara");

  // $("#para3").removeClass("hidePara");

}



// Shows all div content
closePara();



//



//open and close here
