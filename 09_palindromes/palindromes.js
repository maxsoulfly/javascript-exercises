const palindromes = (word) => {
    // much more readable than /[^a-z0-9]/ - cannot understand for now
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789'; 

    const wordToCheck = word
        .toLowerCase()
        .split('')
        .filter(letter => alphanumerical.includes(letter))
        .join('');

    const reversedWord = wordToCheck
        .split('')
        .reverse()
        .join('');

    return wordToCheck===reversedWord;
};

// Do not edit below this line
module.exports = palindromes;
