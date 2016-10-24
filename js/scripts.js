$(document).ready(function(){
  var clickCount = 1;
  var i = 1;

  $("form#theForm").submit(function(event) {
    event.preventDefault();
    alert("Submission");
    var items = [];
    // $(".groceryList").append("<li>" + ($("#groceryItem1").val().toUpperCase()) +"</li>");
    for (i = 1; i <= clickCount; i++) {
      var listItem = ("groceryItem" + i);
      console.log(listItem);
      var itemValue = $("#" + listItem).val();
      console.log(itemValue);
      var capItemValue = itemValue.toUpperCase();
      console.log(capItemValue);
      items[i] = (capItemValue);
      console.log(items);
      $(".groceryList").append("<li>" + items[i] +"</li>");
    }
  });
  $("#addItem").click(function(){
    clickCount++;
    console.log(clickCount);
    $("#firstItem").append('<p>Next item:</p> <div class="form-group"><label for="groceryItem' + clickCount + '">Item:</label><input id="groceryItem' + clickCount + '" class="form-control" type="text"></div>');

  });
});
