'use strict';

/**
 * Recursively flattens arrays
 * Given a nested array it takes its nested items and inserts them in a flattened array
 * Given any other argument type it is ignored and not appended to the flattened array
 * @returns {Array}
 */
 var flatten = function() {
    var flattenedArray = [], recursiveIndex; //var setup
    for (recursiveIndex = 0; recursiveIndex < arguments.length; recursiveIndex++) { //Start recursive for loop
        if (arguments[recursiveIndex] instanceof Array) { //Check the argument is an Array
            flattenedArray = flattenedArray.concat(flatten.apply(this, arguments[recursiveIndex])); //Arg is Array so concat and use apply to make recursive call back to function
        } else { //Recursive call
            if(typeof arguments[recursiveIndex] === 'number'){ //Check that the arg is a Number as that is all we are interested in
                flattenedArray.push(arguments[recursiveIndex]); //Push the arg to the flat array
            }
        }
    }
    return flattenedArray; //Retrun the flat array
};

exports.flatten = flatten; //Export the flatten function
