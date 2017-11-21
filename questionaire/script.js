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
    if (q == 1){
      price = '1';
    }
    if (q == 2){
      price = '2';
    }
    if (q == 3){
      price = '3';
    }
    if (q == 'Vegan/Vegetarian'){
      category = '4bf58dd8d48988d1d3941735';
    }
    if (q == 'Gluten-free'){
      category = '4c2cd86ed066bed06c3c5209';
    }
    if (q == 'Kosher'){
      category = '52e81612bcbc57f1066b79fc';
    }
    if (q == 'Inman Square'){
      neighborhood = '42.22, 71.63';
    }
    if (q == ' Porter Square'){
      neighborhood = '42.38, 71.11';
    }
    if (q == 'Harvard Square'){
      neighborhood = '42.37, 71.11';
    }
    if (q == 'Central Square'){
      neighborhood = '43.28, 76.14';
    }

  })


  // foursquare id
  client_id = YOUR-CLIENT-ID;
  client_secret = YOUR-CLIENT-SECRET;

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
