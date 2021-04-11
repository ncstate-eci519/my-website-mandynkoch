$(document).ready(function(){
    $("#hide").click(function(){
      $("p").hide();
    });
    $("#show").click(function(){
      $("p").show();
    });
  });
  
  var museum = {};
  museum['art'] = 0;
  museum['science'] = 0;
  museum['history'] = 0;
  museum['combination'] = 0;
$(document).ready(function(){
  
  drawChart();
  
  $("#submit").click(function(){
      if($("#museumtype").val()=="art"){
        museum['art']++;
      }
      if($("#museumtype").val()=="science"){
          museum['science']++;
       }
      if($("#museumtype").val()=="history"){
          museum['history']++;
       }
      if($("#museumtype").val()=="combination"){
          museum['combination']++;
       }
    drawChart();
  });
  
  function drawChart(){
    var ctx = $('#myChart');
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Art', 'Science', 'History', 'Combination'],
            datasets: [{
                label: '# of Votes',
                data: [museum['art'], museum['science'], museum['history'], museum['combination']],
              backgroundColor:[
                'yellow',
                'red',
                'blue',
                'purple'
           
              ]
            }]
            }
        });
  }
  });


  $(document).ready(function(){
    $("button").click(function(){
      var pizza = $.get("https://foodish-api.herokuapp.com/images/pizza/");
      
      pizza.done(function(response){
        $("#pizza").attr("src",response.message);
      });
    })
  })
  
   