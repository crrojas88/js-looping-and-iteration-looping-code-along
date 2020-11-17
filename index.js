function writeCards(array, event) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    }
    return result;
}

function countDown(integer) {
    while (integer > 0) {
        console.log(integer);
        integer-=1;
    }
    console.log(integer)
}
