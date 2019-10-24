
function sumanum() 
{    
   
    var num1= document.getElementById("num1");
    var num2= document.getElementById("num2");

  if (num1.value.length==0 || num2.value.length==0)
   
 { 
    alert("Uno o mas campos estan vacios")
 } 
 else 
 {
   
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        console.log(this.responseText);
        document.getElementById("result").value = this.responseText;
      }
    };
    httpRequest.open("GET", "suma.php", true);
    httpRequest.send();
  }
  }
  
   
