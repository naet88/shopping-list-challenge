//Hint: you may find it helpful to read up on and use the following jQuery methods: 
//.submit(), preventDefault(), toggleClass(), and closest().

//Step 1: Single State Object
$(function () {

var state = {
  items: [
    {
      name: 'apples',
      checked: true,
    },
    {
      name: 'oranges',
      checked: false,
    },
    {
      name: 'milk',
      checked: true,
    },
    {
      name: 'cucumbers',
      checked: true,
    },
    {
      name: 'bread',
      checked: false,
    },
  ]
};

//Step 2: State modification functions (no jquery!)

//adding items function

function addItem(state, item) {
  state.items.push({
    name: item,
    checked: false,
  });
};

//ORIGINAL
// var addItem = function(state, item) {
//   state.items.push({
//     name: item,
//     checked: false
//   });
// };

//checked item function
// function checkedItem(state, item, newItemState) {
//   state.items[itemIndex] = newItemState;
// };

//Step 3: Render functions

var listItemHtml =
  '<li>' +
  '<span class="shopping-item"></span>' +
  '<div class="shopping-item-controls">' +
  '<button class="shopping-item-toggle">' +
  '<span class="button-label">check</span>' +
  '</button>' +
  '<button class="shopping-item-delete">' +
  '<span class="button-label">delete</span>' +
  '</button>' +
  '</div>' +
  '</li>'


//render the new item added to the list.

var renderList = function(state, element) {
  $('.shopping-list').html(' '); 

  state.items.forEach(function(item) {
    var itemElement = $(listItemHtml);
    itemElement.find('.shopping-item').text(item.name);
    if (item.checked == true) {
    	itemElement.find('.shopping-item').addClass('shopping-item__checked');
    }
		element.append(itemElement);
  });
};


//Step 4: jQuery event listeners!!

//add new items 
$('form').on('submit', (function(event) {
  event.preventDefault();
  var newItem = $('#js-new-item').val();
  addItem(state, newItem);
  renderList(state, $('.shopping-list'));
}));

//change item state
$('.js-shopping-list').on('click', 'button.shopping-item-toggle', function(event) {
   //get rid of class, shopping-item__checked and change state to true 
  $(this).parent().siblings().toggleClass('shopping-item__checked');
});

//delete item 
$('.js-shopping-list').on('click', 'button.shopping-item-delete', function(event) {
   //get rid of the entire list item 
  $(this).parent().parent().remove('li');
});


// Initialize the original list 
renderList(state, $('.shopping-list'));

});