// 1. create a constant named friends,
// which is an array that contains 2
// names of your choosing.

const friends = [ 'Joe', 'Ashley'];
console.log( 'List of Friends: ', friends );

// 2. Create a new constant named updatedFriends,
// which includes the friends array values plus
// one additional name

const updatedFriends = [...friends, 'Jane'];
console.log( 'Updated Friends: ', updatedFriends );

// 3. Create a new constant named friendNameLengths,
// which is based on the array updatedFriends,
// but instead of having the friends names,
// have the array store the length of each persons name.
const friendNameLengths = updatedFriends.map(name => {
  return name.length;
});
console.log( 'Friends name lengths: ',  friendNameLengths );

// find the longest name in array
// sort array first in descending order and pick the first element
const longestNameLength = friendNameLengths.sort((a, b) => b - a )[0];
console.log( 'Longest Friend name length: ', longestNameLength );

// 4. Create a new constant named shorterNamedFriends,
// which will be a list of the friends except the friend with the longest name.
shorterNamedFriends = updatedFriends.filter( name => {
  return name.length < longestNameLength;
});
console.log( 'ShorterNamedFrieds: ',  shorterNamedFriends );


// 5. Print each variable to the console.

// Solution can be seen at:
// https://jsbin.com/nevonet/1/edit?js,console
