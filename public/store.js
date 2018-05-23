$(document).ready(function(){

 $("#update").click(function(){
    $("#update").hide();
 });

 $("#delete").click(function(){
    $("#delete").hide();
 });

  $.ajax({
    type : "get",
    url : '/get/entry',
    contentType : "application/json",
    dataType : 'json',
    success : function(data,err){
      for(var i = 0 ; i < data.length ; i++)
      {
       $("#n").append("<hr><i>"+data[i].name+"<br><i>");
       $("#e").append("<hr><i>"+data[i].email+"<br><i>");
       $("#a").append("<hr><i>"+data[i].address+"<br></i>");
       $("#p").append("<hr><i>"+data[i].phonenumber+"<br></i>");
       $("#b").append("<hr><i>"+data[i].bloodgroup+"<br></i>");
     }
       if(err)
       console.log(err);
   }

    });

});
