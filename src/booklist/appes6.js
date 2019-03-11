
class Book{
  constructor( title, author, isbn ){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  };
}

class UI{

  addBookToList( book ) {

    let list = document.getElementById( 'book-list' );
    let tr = document.createElement( 'tr');

    list.appendChild( tr );

    tr.appendChild( addTableColumn( book.title ));
    tr.appendChild( addTableColumn( book.author ));
    tr.appendChild( addTableColumn( book.isbn ));

    const deleteRow = document.createElement( 'td' );
    deleteRow.innerHTML = '<a href="#" class="delete">X</a>';

    tr.appendChild( deleteRow );
  }

  showAlert( msg, className ){
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

  clearFields(){
    document.getElementById( 'title' ).value = '';
    document.getElementById( 'author' ).value = '';
    document.getElementById( 'isbn' ).value = '';

  }
}

class Store {

  static getBooks(){
    let books;
    if( localStorage.getItem( 'books') === null){
      books = [];
    } else {
      books = JSON.parse( localStorage.getItem( 'books' ));
    }

    return books;
  }

  static displayBooks(){

  }

  static addBook( book ){

    let books = Store.getBooks();
    books.push( book );

    localStorage.setItem( 'books', JSON.stringify( books ));

  }

  static removeBook(){

  }
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
      Store.addBook( book );
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
      Store.removeBook();
    }

    e.preventDefault();

  })
function validateInput( ui, title, author, isbn ) {
  if (title === '' ||
    author === '' ||
    isbn === '') {
    ui.showAlert('Please fill all fields', 'error');
    return false;
  } else {
    return true;
  }
}
