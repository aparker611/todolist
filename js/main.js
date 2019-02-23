$(document).ready(function() {
  var $submit = $('.submit');
  var $input  = $('.additem')[0];
  var $ul     = $('.item-list');
  var $done   = false;
  var i = 0;

if(typeof(Storage) !== "undefined") {
  for ( i = 0; i < localStorage.length; i++)
    $($ul).append("<li class='listItem"+ " item-"+i  +"'>" +
              "<p class='item-name'>"+localStorage.getItem("item-"+i)+"</p>" +
              "<button class='remove'></button>" +
              "</li>");
} else {
 console.log("Failed to access storage")
}

// when you click the submit button it checks that the length is not longer than 28
// it then calls the addListItem function if it is okay.
$submit.click(function( e ) {
  e.preventDefault();
  if ($input.value.length > 27 || $input.value.length === 0) {
    $input.value = "";
    alert("Please enter an amount under 28 characters and not blank");
    return false;
  } else {
    addListItem();
    return false;
  }
});
// after making sure the
  function addListItem() {
    localStorage.setItem("item-"+i, $input.value);
    var $li = "<li class='listItem"+ " item-"+i  +"'>" +
              "<p class='item-name'>"+localStorage.getItem("item-"+i)+"</p>" +
              "<button class='remove'></button>" +
              "</li>";
  $ul.append($li);
  $input.value = "";
  return false;
}

$(document).on("click", ".listItem", function() {
  if($done) {
    $(this).find("button").removeClass("done");
    $(this).removeClass("done");
    var $li = $(this);
    localStorage.setItem("item-"+i, $li)

    $done = false;
  } else {
    $(this).find("button").addClass("done");
    $(this).addClass("done");
    var $li = $(this);
    localStorage.setItem("item-"+i, $li)

    $done = true;
  }
});

$(document).on("click", ".remove", function() {
  $(this).parents("li").remove();
  var obj = $(this).attr('class').split(' ')[1];
  console.log(obj);
  localStorage.removeItem(obj);
  console.log(obj);
});

});
