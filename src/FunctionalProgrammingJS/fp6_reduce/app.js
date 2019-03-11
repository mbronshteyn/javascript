// Functional Programming for Beginners Exercise

const reviews = [4.5, 4.0, 5.0, 2.0, 1.0, 5.0, 3.0, 4.0, 1.0, 5.0, 4.5, 3.0, 2.5, 2.0];

// 1. Using the reduce function, create an object that
// has properties for each review value, where the value
// of the property is the number of reviews with that score.
// for example, the answer should be shaped like this:
// { 4.5: 1, 4: 2 ...}

const reviewByGrade = reviews.reduce( ( acc, review ) => {
  if( review in acc === false ){
    return { ...acc, [review]: 1 }
  } else {
    return { ...acc, [review]: acc[review]  + 1 }
  }
}, {} );

console.log( reviewByGrade );


