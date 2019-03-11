// Storage Controller
const StorageCtrl = ( function (){
  const StorageCtrlSelectors = {
    meals: 'meals'
  }
  return {
    getData: function(){
      return JSON.parse(localStorage.getItem( StorageCtrlSelectors.meals ));
    },
    storeData: function( meals ){
      localStorage.setItem( StorageCtrlSelectors.meals, JSON.stringify( meals ));
    },
    clearData: function() {
      localStorage.removeItem( StorageCtrlSelectors.meals );
    },
    logData: function () {
      console.log( JSON.parse(localStorage.getItem( StorageCtrlSelectors.meals )));
    }
  }
})();


// Item Controller
const ItemCtrl = (function(){
  // Item Constructor
  const Item = function(id, name, calories){
    this.id = id;
    this.name = name;
    this.calories = calories;
  }

  // Data Structure / State
  let data = {
    items: [
      // {id: 0, name: 'Steak Dinner', calories: 1200},
      // {id: 1, name: 'Cookie', calories: 400},
      // {id: 2, name: 'Eggs', calories: 300}
    ],
    currentItem: null,
    totalCalories: 0
  }

  // Public methods
  return {
    getItems: function(){
      return data.items;
    },
    addItem: function( name, calories ){
      // add id
      let ID;
      if( data.items.length > 0 ){
        // Auto Increment the last id
        ID = data.items[ data.items.length - 1 ].id + 1;
      } else {
        ID = 0;
      }

      calories = parseInt( calories );

      const item = new Item( ID, name, calories );

      data.items = [ ...data.items, item ];

    },
    getTotalCalories: function(){

      let totalCalories = 0;

      this.getItems().forEach( _item => {
        totalCalories += _item.calories;
      });

      data.totalCalories = totalCalories;

      return totalCalories;
    },
    setItems: function( items ){
      data.items = items;
    },
    setCurrentItem: function( itemId ){
      data.currentItem = data.items[ itemId ];
    },
    getCurrentItem: function(){
      return data.currentItem;
    },
    updateItems: function( item ){

      let items = this.getItems();

      //find the index of object from array that you want to update
      const objIndex = items.findIndex(obj => obj.name === item.name );

      // make new object of updated object.
      const updatedObj = { ...items[objIndex], calories: item.calories };

      // make final new array of objects by combining updated object.
      const updatedItems = [
         ...items.slice(0, objIndex),
         updatedObj,
         ...items.slice(objIndex + 1),
      ];
      data.items = updatedItems;

      console.log( data.items );

    },
    deleteItem: function( id ){

      const ids = data.items.map( _item => { return _item.id } );

      const index = data.items.indexOf( id );

      data.items.splice( index, 1 );

      console.log( data.items );


      StorageCtrl.clearData();
      StorageCtrl.storeData( data.items );

      data.items.calories = this.getTotalCalories();
      UICtrl.setTotalCalories( data.items.calories );

      UICtrl.populateItemList( data.items );

      UICtrl.clearEditInput();

    },
    clearAllItems: function(){
      data.items = [];
      data.totalCalories = 0;
    },
    logData: function(){
      return data;
    }
  };
})();



// UI Controller
const UICtrl = (function(){
  const UISelectors = {

    itemList: '#item-list',

    addBtn: '.add-btn',
    updateBtn: '.update-btn',
    deleteBtn: '.delete-btn',
    backBtn: '.back-btn',

    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories',

    totalCalories: '.total-calories',

    clearBtn: '.clear-btn'
  }

  // Public methods
  return {
    populateItemList: function(items){
      let html = '';

      // make sure we see list
      this.showList();

      if( items !== null ) {
        items.forEach(function (item) {
          html += `<li class="collection-item" id="item-${item.id}">
        <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>
      </li>`;
        });
      }

      // Insert list items
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },
    getItemInput: function () {
      return {
        name: document.querySelector( UISelectors.itemNameInput ).value,
        calories: document.querySelector( UISelectors.itemCaloriesInput ).value
      };
    },
    clearInput: function(){
      document.querySelector( UISelectors.itemNameInput ).value = '';
      document.querySelector( UISelectors.itemCaloriesInput ).value = '';
    },
    addItemToForm: function( item ){
      document.querySelector( UISelectors.itemNameInput ).value = item.name;
      document.querySelector( UISelectors.itemCaloriesInput ).value = item.calories;
    },
    hideList: function(){
      document.querySelector( UISelectors.itemList ).style.display = 'none';
    },
    showList: function(){
      document.querySelector( UISelectors.itemList ).style.display = 'block';
    },
    setTotalCalories: function( totalCalories ){
      document.querySelector( UISelectors.totalCalories ).textContent = totalCalories;
    },
    clearEditInput: function(){
      UICtrl.clearInput();
      document.querySelector( UISelectors.addBtn ).style.display = 'inline';
      document.querySelector( UISelectors.updateBtn ).style.display = 'none';
      document.querySelector( UISelectors.deleteBtn ).style.display = 'none';
      document.querySelector( UISelectors.backBtn ).style.display = 'none';
    },
    showEditState: function(){
      document.querySelector( UISelectors.addBtn ).style.display = 'none';
      document.querySelector( UISelectors.updateBtn ).style.display = 'inline';
      document.querySelector( UISelectors.deleteBtn ).style.display = 'inline';
      document.querySelector( UISelectors.backBtn ).style.display = 'inline';
    },
    getSelectors: function(){
      return UISelectors;
    }
  };
})();


