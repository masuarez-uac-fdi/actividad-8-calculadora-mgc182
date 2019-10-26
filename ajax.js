
function sumanum() 
{    
   
  var val1 = $('#num1').val();
  var val2 = $('#num2').val();

  if (val1.length==0 || val2.length==0)
   
 { 
    alert("Uno o mas campos estan vacios")
 } 
 else 
 {
   
  $.ajax({
    type: 'GET',
    url: 'suma.php',
    data: { num1: val1, num2: val2 },
    success: function(response) {
        $('#result').val(response);
    } 
  }); 

  }
  }

  function restanum() 
  {    
     
    var val1 = $('#num1').val();
    var val2 = $('#num2').val();
  
    if (val1.length==0 || val2.length==0)
     
   { 
      alert("Uno o mas campos estan vacios")
   } 
   else 
   {
     
    $.ajax({
      type: 'GET',
      url: 'resta.php',
      data: { num1: val1, num2: val2 },
      success: function(response) {
          $('#result').val(response);
      } 
    }); 
  
    }
    }
    
function multinum() 
{    
   
  var val1 = $('#num1').val();
  var val2 = $('#num2').val();

  if (val1.length==0 || val2.length==0)
   
 { 
    alert("Uno o mas campos estan vacios")
 } 
 else 
 {
   
  $.ajax({
    type: 'GET',
    url: 'multi.php',
    data: { num1: val1, num2: val2 },
    success: function(response) {
        $('#result').val(response);
    } 
  }); 

  }
  }
  
function divnum() 
{    
   
  var val1 = $('#num1').val();
  var val2 = $('#num2').val();

  if (val1.length==0 || val2.length==0)
   
 { 
    alert("Uno o mas campos estan vacios")
 } 
 else 
 {
   
  $.ajax({
    type: 'GET',
    url: 'div.php',
    data: { num1: val1, num2: val2 },
    success: function(response) {
        $('#result').val(response);
    } 
  }); 

  }
  }
   
