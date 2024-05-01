// Write JavaScript functions to solve the following string problems:

// a) Return the length of a given string.

function stringLength(str) {
    return str.length;
}

const myString = "Hello, world!";
const length = stringLength(myString);
console.log(length); 

// b) Concatenate two strings together.
function concatenateStrings(str1, str2) {
    return str1 + str2;
}


const string1 = "Hello, ";
const string2 = "world!";
const result = concatenateStrings(string1, string2);
console.log(result);


// c) Determine if a given string is empty.
function isEmptyString(str) {
    return str.length === 0;
}

const myString = "";
console.log(isEmptyString(myString));

const anotherString = "Hello";
console.log(isEmptyString(anotherString));

// d) Count the number of vowels in a string.
function countVowels(str) {

    const vowels = ['a', 'e', 'i', 'o', 'u'];
    str = str.toLowerCase();
    let count = 0;
    
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    
    return count;
}

const myString = "Hello, world!";
console.log(countVowels(myString));


// e) Reverse a given string.
function reverseString(str) {

    const charArray = str.split('');

    const reversedArray = charArray.reverse();

    const reversedString = reversedArray.join('');

    return reversedString;
}


const myString = "Hello, world!";
console.log(reverseString(myString)); 

// f) Check if a string is a palindrome.
function isPalindrome(str) {
   
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    for (let i = 0; i < Math.floor(cleanStr.length / 2); i++) {
        if (cleanStr[i] !== cleanStr[cleanStr.length - 1 - i]) {
            return false;
        }
    }

    return true;
}


const palindromeString = "A man, a plan, a canal, Panama";
console.log(isPalindrome(palindromeString));

const nonPalindromeString = "Hello, world!";
console.log(isPalindrome(nonPalindromeString));


// g) Convert a string to uppercase.
function convertToUpperCase(str) {
    return str.toUpperCase();
}

const myString = "Hello, world!";
console.log(convertToUpperCase(myString));


// h) Find the first occurrence of a given character in a string.
function findFirstOccurrence(str, char) {
    return str.indexOf(char);
}


const myString = "Hello, world!";
const character = "o";
console.log(findFirstOccurrence(myString, character));


// i) Replace all occurrences of a given character in a string with another character.
function replaceAllOccurrences(str, oldChar, newChar) {
    return str.replace(new RegExp(oldChar, 'g'), newChar);
}

const myString = "Hello, world!";
const oldCharacter = "o";
const newCharacter = "x";
console.log(replaceAllOccurrences(myString, oldCharacter, newCharacter));

// j) Trim leading and trailing whitespace from a string.
function trimWhitespace(str) {
    return str.trim();
}

const myString = "   Hello, world!   ";
console.log(trimWhitespace(myString));
// k) Count the number of words in a string.
function countWords(str) {
    const wordsArray = str.split(/\s+/);
    return wordsArray.length;
}

const myString = "Hello, world! This is a test.";
console.log(countWords(myString));

// l) Check if a string contains only numeric characters.
function containsOnlyNumeric(inputString) {
    return /^\d+$/.test(inputString);
}

const string2 = "abc123";
console.log(containsOnlyNumeric(string2));


// m) Check if a string is a valid email address.
function isValidEmail(email) {
   
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

const email1 = "test@example.com";
const email2 = "invalid-email";
console.log(isValidEmail(email1));
console.log(isValidEmail(email2));

// n) Extract the domain name from a URL string.
function extractDomainFromURL(url) {
   
    const domainRegex = /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:/\n?]+)/;
    const match = url.match(domainRegex);
    if (match && match[1]) {
        return match[1];
    } else {
        return null;
}
const url1 = "https://www.example.com/page";
const url2 = "http://subdomain.example.co.uk";
console.log(extractDomainFromURL(url1)); 
console.log(extractDomainFromURL(url2));

// o) Convert a string into title case (the first letter of each word capitalized).
function toTitleCase(str) {
    return str.replace(/\b\w/g, function(match) {
        return match.toUpperCase();
    });
}

const sentence = "this is a sentence to convert into title case";
console.log(toTitleCase(sentence));

// p) Remove all non-alphabetic characters from a string.
function removeNonAlphabetic(str) {
    return str.replace(/[^a-zA-Z]/g, '');
}
const stringWithNonAlpha = "Hello! How are you? 123";
console.log(removeNonAlphabetic(stringWithNonAlpha));

// q) Check if a string is a valid palindrome permutation (ignoring spaces).
function isPalindromePermutation(str) {
    str = str.replace(/\s/g, '').toLowerCase();

    const frequency = {};
    for (let char of str) {
        frequency[char] = (frequency[char] || 0) + 1;
    }

    let oddCount = 0;
    for (let char in frequency) {
        if (frequency[char] % 2 !== 0) {
            oddCount++;
        }
    }
    return oddCount <= 1;
}
const string1 = "Tact Coa";
const string2 = "hello";
console.log(isPalindromePermutation(string1));
console.log(isPalindromePermutation(string2));

// r) Check if a string is an anagram of another string.
function isAnagram(str1, str2) {
    str1 = str1.replace(/\s/g, '').toLowerCase();
    str2 = str2.replace(/\s/g, '').toLowerCase();

    if (str1.length !== str2.length) {
        return false;
    }
    const frequency1 = {};
    const frequency2 = {};

    for (let char of str1) {
        frequency1[char] = (frequency1[char] || 0) + 1;
    }

    for (let char of str2) {
        frequency2[char] = (frequency2[char] || 0) + 1;
    }
    for (let char in frequency1) {
        if (frequency1[char] !== frequency2[char]) {
            return false;
        }
    }

    return true;
}
const string1 = "listen";
const string2 = "silent";
console.log(isAnagram(string1, string2));

// s) Find the longest word in a string.

function longestWord(str) {
    const words = str.split(/\s+/);
    let longest = '';
    let maxLength = 0;
    for (let word of words) {
        const cleanedWord = word.replace(/[^A-Za-z]/g, '');
        if (cleanedWord.length > maxLength) {
            longest = cleanedWord;
            maxLength = cleanedWord.length;
        }
    }

    return longest;
}
const sentence = "This is a sample sentence to find the longest word";
console.log(longestWord(sentence)); 


// t) Perform string compression by replacing repeated characters with the character followed by the count.
function compressString(str) {
    let compressed = '';
    let count = 1;

    for (let i = 0; i < str.length; i++) {

        if (str[i] === str[i + 1]) {
            count++;
        } else {
            compressed += str[i] + count;
            count = 1; 
        }
    }

    return compressed.length < str.length ? compressed : str;
}
const inputString = "aabbbccccdd";
console.log(compressString(inputString));
