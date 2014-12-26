var sampleArray = [0,0,7];

var incrementLastArrayElement = function(_array) {
    var newArray = [];
    // Your code should make newArray equal to an array that has the same
    // values as _array, but the last number has increased by one.
    
    // For example:
    // _array = [1, 2, 3];
    // turns into:
    // newArray = [1, 2, 4];
    
    newArray = _array.slice();
    newArray.push(newArray.pop() + 1);
    
    return newArray;
};

console.log(incrementLastArrayElement(sampleArray));


//Modifying Strings (capitalize, lowercase...)
//v1
var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;

    var capitalize = oldName.slice(0, 1);
    var name= oldName.slice(1, oldName.indexOf(" "));  
    var subName = oldName.slice(oldName.indexOf(" "));
    finalName = capitalize.toUpperCase() + name.toLowerCase() + subName.toUpperCase();
    
    return finalName;
};

console.log(nameChanger(name));
//v2
function nameChanger(oldName) {
    var finalName = oldName;
    var names = oldName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    return finalName;
}