// App Controller
const App = (function(ItemCtrl, UICtrl, StorageCtrl){

  const loadEventListeners = function () {
    const UISelectors = UICtrl.getSelectors();

    // Add Item event
    document.querySelector(UISelectors.addBtn).
    addEventListener( 'click', itemAddSubmit );

    // Item Edit event
    document.querySelector( UISelectors.itemList )
      .addEventListener( 'click', itemUpdateSubmit );

    // Add Clear All event
    document.querySelector( UISelectors.clearBtn )
      .addEventListener( 'click', clearAllItemsClick );

    // Item Update event
    document.querySelector( UISelectors.updateBtn )
      .addEventListener( 'click', editSubmit );

    // Item Delete event
    document.querySelector( UISelectors.deleteBtn )
      .addEventListener( 'click', deleteSubmit );

    // Back Button event
    document.querySelector( UISelectors.backBtn )
      .addEventListener( 'click', backButtonSubmit );
  }

  const clearAllItemsClick = function ( e ) {

    ItemCtrl.clearAllItems();
    StorageCtrl.clearData();
    UICtrl.clearInput();
    UICtrl.populateItemList( ItemCtrl.getItems() );
    UICtrl.setTotalCalories( ItemCtrl.getTotalCalories() );
    e.preventDefault();
  };

  const backButtonSubmit = function ( e ) {
      console.log( 'back button' );
      UICtrl.clearEditInput();
      e.preventDefault();
  }

  const deleteSubmit = function (e) {

    const currentItem = ItemCtrl.getCurrentItem();

    ItemCtrl.deleteItem( currentItem.id );

    console.log( currentItem );

    e.preventDefault();
  }

  const editSubmit = function (e) {
    const item = UICtrl.getItemInput();

    ItemCtrl.updateItems( item );

    console.log( ItemCtrl.logData() );

    e.preventDefault();
  }

  const itemAddSubmit = function(e){

    const input = UICtrl.getItemInput();

    // Check if user entered values
    if( input.name !== '' &&
      input.calories !== '' ){
      ItemCtrl.addItem( input.name, input.calories );
      UICtrl.populateItemList( ItemCtrl.getItems() );
      UICtrl.setTotalCalories( ItemCtrl.getTotalCalories() );
      StorageCtrl.storeData( ItemCtrl.getItems() );
      UICtrl.clearInput();
    }

    e.preventDefault();
  };

  const itemUpdateSubmit = function ( e ) {

    if( e.target.classList.contains( 'edit-item' )){

      // Get List item id
      const listId =  e.target.parentNode.parentNode.id;
      const listIdArr = listId.split( '-' );
      const itemId = parseInt(listIdArr[1]);

      ItemCtrl.setCurrentItem( itemId );

      UICtrl.addItemToForm( ItemCtrl.getCurrentItem() );

      UICtrl.showEditState();

    }


    e.preventDefault();
  }

  // Public methods
  return {
    init: function(){

      // Set UI initial state
      UICtrl.clearEditInput();

      // Fetch items from data structure
      const items = StorageCtrl.getData();
      if( items === null ) {
        ItemCtrl.setItems( [] );
      } else {
        ItemCtrl.setItems( items );
      }

      // check if any items
      if( items !== null && items.length === 0 ){
        UICtrl.hideList();
      } else {
        // Populate list with items
        UICtrl.populateItemList(items);
        UICtrl.setTotalCalories( ItemCtrl.getTotalCalories() );
      }


      loadEventListeners();
    }
  };

})(ItemCtrl, UICtrl, StorageCtrl );


// Initialize App
App.init();

