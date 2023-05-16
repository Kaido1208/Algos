//1 Remove Blanks..
function removeBlanks(str) {
    let newString = ''

    for(let i = 0; i < str.length; i++) {
        if(str[i] != ' ') {
            newString += str[i]
        }
    }
    return newString;
};
console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "));
console.log(removeBlanks("I can not BELIEVE it's not BUTTER"));
console.log("----------");

//2 Get Digits..
function getDigits(str) {
    let newDigits = ''
    for (let char in str) {
        if(!isNaN(str[char])) {
            newDigits += str[char]
        }
    }
    return Number(newDigits)
}
console.log(getDigits("abc8c0d1ngd0j0!8"));
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"));
console.log("----------");

//3 Acronyms..
function acronym(str) {
    let strArray = str.split(' ')
    let wordArr = ''
    for (let word in strArray) { 
        if(strArray[word].length > 0) {
        wordArr += strArray[word][0].toUpperCase()
        }
    }
    return wordArr
}
console.log(acronym(" there's no free lunch - gotta pay yer way. "));
console.log(acronym("Live from New York, it's Saturday Night!"));
console.log("----------");

//4 Count Non-Spaces..
function countNonSpaces(str) {
    let counter = 0
    for (let char in str) {
        if(str[char] != ' ') {
            counter++
        }
    }
    return counter
}
console.log(countNonSpaces("Honey pie, you are driving me crazy"));
console.log(countNonSpaces("Hello world !"))
console.log("----------");

//5 Remove Shorter Strings..
function removeShorterStrings(arr, len) {
    let removeShort = []
    let nextIndex = 0
    for(let value in arr) {
        if(arr[value].length >= len) {
            removeShort[nextIndex++] = arr[value]
        }
    }
    return removeShort
}
console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4));
console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3) );