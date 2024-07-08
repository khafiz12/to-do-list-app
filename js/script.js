function newItem() {
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    $('#list').append(li);
  }

  function crossOut() {
    li.toggleClass("strike");
  }

  li.on("dblclick", function() {
    crossOut();
  });

  let crossOutButton = $('<button class="delete-button">X</button>');
  li.append(crossOutButton);

  crossOutButton.on("click", function() {
    li.remove();
  });

  $('#list').sortable();
}
