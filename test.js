function numberSum(num) {
    if (num == 1) {
        return 1
    } else {
        return num + numberSum(num - 1)
    }
}

// console.log(numberSum(5))

function power(base, exponent) {
    if (exponent == 0) {
        return 1
    } else {
        return base * power(base, exponent - 1)
    }
} 

// console.log(power(2, 6))

// password generator
function changeVocals(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'a') str[i] = '*'
        str = str[0]
    }
    return str
}

function reverseWord(str) {

}

function setLowerUpperCase(str) {

}

function removeSpaces(str) {

}

function passwordGenerator(name) {
    name = changeVocals(name)

    return name
}

console.log(passwordGenerator('Serger Dragunov'))