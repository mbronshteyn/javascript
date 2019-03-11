
const array = [10, 0, 90, 80, 50, 0, 60];

//Create a function that will take the array and a student id (any number you want) as parameters. Use map to create a new array that stores each score in an object that includes the activity ID (first score is 0, second score 1, etc.) as well as the student ID.
const studentArrayFunc = ( array, studentId, activityId ) => {
  return array.map(score => {
    return {
      studentId: studentId,
      activityId: activityId,
      score: score
    };
  });
};

let studentArray = studentArrayFunc( array, 3, 10   );

console.log( studentArray );

// find the lowest score so we can filter out it down the road
const minScore = Math.min(...array);

console.log(minScore);

//Create a function that will create a new array with the lowest score removed. (For this exercise if both 0s are removed that is OK.)
const lowestRemovedFunc = ( studentArray ) => {
  return studentArray.filter(element => {
    if (element.score > minScore) return element;
  });
};
console.log( 'Lowest score removed array:', lowestRemovedFunc( studentArray ));


//Create a function that will Sum the scores.
const scoreTotalFunc = ( studentArray ) => studentArray.reduce(( total, student ) => {
  return total + student.score;
}, 0 );
console.log( 'Total Score: ', scoreTotalFunc( studentArray ));

//Create a function that will compute the average from an array passed in.
const avgScoreFunc = ( studentArray ) => {
  return ( scoreTotalFunc( studentArray ) / array.length ).toFixed( 2 );
}


console.log( 'Average: ', avgScoreFunc( studentArray ) );


//Create a function that will create a new array of score objects that have a 0 score.
const studentArrayZeroFunc = ( studentArray ) => {
  return studentArray.filter( student => student.score === 0 );
}
console.log('Zero score array: ', studentArrayZeroFunc( studentArray ));


//Using the functions you have created, generate a new array with full data.
// Compute the average once the lowest score has been removed.
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

let averageScore = pipe(
  studentArrayFunc,
  lowestRemovedFunc,
  avgScoreFunc
)( array, 12, 3  );

console.log( 'Another average score', averageScore  );

// And create an array of zero scores with the full data that could be provided to the learner.
let zeroScores = pipe(
  studentArrayFunc,
  studentArrayZeroFunc
)( array, 12, 3  );

console.log( 'Another zero scores array', zeroScores );








