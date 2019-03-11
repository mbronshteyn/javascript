const form = document.querySelector('#task-form');
const taskList = document.querySelector( '.collection' );
const clrBtn = document.querySelector( '.clear-tasks' );
const filter = document.querySelector( '#filter' );
const taskInput = document.querySelector( '#task' );

// Load all event listeners
loadEventListeners();

function loadEventListeners(){
  document.addEventListener( 'DOMContentLoaded', addTasks );
  form.addEventListener( 'submit', addTask );
  taskList.addEventListener( 'click', removeTask );
  clrBtn.addEventListener( 'click', clearTasks );
  filter.addEventListener( 'keyup', filterTasks );
}

function addTasks( e ){

  let tasks;
  if( localStorage.getItem( 'tasks' ) === null ){
    tasks = [];
  } else {
    tasks = JSON.parse( localStorage.getItem('tasks'));
  }

  console.log( tasks );

  tasks.forEach( _task => {
    const li = document.createElement( 'li' );
    li.className = 'collection-item';
    li.appendChild(  document.createTextNode( _task ));

    // add href element
    const link = document.createElement( 'a' );
    // Add class
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';

    // Append link to li
    li.appendChild( link );

    // Append li to ul
    taskList.appendChild( li );
  });

  e.preventDefault();
}

function  addTask( e ) {

 if( taskInput.value === ''){
   alert( 'Add Task' );
 }

 // add li element
 const li = document.createElement( 'li' );
 li.className = 'collection-item';
 li.appendChild(  document.createTextNode( taskInput.value ));

 // Store in LS
  storeTaskInLocalStorage( taskInput.value );

 // add href element
 const link = document.createElement( 'a' );
 // Add class
 link.className = 'delete-item secondary-content';
 link.innerHTML = '<i class="fa fa-remove"></i>';

 // Append link to li
 li.appendChild( link );

 // Append li to ul
 taskList.appendChild( li );
 taskInput.value = '';



 e.preventDefault();
}

function storeTaskInLocalStorage( taskValue ){
  let tasks;
  if( localStorage.getItem( 'tasks' ) === null ){
    tasks = [];
  } else {
    tasks = JSON.parse( localStorage.getItem('tasks'));
  }

  tasks.push( taskValue );

  localStorage.setItem( 'tasks', JSON.stringify(tasks));

  let test = localStorage.getItem( 'tasks' );


}

function removeTask( e ) {

  if( e.target.parentElement.classList.contains( 'delete-item') ){
    if( confirm( `Are you sure?`)) {
      e.target.parentElement.parentElement.remove();
    }
  }

  removeTaskFromLocalStorage( e.target.parentElement.parentElement );

 e.preventDefault();
}

function removeTaskFromLocalStorage( taskItem ){
  let tasks;
  if( localStorage.getItem( 'tasks' ) === null ){
    tasks = [];
  } else {
    tasks = JSON.parse( localStorage.getItem('tasks'));
  }
  
  tasks.forEach( function ( task, index ){
    if( taskItem.textContent === task ){
      tasks.splice( index, 1 );
    }
  });

  localStorage.setItem( 'tasks', JSON.stringify( tasks ));

}

function clearTasks(e ){

  localStorage.removeItem( 'tasks' );

  while( taskList.firstChild ){
    taskList.removeChild( taskList.firstChild );
  }
}

function filterTasks( e ){
 const text =  e.target.value.toLowerCase();

 document.querySelectorAll('.collection-item' ).forEach(
   function( task ) {
     const item = task.firstChild.textContent;
     if (item.toLowerCase().indexOf(text) != -1) {
       task.style.display = 'block';
     } else {
       task.style.display = 'none';
     }
   } );
}
