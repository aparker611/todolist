$(document).ready(function() {
  var  $submit = $('.submit'),
       $input  = $('.additem')[0],
       $ul     = $('.item-list'),
       $done   = false,
       i       = 0;


if(typeof(Storage) !== "undefined") {
  for ( i = 0; i < localStorage.length; i++)
              $($ul).append(localStorage.getItem("item-"+i));
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

  function addListItem() {
    localStorage.setItem("item-"+i, $input.value);
    var $li = "<li class='listItem"+ " item-"+i  +"'>" +
              "<p class='item-name'>"+localStorage.getItem("item-"+i)+"</p>" +
              "<button class='remove'></button>" +
              "</li>";
  $ul.append($li);
  $input.value = "";
  localStorage.setItem("item-"+i, $li);
  return false;
}
$(document).on("click", ".listItem", function() {
var item = $(this).attr('class').split(' ')[1];
var $li = $(this);
  if($done) {
    $(this).find("button").removeClass("done");
    $(this).removeClass("done");
    localStorage.setItem(item, $li[0].outerHTML);
    $done = false;
  } else {
    $(this).find("button").addClass("done");
    $(this).addClass("done");
    localStorage.setItem(item, $li[0].outerHTML)
    $done = true;
  }
});
$(document).on("click", ".remove", function() {
  var obj = $(this).parents();
  var item = obj[0].classList[1];
  $(this).parents("li").remove();
    localStorage.removeItem(item);
    return false;
});

});
