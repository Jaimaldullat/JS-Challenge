// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

const cleanArray = function (array) {
    // Sort Array 
    array.sort((a, b) => a - b);

    // To store final result
    let finalArray = [];

    // To store each array of same numbers
    let tempArray = [];

    // To store first number from array
    let tempElement = array[0];
    array.forEach(element => {
        if (element === tempElement) {
            // If both numbers are same then add to tempArray
            tempArray.push(element);
        } else {
            // If only one elment we dont need to convert into array
            if (tempArray.length === 1) {
                finalArray.push(tempArray[0]);
            } else {
                finalArray.push(tempArray);
            }
            // All the same elements are added so clear tempArray
            // Add new elemtn into tempArray
            tempArray = [];
            tempArray.push(element);
            tempElement = element;

        }
    });
    return finalArray;
}
const inputArray = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];
cleanArray(inputArray);
