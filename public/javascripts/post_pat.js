$(document).ready(function(){
  var item = {
    fname: $firstname.val();
    lname: $lastname.val();
  };
  $('form').on('submit',function(){
    $.ajax({
      type: 'POST',
      url: '/signin',
      data: item,
      contentType: 'application/json',
      success: function(data){
        console.log(data);
      },
      error:function(){
        alert('Error');
      }
    });
  });
