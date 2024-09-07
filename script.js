function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculateResult() {
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch (error) {
        alert("Invalid calculation");
    }
}

function calculatePercentage() {
    let currentValue = document.getElementById("display").value;
    if (currentValue) {
        document.getElementById("display").value = eval(currentValue) / 100;
    }
}

function deleteLast() {
    let currentValue = document.getElementById('result').value;
    document.getElementById('result').value = currentValue.slice(0, -1);
}

function calculate() {
    try {
        let result = eval(document.getElementById('result').value);
        document.getElementById('result').value = result;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

function deleteLast() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

// function deleteLast() {
//     let currentValue = document.getElementById('result').value;
//     // Menghapus karakter terakhir dari string
//     document.getElementById('result').value = currentValue.slice(0, -1);
// }

