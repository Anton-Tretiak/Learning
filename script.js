function checkPalindrom (str) {
    return str == str.split('').reverse().join('');
}

let s = "racecar";
s = s.replace(/[^a-zA-Z0-9]/g,'');
s = s.toLowerCase();

console.log(checkPalindrom(s));