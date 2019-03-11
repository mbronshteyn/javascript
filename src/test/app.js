
const personPrototypes = {
 
  greeting: function () {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
  
}

const mary = Object.create( personPrototypes );


mary.firstName = 'Mary';
mary.lastName = 'Williams';

console.log( mary.greeting());

const mike = Object.create( personPrototypes, {
  firstName : { value: 'Mike' },
  lastName : { value: 'Bronshteyn' },
  age: { value: 50 }
} );

console.log( mike.greeting() );
;
