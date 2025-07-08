let arrValues = ['a', 'b', 'c', 'd'];

function init() {
    reset();
}

function reset() {
    sort(false);
    document.getElementById('javascript-function-target').innerHTML = 'Initial Value: '.concat(arrValues.toString());
}

function update() {
    sort(true);
    document.getElementById('javascript-function-target').innerHTML = 'Changed: '.concat(arrValues.toString());
}

function sort(desc) {
    if (desc) {
        arrValues = arrValues.sort((a, b) => b.localeCompare(a));
    } else {
        arrValues = arrValues.sort((a, b) => a.localeCompare(b));
    }
}

document.addEventListener('DOMContentLoaded', init);
