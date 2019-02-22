$(document).ready(function() {
  var $submit = $('.submit');
  var $input  = $('.additem')[0];
  var $ul     = $('.item-list');
  var $done   = false;
/*
<p class="item-name"></p>
<button class="remove"></button>

*/
$submit.click(function( e ) {
  e.preventDefault();
  if ($input.value.length > 27) {
    $input.value = "";
    alert("Please enter an amount under 28 characters");
    return false;
  } else {
    addListItem();
    return false;
  }
});
  function addListItem() {
    var $li = "<li class='listItem'>" +
              "<p class='item-name'>"+$input.value+"</p>" +
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
    $done = false;
  } else {
    $(this).find("button").addClass("done");
    $(this).addClass("done");
    $done = true;
  }
});

$(document).on("click", ".remove", function() {
  $(this).parents("li").remove();
});

});
