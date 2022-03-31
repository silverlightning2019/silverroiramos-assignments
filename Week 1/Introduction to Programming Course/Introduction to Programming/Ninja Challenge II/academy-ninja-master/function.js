function test() {
    var values = ["test","values","go","here"],
        valueToUse = values[Math.floor(Math.random() * values.length)];
    // do something with the selected value
    alert(valueToUse);
}