let query = "";

$(document).ready(function(){

  $('.btn').click(function(e){
  if($(e.target).hasClass('selected')){
    console.log(e.target)
    $(e.target).removeClass('selected');
    query -= $(e.target).text();
  }
  else{
    $(e.target).addClass('selected');
    query += $(e.target).text();
  }
  console.log(query);
  });
})
