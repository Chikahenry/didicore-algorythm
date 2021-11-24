// write a simple algorithm 

function operation(num1, num2, operator) {
    var result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = 'Invalid operator';
            break;
    }
    return result;
}




// In a game of table tennis,

function tennisGame(arr1, arr2) {
    var result = [];
    var score1 = 0;
    var score2 = 0;
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] > arr2[i]) {
            score1++;
        } else if (arr1[i] < arr2[i]) {
            score2++;
        }
    }
    result.push(score1, score2);
    return result;
}
  



// Next Bigger String:  

function nextBigger(str) {
    var result = '';
    var arr = str.split('');
    var index = arr.length - 1;
    while (index >= 0) {
        if (arr[index] > arr[index - 1]) {
            break;
        }
        index--;
    }
    if (index === 0) {
        return -1;
    }
    var index2 = index - 1;
    while (index2 >= 0) {
        if (arr[index2] > arr[index]) {
            break;
        }
        index2--;
    }
    var temp = arr[index];
    arr[index] = arr[index2];
    arr[index2] = temp;
    var temp2 = arr.slice(index + 1, arr.length).sort();
    for (var i = 0; i < temp2.length; i++) {
        arr[index + 1 + i] = temp2[i];
    }
    result = arr.join('');
    return result;
}
 