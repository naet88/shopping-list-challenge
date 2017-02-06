//Hint: you may find it helpful to read up on and use the following jQuery methods: 
//.submit(), preventDefault(), toggleClass(), and closest().

//Step 1: Single State Object

var state = {
	items: [
			{name: 'apples',
			checked: false, 
			},
			{name: 'oranges',
			checked: false,
			},
			{name: 'milk',
			checked: true,
			},
			{name: 'bread',
			checked: false,
			},
		]
	}

//Step 2: State modification functions (no jquery!)

//adding items function

var addItem = function(state, item) {
    state.items.push(item);
};

//checked item function
var checkedItem = function(state, item, newItemState) {
	 state.items[itemIndex] = newItemState;
};

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
//not sure what the function should take at the moment
//(thinkful said it must take state and element)  
var renderItem = function(state, element) {
	//inject new item and new item state into the DOM. Where do I put "newItem" variable?
	//The default state of new item is unchecked. 
	$(listItemHTML).find('shopping-item').text(newItem)
};

// New function: IF item get checked, then 
// shopping-item__checked should be added. maybe toggleclass is useful. 

// var renderCheckedState = function(state, element) {
	
// }


//Step 4: jQuery event listeners!! 

//new item addition 
$('form').on('submit', (function(event) {
	event.preventDefault();
//adding new new item. 
	addItem(state, item);
	renderList(state, $('.shopping-list'));
}));

//probably need to modify this for event delegation...
// $('button.shopping-item-toggle').on('click', (function(event) {

// }));

