$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()

  var user_count = 1

  $('#add_user').click(function(e){
    e.preventDefault();
    $('#user').append("<li><input type='text' name= 'user-"+user_count+"' placeholder= 'Name...'></li>");
    user_count ++;
  });

  $('#batch').submit(function(){
    $.ajax({
      type: "post",
      url: "/",
      data: $('batch').serialize(),
      success: function(){
        alert("new batch");
      },
      error: function(){
        alert("error");
      },
      complete: function(){
        alert("complete");
      }
    });
  });

});
