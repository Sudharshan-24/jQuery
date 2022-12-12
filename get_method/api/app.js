var number = document.getElementById("num").value;

for (var i = 1; i <= 10; i++) {
    var result = i * number;
    document.write(`${number} * ${i} = ${result} <br>`);
}