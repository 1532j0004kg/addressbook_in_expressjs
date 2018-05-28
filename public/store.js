$(document).ready(function(){
 
  //var tr = $("#n").text();
$("#search").keyup(function(){
  var input, filter, table, tr, td, i;
  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  table = document.getElementById("table");  
  tr = table.getElementsByTagName("tr");
   
  for (i = 1; i < tr.length; i++)
     {
     td = tr[i].getElementsByTagName("td")[0];
         if(td)
          {
            if(td.textContent.toUpperCase().startsWith(filter))
            {
              tr[i].style.display = "";
            }
            else
            {
              tr[i].style.display = "none";
            }
          }       
    }
});
  
  $("#update").click(function(){
    $("#update").hide();
 });

 $("#delete").click(function(){
    $("#delete").hide();
 });
  
 setInterval(function() {
    $('#animate').effect('bounce',2000)
}, 1000)

  $.ajax({
    type : "get",
    url : '/get/entry',
    contentType : "application/json",
    dataType : 'json',
    success : function(data,err){
      for(var i = 0 ; i < data.length ; i++)
      {
       $("#table").append("<tr><td class='text-center'><hr><i>"+data[i].name+"<br><i></td>"+"<td class='text-center'><hr><i>"+data[i].email+"<br><i></td>"+"<td class='text-center'><hr><i>"+data[i].address+"<br><i></td>"+"<td class='text-center'><hr><i>"+data[i].phonenumber+"<br><i></td>"+"<td class='text-center'><hr><i>"+data[i].bloodgroup+"<br><i></td></tr>");
      }
       if(err)
       console.log(err);
   }

    });

});
