let sampleWord = "astronaut";//the test word
let pwRegex = /(?=\w{5,})(?=.*\d{2,}.*)/; // This will check for 5+ characters and no repeating characters in a row
let result = pwRegex.test(sampleWord); //running