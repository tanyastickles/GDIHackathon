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

  let queryArray = query.split(' ');
  let category = '';
  let price = '';
  let neighborhood = ''
  queryArray.forEach(function(q){
    if (q == 'Vegan/Vegetarian'){
      category
    }

  })


  // foursquare id
  client_id = "445SRQTN3VD4FO5GJ43TXGPEL4Q3TS0NIETFS2GH5R0KQC5Q";
  client_secret = "TF4XDDHJCKGILSP5FWU5FUELOEP045RPOY4NI5CJ344XCZ0Q";

  let foursquareUrl = 'https://api.foursquare.com/v2/venues/explore?ll=' + '42.37' + ',' + '-71.10' +
                      '&limit=30&client_id='+client_id+'&client_secret='+client_secret+"&v=20170801";

  $.ajax({
      type: "GET",
      dataType: "jsonp",
      cache: false,
      url: ,
      success: function(data){
      	console.log(data)
      }
  });
})
