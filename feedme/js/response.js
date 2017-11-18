
let query = '';

$(document).ready(function(){

  $('.btn').click(function(e){
    if($(e.target).hasClass('selected')){
      console.log(e.target)
      $(e.target).removeClass('selected');
      query += $(e.target).text();
    }
    else{
      $(e.target).addClass('selected');
      query += $(e.target).text()+' ';
    }
  });

})

console.log(query)

function hndlr(response) {

    document.write("<p><h1 style='color:DodgerBlue;'><b>We have ")
    document.write(response.items.length);
    document.write(" responses:");
    document.write("<br></h1></b></p>");
    document.write("")
  for (var i = 0; i < response.items.length; i++) {
    var item = response.items[i]
    // in production code, item.htmlTitle should have the HTML entities escaped.
   // document.getElementById("content").innerHTML += "<br>" + item.htmlTitle;
    document.write("<h4><p style='color:MediumSeaGreen;>'");
    document.write(item.htmlTitle);
    document.write("   ");
    document.write(item.link);
    document.write("<br>");
    document.write("</p></h4>");
  }
}
 