/* 
    Write an arrow function where it will do the following:
        a) It will take an array where the array elements will be the name of your friends
        b) Check if the length of each element is even, push elements with even length to a new array and return the result 
*/

// Step - 1
const friends = ['Md Hafiz', 'Pranta Ray', 'Md Yeasir', 'Rubel', 'Sakib', 'Santo'];
// Empty Array
const evenArray = [];
// Array Function
const arrayFriends = friends => {
    for (const friend of friends) {
        // Step - 2
        if(friend.length % 2 === 0){
            evenArray.push(friend);
        }
    }
    return evenArray;
}

console.log(arrayFriends(friends));
