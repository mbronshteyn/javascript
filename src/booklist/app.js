// Book Constructor
function Book( title, author, isbn ){
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI(){}

UI.prototype.addBookToList = function( book ){
  const list = document.getElementById( 'book-list' );
  const tr = document.createElement( 'tr');

  list.appendChild( tr );

  tr.appendChild( addTableColumn( book.title ));
  tr.appendChild( addTableColumn( book.author ));
  tr.appendChild( addTableColumn( book.isbn ));

  const deleteRow = document.createElement( 'td' );
  deleteRow.innerHTML = '<a href="#" class="delete">X</a>';

  tr.appendChild( deleteRow );
}

UI.prototype.showAlert = function( msg, className ){
  const div = document.createElement( 'div' );
  div.className = `alert ${className}`;
  div.appendChild( document.createTextNode( msg ));

  const container = document.querySelector( '.container' );
  const form = document.querySelector( '#book-form');
  container.insertBefore( div, form );

  setTimeout( function () {
    document.querySelector( '.alert').remove();
  }, 3000 );
}

UI.prototype.clearFields = function(){
  document.getElementById( 'title' ).value = '';
  document.getElementById( 'author' ).value = '';
  document.getElementById( 'isbn' ).value = '';

}

function addTableColumn( value ){
  let td = document.createElement('td');
  td.innerText = value;
  return td;
}

// Event Listner -> Add Book
document.getElementById('book-form').addEventListener( 'submit',
  function( e ){

    // Get form values
    const title = document.getElementById('title').value,
      author = document.getElementById( 'author').value,
      isbn = document.getElementById('isbn').value;

    const book = new Book( title, author, isbn );
    const ui = new UI();

    if( validateInput ( ui, title, author, isbn )){
      ui.addBookToList( book );
      ui.showAlert( "Book added succesfully", "success");
      ui.clearFields();
    }

    e.preventDefault();
  });


document.getElementById( 'book-list').addEventListener( 'click',
  function( e ) {

    const ui = new UI();
    ui.showAlert( 'Book Deleted!!!', 'success');

    if (e.target.className === 'delete') {
      e.target.parentNode.parentNode.remove();
    }

    e.preventDefault();

  })
function validateInput( ui, title, author, isbn ){
  if( title === '' ||
    author === '' ||
    isbn === '' ) {
    ui.showAlert( 'Please fill all fields', 'error' );
    return false;
  } else {
    return true;
  }
}


